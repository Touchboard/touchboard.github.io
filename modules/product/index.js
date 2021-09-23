Main.add_module({
	type: 'product',

	style: `
		.product {
			scroll-snap-align: center;
			box-sizing: border-box;
		}

		.product .box {
			position: relative;
			height: 90vh;
			background-color: white;
			border-radius: var(--space-10);
			filter: contrast(.9);
		}

		.product .frame {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			width: 90vh;
			height: 90vh;
			background-size: cover;
			transition: .5s linear;
			visibility: hidden;
			opacity: 0;
		}

		.product .frame.show {
			visibility: visible;
			opacity: 1;
		}

		.product .nav {
			position: absolute;
			top: 50%;
			width: 100px;
			height: 90vh;
			background-size: auto 40px;
			background-repeat: no-repeat;
			background-position: center;
			cursor: pointer;
			transform: translateY(-50%);
		}

		.product .nav.hide {
			display: none;
		}

		.product .nav.l {
			background-image: url('./modules/product/graphic/l.png');

		}
		.product .nav.r {
			background-image: url('./modules/product/graphic/r.png');
		}

		.product .pagination {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			cursor: default;
		}

		.product .pagination > div {
			display: inline-block;
			width: var(--space-01);
			height: var(--space-01);
			background-color: hsla(0, 0%, 40%, .3);
			border-radius: 9999px;
			margin: 0 2px;
		}
		.product .pagination > div.current {
			background-color: var(--front);
		}

		@media screen and (max-width: 815px) {
			.product {
				width: 100vw;
				margin-bottom: var(--space-10);
			}
			.product .box {
				overflow: hidden;
			}
			.product .nav.l {left: -30px;}
			.product .nav.r {right: -30px;}
			.product .pagination {bottom: var(--space-01);}
		}
		@media screen and (min-width: 815px) {
			.product {
				max-width: 1680px;
				margin: 0 auto;
				padding: 0 var(--space-20);
				margin-bottom: var(--space-20);
			}
			.product .nav.l {left: 5vw;}
			.product .nav.r {right: 5vw;}
			.product .pagination {bottom: var(--space-00);}
		}

	`,

	router: `Main.modules.product.pagination`,

	html({app, length}) {
		const img = `./modules/product/apps/${app}`
		const pagination =
			length == 1
				? ''
				: `
					<div
						class="nav l hide"
						onclick="${this.router}('${app}', 'l')"
					></div>
					<div
						class="nav r"
						onclick="${this.router}('${app}', 'r')"
					></div>
					<div class="pagination">
						<div class="current"></div>
						${Array(length - 1)
							.fill(0)
							.map(a => `<div></div>`)
							.join(' ')}
					</div>
				`

		if (app == 'context') {
			const open = c =>
				c == length - 1 && Main.modules.loader.on_load()
			let count = 0
			for (let i = 0; i < length; i++) {
				helpers.image_preloader(`${img} ${i}.jpg`, () =>
					open(count++)
				)
			}
		}

		let imgs = ''
		for (let i = 0; i < length; i++)
			imgs += `<div
				class="frame ${i == 0 ? 'show' : ''}"
				data-i="${i}"
				style="background-image: url('${img} ${i}.jpg')"
			></div>`

		return `
			<div
				class="product product_${app}"
				data-current="0"
				data-length="${length}"
				data-app="${app}"
			>
				<div class="box">
					${imgs}
					${pagination}
				</div>
			</div>
		`
	},

	pagination(app, dir) {
		const product = document.querySelector(`.product_${app}`)
		const length = parseInt(product.getAttribute('data-length'))
		let current = parseInt(product.getAttribute('data-current'))
		current = (current + (dir == 'r' ? 1 : -1) + length) % length
		this.set_page(app, current)
	},

	set_page(app, n) {
		const product = document.querySelector(`.product_${app}`)
		product
			.querySelector(`.nav.l`)
			.classList[n == 0 ? 'add' : 'remove']('hide')
		product
			.querySelectorAll('.pagination > div')
			.forEach((p, i) =>
				p.classList[i == n ? 'add' : 'remove']('current')
			)

		product.querySelectorAll('.frame').forEach(frame => {
			const current = frame.getAttribute('data-i') == n
			frame.classList[current ? 'add' : 'remove']('show')
		})
		product.setAttribute('data-current', n)
	},

	on_start() {
		window.addEventListener('scroll', e => {
			document
				.querySelectorAll('.product')
				.forEach(container => {
					const rect = container.getBoundingClientRect()
					const center = rect.top + rect.height / 2
					const middle = window.innerHeight / 2
					const offset = window.innerHeight * 0.2
					if (
						center < middle - offset ||
						middle + offset < center
					) {
						const app = container.getAttribute('data-app')
						let current = parseInt(
							container.getAttribute('data-current')
						)
						if (current != 0) this.set_page(app, 0)
					}
				})
		})
	},
})
