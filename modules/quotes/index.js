Main.add_module({
	type: 'quotes',

	style: `
		.quotes {
			scroll-snap-align: start;
			display: grid;
			grid-gap : var(--space-00);
			grid-template-columns:
				repeat(auto-fit, minmax(300px, max-content));
			align-items: end;
			justify-content: center;
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
			text-align: left;
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
			.quotes .container {
				padding: var(--space-00);
			}
			.quotes .img {
				--size: 40px;
			}
		}
		@media screen and (min-width: 815px) {
			.quotes {
			}
			.quotes .container {
				padding : var(--space-10);
			}
			.quotes .img {
				--size: 80px;
			}
		}
		${Shared.more.style}
	`,

	html: ({list}) => {
		const url = url =>
			`url('./modules/quotes/graphic/${url}.jpeg')`
		const container = ({person, says, position}, i) => `
			<div class="container ${i > 1 ? 'more_hide' : ''}">
				<div class="says">"${says}"</div>
				<div
					class="img cover"
					style="background-image: ${url(person)};"
				>
				</div>
				<div class="info typo_01"><b>${person}</b><br/>${position}</div>
			</div>
		`
		return `
			<div class="quotes responsive">
				${list.map(container).join('')}
				${Shared.more.html}
			</div>
		`
	},
})
