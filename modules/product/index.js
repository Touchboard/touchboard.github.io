Main.add_module({
	type: 'product',

	style: `
		.product {
			text-align: center;
			padding-bottom: 0;
		}

		.product .product_name {
			max-width: 80vw;
			width: 500px;
		}

		.product .product_about {
			max-width: 40ch;
			display: inline-block;
		}

		.product .box {
			position: relative;
			background-color: var(--surface-area);
		}
		.product .container {
			display: grid;
			grid-auto-columns: 1fr;
			grid-gap: var(--space-10);

			position: absolute;
			left: 0; right: 0;
			top: 0; bottom: 0;
			opacity: 0;
			transition: 1s opacity;
			visibility: hidden;
		}
		.product .container.show {
			opacity: 1;
			visibility: visible;
		}

		.product .container .slide_description {
			position: relative;
			z-index: 1;
			align-self: center;
			justify-self: center;
			max-width : 50ch;
			grid-area: desc;
		}

		.product .container .pagination {
			text-align: center;
			cursor: default;
		}

		.product .container .pagination .dot {
			display: inline-block;
			cursor: pointer;
			width: var(--space-00);
			height: var(--space-00);
			background-color: var(--surface-line);
			border-radius: 9999px;
		}

		.product .container .pagination .dot.current {
			width: var(--space-10);
			position: relative;
			overflow: hidden;
		}

		.product .container .pagination .dot.current .progress {
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background-color: var(--active);
			animation: expand 5s linear;
		}

		@keyframes expand {
			from {width: 0%;}
			to {width: 100%;}
		}

		.product .container .slide {
			position: relative;
			width: 100%;
			object-fit: contain;
			grid-area: prod;
		}

		@media screen and (max-width: 815px) {
			.product .product_name {
				margin-bottom: var(--space-00);
			}
			.product .product_about {
				margin-bottom: var(--space-30);
			}
			.product .container {
				grid-template-areas:
					"prod"
					"desc"
					"page";
				grid-template-rows: min-content 230px min-content;
				padding: var(--space-00);
			}
			.product .box {
				height: 520px;
			}
			.product .slide {
				height: 300px;
				margin: -70px 0;
			}
		}
		@media screen and (min-width: 815px) {
			.product .product_name {
				margin-bottom: var(--space-10);
			}
			.product .product_about {
				margin-bottom: var(--space-20);
			}
			.product .container {
				grid-template-areas:
					"desc prod";
					"page prod";
				padding: var(--space-20);
			}
			.product .box {
				height: 50vh;
			}
			.product .slide {
				height: calc(50vh + 200px);
				margin: -120px 0 -250px;
			}
		}

	`,

	html: ({list, about}) => {
		const url = url =>
			`./modules/product/graphic/slides/${url}.png`
		const container = ({graphic, title, description}, i, array) =>
			`<div class="container">
				<div class="slide_description">
					<div class="typo_20">${title}</div>
					<br/>
					<div>${description}</div>
				</div>
				<div class="pagination">
					${array
						.map(
							(l, n) => `
						<div
							class="dot ${i == n ? 'current' : ''}"
							onclick="Main.modules.product.on_click('${n}')"
						>
							<div class="progress"></div>
						</div>
					`
						)
						.join(' ')}
				</div>
				<img class="slide" src="${url(graphic)}">
			</div>`
		return `
			<div class="product responsive">
				<img class="product_name" src="./modules/product/graphic/touchboard.png">
				<br/>
				<div class="product_about typo_10">${about}</div>
				<br/>
				<div class="box">${list.map(container).join('')}</div>
			</div>
		`
	},

	current: 0,
	interval: null,

	on_start() {
		const cs = document.querySelectorAll('.product .container')
		const check = () => {
			cs.forEach((container, i) => {
				container.classList[
					i == this.current ? 'add' : 'remove'
				]('show')
				if (i == this.current)
					container
						.querySelectorAll('.progress')
						.forEach(p => {
							p.style.animation = 'none'
							p.offsetHeight
							p.style.animation = null
						})
			})
			this.current = (this.current + 1) % cs.length
		}
		check()
		clearInterval(this.interval)
		this.interval = setInterval(check, 5000)
	},

	on_click(i) {
		this.current = parseInt(i)
		this.on_start()
	},
})
