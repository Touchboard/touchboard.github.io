Main.add_module({
	type: 'team',

	style: `
		.team .photo {
			position: relative;
		}

		.team .photo img {
			width: 100%;
			height: 80vh;
			object-fit: cover;
			// object-position: top;
		}

		.team .sentence {
			text-align: center;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
		}

		.team .sentence p {
			display: inline-block;
			color: white;
		}

		.team .bio {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
			grid-gap : var(--space-20);
			padding: var(--space-20);
			justify-content: center;
		}

		.team .container {
			text-align: center;
			max-width: 340px;
		}

		@media screen and (max-width: 1126px) {
			.team .photo img {
				height: 140vw;
			}
			.team .sentence {
				padding: var(--space-00);
			}
			.team .sentence p {
				max-width: 50ch;
			}
		}
		@media screen and (min-width: 1126px) {
			.team .photo img {
				height: 100vh;
			}
			.team .sentence {
				padding: var(--space-30);
			}
			.team .sentence p {
				max-width: 40ch;
			}
		}
		@media screen and (min-width: 1681px) {
			.team .photo img {
				// border-radius: var(--space-00);
			}
		}
	`,

	html: ({about, list}) => {
		const url = url => ``
		const container = ({name, position, about, quote}) => `
			<div class="container">
				<div class="typo_20">${name}</div>
				<div class="typo_01">${position}</div>
				<br/>
				<div>${about}</div>
				<br/>
				<i class="typo_01">"${quote}"</i>
			</div>
		`
		return `
			<div class="team responsive no">
				<div class="photo">
					<img src="./modules/team/graphic.jpg"/>
					<div class="sentence typo_10"><p>${about}</p></div>
				</div>
				<div class="bio">
					${list.map(container).join('')}
				</div>
			</div>
		`
	},
})
