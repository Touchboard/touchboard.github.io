Main.add_module({
	type: 'explore',

	style: `
		.explore {
			scroll-snap-align: center;
			padding-top: var(--space-20);
			box-sizing: border-box;

			position: relative;
			overflow: hidden;
			width: 100vw;
			height: 100vh;
			-webkit-user-select: none !important;
		}

		.explore .app_container {
			position: relative;
			z-index: 1;
			width: 100%;
			height: 28vh;
			align-self: end;
			background-image: url('./modules/explore/graphic/desktop.png');
			background-repeat: no-repeat;
			background-position: top center;
			background-size: auto 60%;
		}

		.explore .app_container .slider {
			position: absolute;
			white-space: nowrap;
			height: 100%;
			left: 50%;
			transition: .5s;
		}

		.explore .app_container .slider .app {
			position: relative;
			display: inline-block;
			height: 100%;
			margin: 0 -20px;
			cursor: pointer;
		}
		.explore .app_container .slider .app.show {
			z-index: -1;
		}
		@keyframes app_focus {
			0% {transform: translateY(0%);}
			25% {transform: translateY(4%);}
			60% {transform: translateY(-1%);}
			100% {transform: translateY(0%);}
		}

		.explore .layout {
			position: absolute;
			top: 68%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-width: 1200px;
			max-height: 1200px;
			opacity: 0;
			visibility: hidden;
		}

		.explore .compliments {
			position: absolute;
			top: 68%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-width: 1200px;
		}

		.explore .compliment {
			position: absolute;
			z-index: -1;
			transform: translate(-50%, -50%);

			background-repeat: no-repeat;
			background-position: left center;
			background-size: auto;

			height: calc(100% * var(--h) / 1200);
			opacity: 0;
			visibility: hidden;
			transition: .5s;
		}

		.explore .show {
			opacity: 1;
			visibility: visible;
		}

		.explore .go {
			position: absolute;
			z-index: 1;
			top: calc(50% + var(--y));
			left: calc(50% + var(--x));
			border-radius: 9999px;
			width: 40px;
			height: 40px;
			cursor: pointer;
			animation: explore_pulse .5s infinite alternate;
		}

		@keyframes explore_pulse {
			0% {
				transform: translate(-50%, -50%) scale(1);
				background-color: rgba(117, 177, 255, 0.2);
			}
			100% {
				transform: translate(-50%, -50%) scale(1.1);
				background-color: rgba(117, 177, 255, 0.4);
			}
		}

		@media screen and (max-width: 815px) {
			.explore .layout,
			.explore .compliments {
				width: 110vw;
				height: 110vw;
			}
			.explore .compliment {
				left: calc(50% + var(--x) - 5%);
				top: calc(50% + var(--y) + 10%);
			}
		}
		@media screen and (min-width: 815px) {
			.explore .layout,
			.explore .compliments {
				width: 100vh;
				height: 100vh;
			}
			.explore .compliment {
				left: calc(50% + var(--x));
				top: calc(50% + var(--y));
			}
		}
	`,

	app_current: '',
	layout_current: 'top',
	interval: null,
	root: './modules/explore/apps',
	current: 'spotify',
	apps: [],

	html({list}) {
		this.model = list
		const handler = `Main.modules.explore.on_click`
		let apps = ''
		let layouts = ''
		let compliments = ''

		const create_compliment = (app, [name, x, y, w, h]) => `
			<img
				class="compliment compliment_${app}"
				style="--x:${x}%; --y:${y}%; --w:${w}; --h:${h};"
				src="${this.root}/${app}/add_${name}.png"
			/>
		`
		const create_dot = ({go, x, y, stay, app}) => `
			<div
				class="go"
				style="--x: ${x}%; --y: ${y}%"
				${
					stay
						? `onclick="${handler}(event)"`
						: `onmousedown="${handler}(event)"`
				}
				data-type="layout"
				data-to="${go}"
				data-app="${app || ''}"
				${stay ? '' : `data-up="${this.layout_current}"`}
			></div>
		`

		for (let app in list) {
			if (this.app_current == '') this.app_current = app
			apps += `
				<img
					class="app app_${app}"
					src="${this.root}/${app}/app.png"
					onclick="${handler}(event)"
					data-type="app"
					data-to="${app}"
				/>
			`
			this.apps.push(app)
			for (let layout in list[app]) {
				if (layout[0] == '$') {
					if (layout == '$compliment')
						compliments += list[app][layout]
							.map(c => create_compliment(app, c))
							.join('')
				} else {
					layouts += `<div
						class="layout cover child_${app} layout_${layout}"
						style="background-image:
							url('${this.root}/${app}/${layout}.png')"
					>
						${list[app][layout].map(create_dot).join('')}
					</div>`
				}
			}
		}
		return `
			<div class="explore">
				<div class="app_container">
					<div class="slider">${apps}</div>
				</div>
				<div class="compliments">${compliments}</div>
				${layouts}
			</div>
		`
	},

	select_app(to) {
		this.app_current = to

		const slider = document.querySelector(`.explore .slider`)
		document.querySelectorAll('.app').forEach(app => {
			// set image url while changing apps in case the default is changed
			const name = app.getAttribute('data-to')
			app.src = `${this.root}/${name}/app.png`
			// get / set data from current
			const a = app.classList.contains(`app_${to}`)
			if (a) {
				const o = `-${app.offsetLeft + app.offsetWidth / 2}px`
				slider.style.marginLeft = o
			}
			app.classList[a ? 'add' : 'remove']('show')
		})
		this.select_layout('top')

		// compliments
		document.querySelectorAll(`.compliment`).forEach(c => {
			c.classList.remove('show')
		})
		if (this.interval) clearInterval(this.interval)
		let counter = 0
		const interval = () => {
			document
				.querySelectorAll(`.compliment_${this.app_current}`)
				.forEach((c, i, list) => {
					const a = counter % list.length == i
					c.classList[a ? 'add' : 'remove']('show')
				})
			counter++
		}
		this.interval = setInterval(interval, 5000)
		interval()
	},

	select_layout(to) {
		this.layout_current = to
		document.querySelectorAll('.layout').forEach(layout => {
			const a = layout.classList.contains(
				`child_${this.app_current}`
			)
			const l = layout.classList.contains(`layout_${to}`)
			layout.classList[a && l ? 'add' : 'remove']('show')
		})
	},

	on_click(e) {
		const t = e.currentTarget
		const type = t.getAttribute('data-type')
		const to = t.getAttribute('data-to')
		if (type == 'app') this.select_app(to)
		else if (type == 'layout') {
			const up = t.getAttribute('data-up')
			const app = t.getAttribute('data-app')
			if (up) {
				const body = document.body
				const handler = e => {
					body.removeEventListener('mouseup', handler)
					this.select_layout(up)
				}
				body.addEventListener('mouseup', handler)
			}
			this.select_layout(to)
			if (app) {
				const c = `.app_${this.app_current}`
				const a = document.querySelector(c)
				a.src = `${this.root}/${this.app_current}/${app}.png`
				a.style.animation = 'none'
				a.offsetHeight
				a.style.animation = 'app_focus 1s alternate'
			}
		}
	},

	on_start() {
		setTimeout(() => this.select_app(this.current), 100)
		let intro = false
		let interval = null
		let dir = 1
		let cursor = 3
		const play_animation = active => {
			console.log(active)
			if (active && !interval) {
				interval = setInterval(() => {
					this.select_app(this.apps[cursor])
					cursor += dir
					if (cursor == 0 || cursor == this.apps.length - 1)
						dir *= -1
				}, 500)
			}
			if (!active) {
				console.log('off')
				cursor = 0
				dir = 1
				clearInterval(interval)
				interval = null
				this.select_app(this.current)
			}
		}
		const container = document.querySelector('.app_container')
		window.addEventListener('scroll', e => {
			const rect = container.getBoundingClientRect()
			const half = rect.top
			const bottom = window.innerHeight
			const bool = bottom * 1.5 > half && half > bottom / 4
			if (intro != bool) {
				intro = bool
				play_animation(bool)
			}
		})
	},
})
