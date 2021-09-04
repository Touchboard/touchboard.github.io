Main.add_module({
	type: 'preorder',

	style: `
		.preorder {
			scroll-snap-align: center;
			text-align: center;
			align-items: center;
		}
		.preorder .typo_10 {
			display: inline-block;
			max-width: 20ch;
		}
		@media screen and (max-width: 815px) {

		}
		@media screen and (min-width: 815px) {

		}
	`,

	html: ({message, url}) => {
		return `
			<div class="preorder responsive">
				<div class="typo_10">${message}</div><br/><br/>
				<button class="big" ${Main.router(url)}>Pre-Order</button>
			</div>
		`
	},
})
