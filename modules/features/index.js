Main.add_module({
	type: 'features',

	style: `
		.features {
			scroll-snap-align: center;
			display: grid;
			grid-auto-flow: dense;
			grid-gap: var(--space-00);
			justify-content: center;
		}

		.features .feature {
			--size: 200px;
			width: 100%;
			height: 100%;
			border-radius: var(--space-00);
			background-color: var(--surface-area);
		}

		@media screen and (max-width: 815px) {
			.features {
				grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
				grid-auto-rows : 120px;
			}
			.features .feature.big {
				grid-area: span 2 / span 2;
			}
		}
		@media screen and (min-width: 815px) {
			.features {
				grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
				grid-auto-rows : 200px;
			}
			.features .feature.big {
				grid-area: span 2 / span 2;
			}
		}
	`,

	html: ({list}) => {
		const path = url =>
			`url('./modules/features/graphic/${url}.png')`
		const feature = ([url, big]) => `
			<div
				class="feature cover ${big ? 'big' : ''}"
				style="background-image: ${path(url)};"
			>
			</div>
		`
		return `
			<div class="features responsive">
				${list.map(feature).join('')}
			</div>
		`
	},
})
