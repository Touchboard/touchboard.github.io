Main.add_module({
	type: 'title',

	style: `
		.title {
			scroll-snap-align: start;
			width: 100%;
			text-align: center;
			padding-bottom: var(--space-00);
		}

		.title div {
			display: inline-block;
		}
		.title .typo_30 {
			max-width: 15ch;
		}
		.title .typo_00 {
			max-width: 40ch;
		}
		@media screen and (max-width: 815px) {

		}
		@media screen and (min-width: 815px) {

		}
	`,

	html: ({title, sub}) => `
		<div class="title responsive">
			<div class="typo_30">${title}</div>
			${
				sub
					? `
						<br/>
						<br/>
						<div class="typo_00">
							${sub}
						</div>
					`
					: ``
			}
		</div>
	`,
})
