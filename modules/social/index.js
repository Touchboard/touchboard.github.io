Main.add_module({
	type: 'social',

	style: `
		.social {
			text-align: center;
		}

		.social .buttons,
		.social form {
			vertical-align: top;
			display: inline-block;
		}

		.social .img {
			--size: 34px;
			width: var(--size);
			height: var(--size);
			display: inline-block;
			background-repeat: no-repeat;
			background-position: center;
			cursor: pointer;
		}

		@media screen and (max-width: 1126px) {
			.social .buttons,
			.social form * {
				margin: var(--space-02);
			}
		}
		@media screen and (min-width: 1126px) {
			.social .buttons,
			.social form * {
				margin: var(--space-01);
			}
		}
	`,

	html: ({list, message}) => {
		const img = url =>
			`url('./modules/social/graphic/${url}.png')`
		const container = ({icon, url}) => `
			<div
				class="img dark"
				style="background-image: ${img(icon)};"
				${Main.router(url)}
			>
			</div>
		`
		return `
			<div class="social responsive">
				<div
					class="typo_00"
					style="
						display: inline-block;
						max-width: 40ch;
					"
				>
					${message}
				</div>
				<br/>
				<br/>
				<div class="buttons">
					${list.map(container).join('')}
				</div>
				<form
					action="https://formsubmit.co/subscriber@touchboard.tech"
					method="POST"
				>
					<input
						type="hidden"
						name="_url"
						value="http://touchboard.tech"
					/>
					<input
						placeholder="E-Mail..."
						type="email"
						name="email"
						required
					/>
					<button type="submit">Subscribe</button>
				</form>
			</div>
		`
	},
})
