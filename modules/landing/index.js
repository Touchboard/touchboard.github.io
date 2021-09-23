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

		.landing .video {
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

		.landing.show .video {
			display: block !important;
		}

		.landing .ratio {
			position: relative;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 80vw;
		}

		.landing .ratio iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: var(--space-00);
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
			.landing .ratio {height: calc(80vw / 9 * 16);}
			.landing .landscape {display: none;}
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
			.landing .ratio {height: calc(80vw / 16 * 9);}
			.landing .portrait {display: none;}
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
							onclick="${handler}(event)"
							data-action="open"
							src="./modules/landing/graphic/play.png"
							class="play"
						/>
					</div>
				</div>

				<div
					class="video"
					onclick="${handler}(event)"
					data-action="close"
				>
					<div class="ratio">
						<iframe class="portrait" src="https://www.youtube.com/embed/${portrait}?modestbranding=1&showinfo=0&rel=0" frameborder="0"></iframe>

						<iframe class="landscape" src="https://www.youtube.com/embed/${landscape}?modestbranding=1&showinfo=0&rel=0" frameborder="0"></iframe>
					</div>
				</div>
			</div>
		`
	},

	on_click(e) {
		const landing = document.querySelector('.landing')
		const open =
			e.currentTarget.getAttribute('data-action') == 'open'
		landing.classList[open ? 'add' : 'remove']('show')
		if (!open) {
			const videos = landing.querySelectorAll('iframe')
			videos.forEach(video => {
				video.src = video.src
			})
		}
		if (open) {
			const ratio = landing.querySelector('.ratio')
			ratio.style.animation = 'none'
			ratio.offsetHeight
			ratio.style.animation = `1s landing_pop_open alternate`
		} else {
			const ratio = landing.querySelector('.play')
			ratio.style.animation = 'none'
			ratio.offsetHeight
			ratio.style.animation = `1s landing_pop_close alternate`
		}
	},
})
