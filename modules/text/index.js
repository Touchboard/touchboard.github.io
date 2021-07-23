Main.add_module({
	type: 'text',

	style: `
		.text {
			text-align: center;
		}
		.text p {
			display: inline-block;
		}
		.text.small p {
			text-align: left;
			max-width: 250px;
		}
		@media screen and (max-width: 1126px) {
			.text p {
				max-width: 50ch;
			}
		}
		@media screen and (min-width: 1126px) {
			.text p {
				max-width: 50ch;
			}
		}
	`,

	html: ({body, type}) => {
		const style = type == 'wide'
		return `
			<div
				class="text responsive ${style ? 'sentence typo_10' : 'small'} "
			>
				<p>${body}</p>
			</div>
		`
	},
})
