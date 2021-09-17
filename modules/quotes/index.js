Main.add_module({
	type: 'quotes',

	style: `
		.quotes {
			scroll-snap-align: center;
			max-width: 1680px;
			width: 100vw;
			overflow-y: hidden;
			box-sizing: border-box;
			margin: 0 auto;
		}

		.quotes .container {
			display: grid;
			grid-template-columns: auto 1fr;
			grid-gap: var(--space-00);
			grid-template-areas:
				'says says'
				'img info';
			background-color: var(--surface-area);
			border-radius : var(--space-00);
			padding : var(--space-10);
		}

		.quotes .img {
			width: var(--size);
			height : var(--size);
			grid-area: img;
			border-radius: 9999px;
		}

		.quotes .says {
			grid-area: says;
		}

		.quotes .info {
			grid-area: info;
			align-self: center;
		}

		@media screen and (max-width: 815px) {
			.quotes {
				padding: var(--space-00);
				padding-right: 0;
				white-space: nowrap;
				scroll-snap-type: x mandatory;
			}
			.quotes .container {
				scroll-snap-align: center;
				display: inline-grid;
				white-space: normal;
				padding: var(--space-00);
				width: 70vw;
				flex: 0 0 auto;
				margin-right: var(--space-00);
			}
			.quotes .img {
				--size: 40px;
			}
		}
		@media screen and (min-width: 815px) {
			.quotes {
				display: grid;
				grid-gap : var(--space-00);
				grid-template-columns:
					repeat(auto-fit, minmax(300px, max-content));
				align-items: flex-start;
				justify-content: center;
				padding: var(--space-20);
			}
			.quotes .container {
				padding : var(--space-10);
			}
			.quotes .img {
				--size: 80px;
			}
		}
	`,

	html: ({list}) => {
		const url = url =>
			`url('./modules/quotes/graphic/${url}.jpeg')`
		const container = ({person, says, position}) => `
			<div class="container">
				<div class="says">"${says}"</div>
				<div
					class="img cover"
					style="background-image: ${url(person)};"
				></div>
				<div class="info typo_01"><b>${person}</b><br/>${position}</div>
			</div>
		`
		return `
			<div class="quotes">
				${list.map(container).join('')}
			</div>
		`
	},
})
