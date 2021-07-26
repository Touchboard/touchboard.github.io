Main.add_module({
	type: 'product',

	style: `
		.product {
			text-align: center;
			padding-bottom: 0;
			pointer-events: none;
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
			background: var(--surface-area);
			// background: radial-gradient(circle closest-corner at 70% 60%, var(--middle-area), var(--surface-area));
			// border-radius: var(--space-00);
		}
		.product .container.show {
			opacity: 1;
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
		}

		.product .container .slide_description {
			position: relative;
			z-index: 1;
			align-self: center;
			justify-self: center;
			max-width : 50ch;
			grid-area: desc;
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
				grid-template-areas: "prod" "desc";
				padding: var(--space-00);
			}
			.product .box {
				height: 450px;
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
				grid-template-areas: "desc prod";
				padding: var(--space-20);
			}
			.product .box {
				height: 50vh;
			}
			.product .slide {
				height: calc(50vh + 200px);
				margin: -120px 0 -200px;
			}
		}

	`,

	html: ({list, about}) => {
		const url = url =>
			`./modules/product/graphic/slides/${url}.png`
		const container = ({graphic, title, description}) => {
			return `<div class="container">
				<div class="slide_description">
					<div class="typo_20">${title}</div>
					<br/>
					<div>${description}</div>
				</div>
				<img class="slide" src="${url(graphic)}">
			</div>`
		}
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

	on_start() {
		const cs = document.querySelectorAll('.product .container')
		let n = 0
		const check = () => {
			cs.forEach((container, i) =>
				container.classList[i == n ? 'add' : 'remove']('show')
			)
			n = (n + 1) % cs.length
		}
		check()
		setInterval(check, 5000)
	},
})
