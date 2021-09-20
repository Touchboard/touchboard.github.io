Main.add_module({
	type: 'landing',

	style: `
		.landing {
			scroll-snap-align: center;
			box-sizing: border-box;
		}
		.landing .box {
			text-align: center;
			display: grid;
			align-items: center;
		    grid-template-rows: .5fr 1fr;
			background-image: url('./modules/landing/graphic/img2.jpg');
			background-position: top center;
			background-size:  cover;
			background-repeat: no-repeat;
			background-color: var(--surface-area);
			height: 100%;
			padding: var(--space-00);
			box-sizing: border-box;
			color: white;
		}
		.landing .play {
			position: relative;
			height: 20vh;
		}

		.landing .product_name {
			max-width: 90vw;
			width: 500px;
		}
		.landing .product_about {
			display: inline-block;
			max-width: 24ch;
		}
		@media screen and (max-width: 815px) {
			.landing {
				margin-bottom: var(--space-00);
				height: calc(100vh - var(--space-00));
			}
			.landing .box {
				border-radius: 0 0 var(--space-10) var(--space-10);
			}
			.landing .product_name {
				margin: var(--space-20) 0 var(--space-00);
			}
		}
		@media screen and (min-width: 815px) {
			.landing {
				max-width: 1680px;
				margin: var(--space-00) auto;
				padding: 0 var(--space-20);
				height: calc(100vh - 2 * var(--space-00));
			}
			.landing .box {
				border-radius: var(--space-10);
			}
			.landing .product_name {
				margin: var(--space-30) 0 var(--space-10);
			}
		}
	`,

	html: ({about, intro, button, preorder}) => {
		return `
			<div class="landing">
				<div class="box">
					<div style="align-self: start;">
						<img
							class="product_name"
							src="./modules/landing/graphic/touchboard.png"
						/>
						<br/>
						<div class="product_about typo_20">${about}</div>
					</div>
					<div>
						<img
							${Main.router(`https://www.youtube.com/embed/${intro}?autoplay=1`)}
							src="./modules/landing/graphic/play.png"
							class="play"
						/>
					</div>
				</div>
			</div>
		`
	},
})
