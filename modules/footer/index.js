Main.add_module({
	type: 'footer',

	style: `
		.footer {
			scroll-snap-align: center;
		}

		.footer .sections {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, min-content));
			grid-gap : var(--space-00);
		}

		.footer .border {
			position: relative;
			border-top: 1px var(--surface-line) solid;
		}

		.footer .section {
		}

		.footer .section b {
			display: inline-block;
			margin-bottom: var(--space-01);
		}

		.footer a {
			color : var(--front);
		}

		@media screen and (max-width: 815px) {
			.footer .border {
				top: calc(-1 * var(--space-10));
			}
		}
		@media screen and (min-width: 815px) {
			.footer .border {
				top: calc(-1 * var(--space-20));
			}
			.footer .sections {
				justify-content: center;
			}
		}
	`,

	html({list}) {
		let sections = ''
		const make_link = ([word, url]) =>
			`<a class="typo_01" ${Main.router(url)}>${word}</a><br/>`
		for (let section in list) {
			sections += `
				<div class="section">
					<b>${section}</b><br/>
					${list[section].map(make_link).join('')}
				</div>
			`
		}
		return `
			<div class="footer responsive">
				<div class="border"></div>
				<div class="sections">
					${sections}
				</div>
			</div>
		`
	},
})
