Main.add_module({
	type: 'preorder',

	style: `
		.preorder {
			scroll-snap-align: start;
			text-align: center;
			align-items: center;

			// display: grid;
			// grid-template-rows: 1fr 1fr;
			// justify-items: center;
		}

		.preorder button {
		}

		.preorder .typo_30 {
			max-width: 16ch;
		}
	`,

	html: ({message, url}) => {
		return `
			<div class="preorder responsive">
				<button class="big" ${Main.router(url)}>${message}</button>
			</div>
		`
	},
})
