Main.add_module({
	type: 'landing',

	style: `
		.full_landing {
			background-image: url('./modules/landing/graphic/img.jpg');
		}
		.landing {
			scroll-snap-align: center;
			text-align: center;
			height: 100vh;
			display: grid;
			align-items: center;
		    grid-template-rows: 1fr 1fr 1fr;
			color: white;
		}
		.landing .play {
			clip-path: polygon(0% 0%, 0% 100%, 100% 50%);
			height: 12vh;
			width: 12vh;
			object-fit: cover;
			object-position: 65%;
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

	html: ({about, intro, preorder}) => {
		return `
			<div class="full full_landing" id="target_full"></div>
			<div
				class="landing responsive source_full"
				data-target="target_full"
			>
				<div>
					<img
						class="product_name"
						src="./modules/landing/graphic/touchboard.png"
					/>
					<br/>
					<div class="product_about typo_10">${about}</div>
				</div>
				<div>
					<video
						${Main.router(intro)}
						src="./modules/landing/graphic/preview.mp4"
						class="play"
						muted loop playsinline preload autoplay
						oncanplaythrough="Main.modules.loader.on_load()"
					>
						Sorry, your browser doesn't support embedded videos.
					</video>
				</div>
				<div>
					<button
						class="big"
						${Main.router(preorder)}
					>
						Pre-Order
					</button>
				</div>
			</div>
		`
	},
})
// <img
// 	class="play"
// 	${Main.router(intro)}
// 	src="./modules/landing/graphic/play.png"
// 	width="60vw"
// />
