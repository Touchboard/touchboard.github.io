Main.add_module({
	type: 'loader',

	style: `
		.loader {
			position: fixed;
			z-index: 2;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			background: white;
			opacity: 0;
			visibility: hidden;
			pointer-events: none;
			transition: 1s;
		}
		.loader.show {
			opacity: 1;
			visibility: visible;
			pointer-events: auto;
		}
		.loader img {
			position: absolute;
			left: 50%;
			top: 50%;
			width : 8vh;
			animation: .5s load infinite alternate;
		}
		@keyframes load {
			0% {transform: translate(-50%, -50%)  scale(1);}
			100% {transform: translate(-50%, -50%)  scale(1.2);}
		}
	`,

	html: ({about, intro, preorder}) => {
		return `
			<div class="loader show">
				<img src="./main/graphic/logo.png"/>
			</div>
		`
	},

	on_load() {
		const loader = document.querySelector('.loader')
		loader.classList.remove('show')
		console.log('loaded')
	},

	on_start() {
		setTimeout(this.onload, 10000)
	},
})
