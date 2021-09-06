Main.add_module({
	type: 'title',

	style: `
		.title {
			width: 100%;
			text-align: center;
		}

		.title div {
			display: inline-block;
		}

		.title .typo_30 {
			// border-top: 1px var(--surface-line) solid;
			// padding-top: var(--space-20);
			max-width: 15ch;
		}

		.title .typo_00 {
			max-width: 30ch;
		}
	`,

	html: ({title, sub}) => `
		<div class="title responsive">
			<div class="typo_30">${title}</div><br/><br/>
			<div class="typo_00">${sub}</div>
		</div>
	`,
})