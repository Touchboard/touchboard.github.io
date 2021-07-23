Main.add_module({
	type: 'footer',

	style: `
		.footer {
			text-align: center;
		}
	`,

	html: ({list}) => {
		const container = ({body, onclick}) =>
			onclick
				? `<a ${Main.router(onclick)}>${body}</a>`
				: `<span>${body}</span>`
		return `
			<div class="footer responsive typo_01">
				${list.map(container).join(' | ')}
			</div>
		`
	},
})
