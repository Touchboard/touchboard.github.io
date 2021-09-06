Main.add_module({
	type: 'preorder',

	style: `
		.preorder {
			scroll-snap-align: center;
			text-align: center;
			align-items: center;
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
