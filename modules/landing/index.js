Main.add_module({
	type: 'landing',

	style: `
		.landing {
			scroll-snap-align: center;
			box-sizing: border-box;
		}
		.landing .box {
			color: black;
			text-align: center;
			display: grid;
			grid-template-rows: .5fr 1fr;
			align-items: center;
			background-image: url('./modules/landing/graphic/img.jpg');
			background-position: top center;
			background-size:  cover;
			background-repeat: no-repeat;
			background-color: var(--surface-area);
			padding: var(--space-00);
			box-sizing: border-box;
			height: 100%;
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

		@keyframes landing_pop_open {
			0% {transform: translate(-50%, -50%) scale(0.5);}
			25% {transform: translate(-50%, -50%) scale(1.01);}
			60% {transform: translate(-50%, -50%) scale(0.995);}
			100% {transform: translate(-50%, -50%) scale(1);}
		}

		@keyframes landing_pop_close {
			0% {transform: scale(2);}
			25% {transform: scale(0.98);}
			60% {transform: scale(1.005);}
			100% {transform: scale(1);}
		}

		.landing .play {
			position: relative;
			height: 20vh;
			cursor: pointer;
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
			.landing .video {height: calc(80vw / 9 * 16);}
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
			.landing .video {height: calc(80vw / 16 * 9);}
		}
	`,

	html({about, portrait, landscape, button, preorder}) {
		const handler = `Main.modules.landing.on_click`
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
							onclick="${handler}(true)"
							src="./modules/landing/graphic/play.png"
							class="play"
						/>
					</div>
				</div>

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
})
