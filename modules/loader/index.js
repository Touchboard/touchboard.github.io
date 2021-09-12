Main.add_module({
	type: 'loader',

	style: `
		body.show_loader {
			overflow: hidden;
		}

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
		body.show_loader .loader {
			opacity: 1;
			visibility: visible;
			pointer-events: auto;
		}
		.loader img {
			position: absolute;
			left: 50%;
			top: 50%;
			width : 8vh;
			animation: .5s loader_load infinite alternate;
		}
		@keyframes loader_load {
			0% {transform: translate(-50%, -50%)  scale(1);}
			100% {transform: translate(-50%, -50%)  scale(1.2);}
		}
	`,

	html: ({about, intro, preorder}) => {
		document.body.classList.add('show_loader')
		return `
			<div class="loader">
				<img src="./main/graphic/logo.png"/>
			</div>
		`
	},

	on_load() {
		document.body.classList.remove('show_loader')
		console.log('loaded')
	},

	on_start() {
		setTimeout(this.onload, 10000)
	},
})
