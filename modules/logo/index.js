Main.add_module({
	type: 'logo',

	style: `
		.logo {
			position: fixed;
			z-index: 1;
			left: 50%;
			width: 64px;
			height: 38px;
			background-image: url('./main/graphic/logo.png');
			background-size: 64px;
			transform: translateX(-50%) scale(.8);
			background-position: center;
			background-repeat: no-repeat;
			cursor: pointer;
			transition: 1s;
		}
		.logo.on_landing {
			background-image: url('./modules/logo/graphic color.png');

		}
		.logo.on_scroll {
			top: var(--space-00);
			opacity: .2;
		}
		@media screen and (max-width: 815px) {
			.logo {
				top: var(--space-00);
			}
			.logo.on_landing {
				transform: translateX(-50%) scale(1);
			}
		}
		@media screen and (min-width: 815px) {
			.logo {
				top: var(--space-20);
			}
			.logo.on_landing {
				transform: translateX(-50%) scale(1.4);
			}
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
