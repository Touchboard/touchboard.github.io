Main.add_module({
	type: 'logo',

	style: `
		.logo {
			position: fixed;
			z-index: 1;
			left: 50%;
			top: 50px;
			width: 64px;
			height: 38px;
			background-image: url('./modules/logo/graphic mono.png');
			background-size: 50px;
			transform: translate(-50%, -50%);
			background-position: center;
			background-repeat: no-repeat;
			cursor: pointer;
			transition: 1s;
		}
		.logo.on_landing {
			background-image: url('./modules/logo/graphic color.png');
			background-size: 64px;
		}
		.logo.on_scroll {
			top: 30px;
			opacity: .8;
		}
	`,

	html({onclick}) {
		return `<div
			class="logo dark"
			${Main.router(onclick)}
		></div>`
	},

	on_start() {
		let at_top_store = false
		const dom = document.querySelector('.logo')
		const current_page = Main.get_current_page()
		const change_logo = state => {
			if (current_page == 'landing') {
				dom.classList[!state ? 'add' : 'remove']('on_landing')
				dom.classList[state ? 'add' : 'remove']('dark')
			}
			dom.classList[state ? 'add' : 'remove']('on_scroll')
		}
		change_logo(at_top_store)
		window.addEventListener('scroll', e => {
			const at_top = document.body.scrollTop > 10
			if (at_top_store != at_top) {
				at_top_store = at_top
				change_logo(at_top)
			}
		})
	},
})
