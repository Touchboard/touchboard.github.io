Main.add_module({
	type: 'timeline',

	style: `
		.timeline {
			text-align: center;
			display: grid;
			grid-auto-columns: min-content;
			justify-content: center;
		}
		.timeline .container {
			position: relative;
			text-align: center;
			padding: var(--space-01) var(--space-00);
			align-self: end;
		}

		.timeline .container img {
			height: 20px;
			object-fit: contain;
		}
		.timeline .container .note {
			display: inline-block;
			font-weight: bold;
		}
		.timeline .container .arrow {
			position: absolute;
			right: 0;
			bottom: 10px;
			transform: translate(50%, -50%);
			width: 10px;
			height: 30px;
			background-image: url('./modules/timeline/arrow.png');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			opacity: .1;
		}
		.timeline .container:last-child .arrow {
			display: none;
		}
		@media screen and (max-width: 1126px) {
			.timeline {
				grid-template-columns: repeat(auto-fit, minmax(110px, max-content));
			}
			.timeline .container {
				width: 90px;
			}
			.timeline .container img {
				height: 20px;
			}
			.timeline .typo_01 {
				margin-top: var(--space-01);
			}
		}
		@media screen and (min-width: 1126px) {
			.timeline {
				grid-template-columns: repeat(auto-fit, minmax(190px, max-content));
			}
			.timeline .container {
				width: 170px;
			}
			.timeline .container img {
				height: 40px;
			}
			.timeline .typo_01 {
				margin-top: var(--space-00);
			}
		}
	`,

	html({list}) {
		const url = url => `./modules/timeline/graphic/${url}.png`
		const container = ({date, img, note, onclick}) => `
			<div
				class="container"
				${Main.router(onclick)}
			>
				${
					img
						? `<img src="${url(img)}" class="dark">`
						: `<span class="note typo_00">${note}</span>`
				}
				<br/>
				<div class="typo_01">${date.split(' ').join('<br/>')}</div>
				<div class="arrow dark">&nbsp;</div>
			</div>
		`
		return `<div class="timeline responsive">
			${list.map(container).join('')}
		</div>`
	},
})
