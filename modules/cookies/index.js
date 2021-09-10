Main.add_module({
	type: 'cookies',

	style: `
		.cookies {
			position: fixed;
			z-index: 2;
			left: 1vw;
			bottom: 1vw;
			background: linear-gradient(45deg, #ba4aff, #ff6b57);
			box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.4);
			box-sizing: border-box;
		}

		.cookies:not(.show) {
			text-align: center;
			padding-top: 14px;
			border-radius: 9999px;
			height: 90px;
			width: 90px;
		}

		.cookies.show {
			width: 96vw;
			width: 314px;
			display: grid;
			align-items: center;
			grid-template-columns: min-content auto;
			grid-gap: var(--space-00);
			border-radius: var(--space-00);
			color: white;
			padding: var(--space-00);
		}

		.cookies .typo_00 {
			display: inline-block;
			cursor: pointer;
			font-weight: bold;
			color: white;
			margin-top: var(--space-01);
		}

		.cookies .icon {
			display: inline-block;
			background-image: url('./modules/cookies/fingerprint.png');
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
			width: 43px;
			height: 60px;
			cursor: pointer;
		}
	`,

	model: {},
	handler: `Main.modules.cookies.on_click`,

	html(model) {
		this.model = model
		// return `
		// 	<div class="cookies">
		// 		<div class="icon" onclick="${this.handler}('toggle')"></div>
		// 		<div class="dynamic"></div>
		// 	</div>
		// `
		return ``
	},

	on_click(state) {
		if (state == 'accept') {
			Tracking.accept()
			this.hide()
		} else if (state == 'reject') {
			Tracking.reject()
			this.hide()
		} else if (state == 'toggle') {
			const cookies = document.querySelector('.cookies')
			const shown = cookies.classList.contains('show')
			if (Tracking.status() && shown) this.hide()
			else this.show(Tracking.status())
		}
	},

	hide() {
		const cookies = document.querySelector('.cookies')
		const dynamic = cookies.querySelector('.dynamic')
		cookies.classList.remove('show')
		dynamic.innerHTML = ''
	},

	show(status = true) {
		const cookies = document.querySelector('.cookies')
		const dynamic = cookies.querySelector('.dynamic')
		cookies.classList.add('show')
		if (status)
			dynamic.innerHTML = `
				<div class="typo_01">${this.model.reject.message}</div>
				<a class="typo_00" onclick="${this.handler}('reject')">
					${this.model.reject.button}
				</a>
			`
		else
			dynamic.innerHTML = `
				<div class="typo_01">${this.model.accept.message}</div>
				<a class="typo_00" onclick="${this.handler}('accept')">
					${this.model.accept.button}
				</a>
			`
	},

	on_start() {
		Tracking.accept()
		// const status = Tracking.on_load()
		// if (!status) this.show(false)
	},
})

const Tracking = {
	key: 'google_statistics',

	status() {
		return window.localStorage.getItem(this.key) === 'true'
	},

	set(flag) {
		window.localStorage.setItem(this.key, flag)
	},

	on_load() {
		if (!this.status()) return false
		this.enable()
		return true
	},

	reject() {
		this.set(false)
		location.reload()
	},

	accept() {
		this.set(true)
		this.enable()
	},

	enable() {
		const script = document.createElement('script')
		script.src = `https://www.googletagmanager.com/gtag/js?id=G-KQSZ2LR5T7`
		script.onload = () => {
			console.log('is on')
			window.dataLayer = window.dataLayer || []
			function gtag() {
				dataLayer.push(arguments)
			}
			gtag('js', new Date())
			gtag('config', 'G-KQSZ2LR5T7')
		}
		document.head.appendChild(script)
	},
}
