Main.add_module({
	type: 'timeline',

	style: `
		.timeline {
			scroll-snap-align: center;
			display: grid;
			grid-gap : var(--space-00);
			justify-content: center;
			grid-auto-flow: dense;
		}
		.timeline .container {
			display: grid;
			grid-template-rows: auto min-content;
			text-align: center;
			background-color: var(--surface-area-o);
			border-radius: var(--space-00);
			justify-items: center;
			align-items: center;
		}
		.timeline .container.marked {
			background: linear-gradient(to right bottom, #BA4AFF, #FF6B57);
			color: white;
		}

		.timeline .container img {
			height: 70px;
			width: 90%;
			object-fit: contain;
		}
		.timeline .container.big img {
			height: 300px;
		}

		@media screen and (max-width: 815px) {
			.timeline {
				grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
			}
			.timeline .container {
				padding: var(--space-01);
				grid-gap: var(--space-00);
			}
			.timeline .container.big {
				grid-area: span 2 / span 2;
			}
		}
		@media screen and (min-width: 815px) {
			.timeline {
				grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
				grid-auto-rows: 250px;
			}
			.timeline .container {
				padding: var(--space-10);
				grid-gap: var(--space-10);
			}
			.timeline .container.big {
				grid-area: span 2 / span 2;
			}
		}
	`,

	html({list}) {
		const url = url => `./modules/timeline/graphic/${url}.png`
		const container = props => `
			<div
				class="
					container
					${props.big ? 'big' : ''}
					${props.marked ? 'marked' : ''}
				"
				${Main.router(props.onclick)}
			>
				${
					props.img
						? `<img src="${url(props.img)}" class="dark">`
						: `
							<div class="typo_00" style="max-width: 25ch;">
								${props.note}
							</div>
						`
				}
				<div style="max-width: 40ch;">
					${
						props.description
							? `
								<div class="typo_01" style="margin-bottom: var(--space-01);">
									${props.description}
								</div>`
							: ''
					}
					<div class="typo_01"><b>${props.date}</b></div>
				</div>
			</div>
		`
		return `<div class="timeline responsive">
			${list.map(container).join('')}
		</div>`
	},
})

// style="background-color: hsl(${Math.random() * 360}, 50%, 80%);"
