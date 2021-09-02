const Main = {
	modules: {},

	on_load() {
		const current_page = this.get_current_page()
		document.body.innerHTML = ''
		for (let i in Model[current_page]) {
			const m = Model[current_page][i].module
			if (m in this.modules) {
				const html = this.modules[m].html(
					Model[current_page][i]
				)

				document.body.innerHTML += html
			}
		}
		for (let i in Model.global) {
			const m = Model.global[i].module
			if (m in this.modules) {
				const html = this.modules[m].html(Model.global[i])
				document.body.innerHTML += html
			}
		}
		for (let i in this.modules) {
			if (this.modules[i].on_start) this.modules[i].on_start()
		}
	},

	get_current_page() {
		const p = new URLSearchParams(window.location.search)
		return p.has('route') ? p.get('route') : 'landing'
	},

	add_keyboard_listener() {
		let dev = false
		let theme = false
		window.addEventListener('keyup', e => {
			if (e.key == 'd') dev = !dev
			else if (e.key == 't') theme = !theme
			document.body.classList[dev ? 'add' : 'remove']('dev')
			document.body.classList[theme ? 'add' : 'remove'](
				'theme_dark'
			)
			document.body.classList[!theme ? 'add' : 'remove'](
				'theme_light'
			)
		})
	},

	add_full_listener() {
		window.addEventListener('scroll', e => {
			document
				.querySelectorAll('.source_full')
				.forEach((source, i) => {
					const id = source.getAttribute('data-target')
					const target = document.querySelector(`#${id}`)
					const rect = source.getBoundingClientRect()
					const top = rect.top + rect.height * 0.2
					const bottom = rect.bottom - rect.height * 0.2
					const middle = document.body.offsetHeight / 2
					const a = helpers.map(
						middle,
						rect.top,
						top,
						0,
						1,
						true
					)
					const b = helpers.map(
						middle,
						bottom,
						rect.bottom,
						1,
						0,
						true
					)
					target.style.opacity = a * b
				})
		})
	},

	load() {
		this.add_keyboard_listener()
		this.add_full_listener()
		const module_unique = []
		for (let i in Model) {
			for (let n in Model[i]) {
				const m = Model[i][n].module
				if (!module_unique.includes(m)) module_unique.push(m)
			}
		}
		let counter = 0
		module_unique.forEach(module => {
			// script
			const script = document.createElement('script')
			script.src = `./modules/${module}/index.js`
			script.onload = () => {
				counter++
				if (counter == module_unique.length) this.on_load()
			}
			document.head.appendChild(script)
		})
	},

	add_module(module) {
		const css = document.createElement('style')
		css.type = 'text/css'
		css.innerText = module.style
		document.head.appendChild(css)
		if (!this.modules[module.type])
			this.modules[module.type] = module
	},

	router(url, style) {
		if (url) {
			let go = ''
			if (url[0] == '/') {
				const link = `index.html?route=${url.substring(1)}`
				go = `window.location.href='${link}';`
			} else if (url.indexOf('mailto') > -1)
				go = `window.location='${url}';`
			else go = `window.open('${url}');`
			return `
				onclick="${go}"
				style="cursor: pointer; ${style}"
			`
		} else return ''
	},
}

Main.load()

window.addEventListener('load', e => {
	// check address
	const p = new URLSearchParams(window.location.search)
	if (p.has('client')) {
		let key = p.get('client')
		if (key in pitches) {
			pitches[key].forEach(title => {
				let slide = document.createElement('img')
				slide.classList.add('slide')
				slide.src = `./slides/${title}.png`
				document.body.appendChild(slide)
			})
		}
	}
})
