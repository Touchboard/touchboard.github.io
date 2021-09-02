Main.add_module({
	type: 'landing',

	style: `
		.full {
			background-image: url('./modules/landing/img.jpg');
		}
		.landing {
			text-align: center;
			height: 100vh;
			display: grid;
			align-items: center;
		    grid-template-rows: min-content 1fr min-content;
			color: white;
		}
		.landing .product_name {
			max-width: 80vw;
			width: 500px;
		}
		.landing .product_about {
			display: inline-block;
			color: white;
			max-width: 30ch;
		}
		@media screen and (max-width: 815px) {
			.landing .product_name {
				margin: var(--space-20) 0 var(--space-00);
			}
		}
		@media screen and (min-width: 815px) {
			.landing .product_name {
				margin: var(--space-10) 0 var(--space-10);
			}
		}
	`,

	html: ({about}) => {
		return `
			<div class="full" id="target_full"></div>
			<div
				class="landing responsive source_full"
				data-target="target_full"
			>
				<div>
					<img
						class="product_name"
						src="./modules/landing/touchboard.png"
					/>
					<br/>
					<div class="product_about typo_10">${about}</div>
				</div>
				<div>
					<img
						${Main.router('https://youtu.be/WEZk_21VpL0')}
						src="./modules/landing/play.png"
						width="50vw"
					/>
				</div>
				<div>
					<button
						class="big"
						${Main.router('https://youtu.be/WEZk_21VpL0')}
					>
						Pre-Order
					</button>
				</div>
			</div>
		`
	},

	on_start() {},

	on_click(i) {},
})
