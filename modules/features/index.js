Main.add_module({
	type: 'features',

	style: `

		.features {
			position: relative;
		}

		.features .title {
			box-sizing: border-box;
			color: var(--surface-line);
		}

		.features .title.current {
			background-image: linear-gradient(
				0.4turn,
				#ff6172,
				#ec2cd9 50%,
				#5606ef
			);
			-webkit-background-clip: text;
			-moz-background-clip: text;
			-webkit-text-fill-color: transparent;
			-moz-text-fill-color: transparent;
		}

		.features .expander {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		.features .expander .viewport {
			position: sticky;
			z-index: 0;
			top: 0;
			display: grid;
			align-items: center;
			height: 100vh;
			box-sizing: border-box;
			overflow: hidden;
		}

		.features .notes {
			position: relative;
			z-index: 1;
			grid-area: notes;
			display: none;
		}

		.features .slide {
			width: 100%;
			height: 100%;
			opacity: 0;
			object-fit: contain;
			grid-area: tb;
		}

		.features .slide.show {
			opacity: 1;
		}


		@media screen and (max-width: 815px) {
			.features {
				padding-bottom: 60vh;
				text-align: center;
			}
			.features .expander .viewport {
				grid-template-rows: 45% 30% 25%;
				grid-template-areas:
					'title'
					'tb'
					'notes';
				justify-items: center;
			}
			.features .notes {
				max-width: 300px;
			}
			.features .title {
				display: inline-block;
				width: 300px;
				text-align: center;
			}
			.features .slide {
				transform: scale(2.7);
			}
		}
		@media screen and (min-width: 815px) {
			.features {
				padding-top: 10vh;
				padding-bottom: 70vh;
			}
			.features .expander .viewport {
				grid-template-columns: 1fr 40%;
				grid-template-rows: auto 60%;
				grid-template-areas:
					'title notes'
					'tb tb';
					justify-items: center;
			}
			.features .title {
				width: 40%;
				text-align: right;
			}
			.features .slide {
				transform: scale(1.5);
			}
			.features .notes {
				max-width: 30ch;
				justify-self: start;
			}
		}
	`,

	html: ({list}) => {
		const feature_text = ({title, slides}) => {
			return `<div
				data-length="${slides.length - 1}"
				class="title typo_30"
			>
				${title}
			</div>
			<br/>`
		}
		const feature_graphic = ({notes}) => {
			return `<div class="notes">${notes}</div>`
		}
		const feature_slides = ({slides}, i) => {
			const slide = (src, n) =>
				`<img
					class="slide"
					data-i="${i}"
					data-n="${n}"
					src="./modules/features/graphic/${src}.png"
				/>`
			return `${slides.map(slide).join('')}`
		}

		return `
			<div class="features responsive">
				${list.map(feature_text).join('')}
				<div class="expander">
					<div class="viewport">
						${list.map(feature_graphic).join('')}
						${list.map(feature_slides).join('')}
					</div>
				</div>
			</div>
		`
	},

	on_start() {
		const titles = document.querySelectorAll('.features .title')
		const notes = document.querySelectorAll('.features .notes')
		const slides = document.querySelectorAll('.features .slide')
		window.addEventListener('scroll', e => {
			let brightest = titles[0]
			const half = window.innerHeight / 2
			const quarter = window.innerHeight / 4
			titles.forEach((title, i) => {
				const rect = title.getBoundingClientRect()
				const middle = rect.top + rect.height / 2
				const cursor = middle - quarter
				const a = helpers.map(cursor, -half, 0, 0, 1)
				const b = helpers.map(cursor, 0, half, 1, 0)
				const o = a * b
				title.style.opacity = o
				notes[i].style.opacity = o
				if (quarter > rect.top) brightest = title
			})
			if (brightest) {
				titles.forEach((title, i) => {
					const rect = title.getBoundingClientRect()
					const c = title == brightest
					title.classList[c ? 'add' : 'remove']('current')
					notes[i].style.display = c ? 'block' : 'none'
					if (c) {
						const p = helpers.map(
							quarter,
							rect.top,
							rect.bottom,
							0,
							1,
							true
						)
						const len = title.getAttribute('data-length')
						const progress = Math.round(p * len)
						slides.forEach(slide => {
							const di = slide.getAttribute('data-i')
							const dn = slide.getAttribute('data-n')
							const a = di == i && dn == progress
							slide.classList[a ? 'add' : 'remove'](
								'show'
							)
						})
					}
				})
			}
		})
	},
})
