Main.add_module({
	type: 'landing',

	style: `
		.landing {
			position: relative;
			scroll-snap-align: center;
			height: 100vh;
			max-width: 1680px;
			margin: 0 auto;
		}

		.landing:not(.loaded) {
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			background-image:
				url('./modules/landing/sequence/sequence_0000.jpg');
		}

		.landing.loaded {
			height : 500vh;
			background-image : none;
		}

		.landing .typo {
			position: absolute;
			top: 0; left: 0;
			width: 100%;
			text-align: center;
		}

		.landing .hint {
			position: fixed;
			text-align: center;
			left: 50%;
			bottom: var(--space-10);
			background-image: url('./modules/landing/graphic/hint.png');
			width: 69px;
			height: 22px;
			animation: .4s landing_hint alternate infinite;
			transition: 1s;
		}

		.landing .hint.hide {
			visible: hidden;
			opacity: 0;
		}

		@keyframes landing_hint {
			0% {transform: translate(-50%, 50%);}
			100% {transform: translate(-50%, -50%);}
		}

		.landing .intro {
			position: absolute;
			display: none;
		}

		.landing .animation {
			position: sticky;
			z-index: -1;
			top: 0;
			width: 100%;
			height: 100vh;
		}

		.landing .lightbox {
			position: fixed;
			z-index: 2;
			top: 0; left: 0;
			right: 0; bottom: 0;
			width: 100%;
			heigth: 100%;
			background-color: hsla(0, 0%, 0%, .5);
			display: none;
			cursor: pointer;
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(5px);
		}

		.landing.show .lightbox {
			display: block !important;
		}

		.landing .video {
			position: relative;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 80vw;
			border-radius: var(--space-00);
			background: black;
		}

		.landing .play {
			position: absolute;
			bottom: -10vh;
			left: 50%;
			transform: translateX(-50%);
			cursor: pointer;
		}

		@keyframes landing_pop_open {
			0% {transform: translate(-50%, -50%) scale(0.5);}
			25% {transform: translate(-50%, -50%) scale(1.01);}
			60% {transform: translate(-50%, -50%) scale(0.995);}
			100% {transform: translate(-50%, -50%) scale(1);}
		}

		@keyframes landing_pop_close {
			0% {transform: translateX(-50%) scale(2);}
			25% {transform: translateX(-50%) scale(0.98);}
			60% {transform: translateX(-50%) scale(1.005);}
			100% {transform: translateX(-50%) scale(1);}
		}

		.landing .product_name {
			max-width: 90vw;
			width: 500px;
		}
		.landing .product_about {
			display: inline-block;
			max-width: 30ch;
		}
		@media screen and (max-width: 815px) {
			.landing {margin-bottom: var(--space-10);}
			.landing .typo {margin-top: var(--space-10);}
			.landing .video {height: calc(80vw / 9 * 16);}
		}
		@media screen and (min-width: 815px) {
			.landing {margin-bottom: var(--space-30);}
			.landing .typo {margin-top: var(--space-00);}
			.landing .video {height: calc(80vw / 16 * 9);}
		}
	`,

	html({about, portrait, landscape, button, preorder}) {
		const handler = `Main.modules.landing.on_click`
		return `
			<div class="landing">
				<div class="typo responsive">
					<div class="typo_30">Touchboard</div><br/>
					<div class="product_about">${about}</div>
				</div>


				<img
					onclick="${handler}(true)"
					src="./modules/landing/graphic/play.png"
					class="play"
				/>

				<div class="hint dark"></div>
				<canvas	class="animation"></canvas>

				<div
					class="lightbox"
					onclick="${handler}(false)"
					data-src="${window.innerWidth > 815 ? landscape : portrait}"
				>
					<iframe class="video" frameborder="0"></iframe>
				</div>
			</div>
		`
	},

	on_click(open) {
		const landing = document.querySelector('.landing')
		landing.classList[open ? 'add' : 'remove']('show')
		const video = landing.querySelector('.video')
		if (open) {
			const url = landing
				.querySelector('.lightbox')
				.getAttribute('data-src')
			video.src = `https://www.youtube.com/embed/${url}?modestbranding=1&showinfo=0&rel=0&autoplay=1`
		} else video.src = ''

		if (open) {
			video.style.animation = 'none'
			video.offsetHeight
			video.style.animation = `1s landing_pop_open alternate`
		} else {
			const button = landing.querySelector('.play')
			button.style.animation = 'none'
			button.offsetHeight
			button.style.animation = `1s landing_pop_close alternate`
		}
	},

	on_start() {
		const sequences = 128
		const landing = document.querySelector('.landing')
		const hint = landing.querySelector('.hint')
		const cnv = landing.querySelector('.animation')
		const ctx = cnv.getContext('2d')
		let current = 0
		let load_check_counter = 0
		let to_draw = false
		const imgs = new Array(sequences + 1).fill().map((_, i) => {
			const img = document.createElement('img')
			img.onload = () => {
				if (load_check_counter++ < sequences) return
				landing.classList.add('loaded')
				Main.modules.loader.on_load()
				on_resize()
			}
			const n = i.toLocaleString('en-US', {
				minimumIntegerDigits: 4,
				useGrouping: false,
			})
			img.src = `./modules/landing/sequence/sequence_${n}.jpg`
			return img
		})

		const draw = () => {
			to_draw = true
			window.requestAnimationFrame(() => {
				if (!to_draw) return
				to_draw = false
				const img = imgs[current]
				// get the scale
				var s = Math.max(
					cnv.width / img.width,
					cnv.height / img.height
				)
				// get the top left position of the image
				ctx.drawImage(
					img,
					cnv.width / 2 - (img.width / 2) * s,
					cnv.height / 2 - (img.height / 2) * s,
					img.width * s,
					img.height * s
				)
			})
		}

		const on_resize = () => {
			cnv.width = cnv.offsetWidth
			cnv.height = cnv.offsetHeight
			draw(current)
		}
		window.addEventListener('resize', on_resize)

		window.addEventListener('scroll', e => {
			const rect = landing.getBoundingClientRect()
			const a = -rect.top / (rect.height - window.innerHeight)
			current = Math.round(
				Math.min(Math.max(a, 0), 1) * sequences
			)
			draw()
			hint.classList[a > 0.01 ? 'add' : 'remove']('hide')
		})
	},
})
