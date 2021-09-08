Main.add_module({
	type: 'team',

	style: `
		.full_team:after {
			background-image: url('./modules/team/graphic.jpg');
		}

		.team.photo {
			scroll-snap-align: center;
			position: relative;
		}

		.team.photo .sentence {
			text-align: center;
			position: absolute;
			bottom: 10%;
			left: 0;
			right: 0;
		}

		.team.photo .sentence p {
			display: inline-block;
			color: white;
		}

		.team.bio {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
			grid-gap : var(--space-20);
			padding: var(--space-20);
			justify-content: center;
		}

		.team.bio .container {
			text-align: center;
			max-width: 340px;
		}

		@media screen and (max-width: 815px) {
			.team.photo {
				height: 100vh;
			}
			.team.photo .sentence {
				padding: 0 var(--space-10);
			}
			.team.photo .sentence p {
				max-width: 40ch;
			}
		}
		@media screen and (min-width: 815px) {
			.team.photo {
				height: 100vh;
			}
			.team.photo .sentence {
				padding: var(--space-30);
			}
			.team.photo .sentence p {
				max-width: 40ch;
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
			</div>
		`
		return `
			<div class="full full_team" id="target_teams"></div>
			<div
				class="team photo source_full"
				data-target="target_teams"
			>
					<div class="sentence typo_10"><p>${about}</p></div>
			</div>
			<div class="team bio responsive no">
				${list.map(container).join('')}
			</div>
		`
	},
})
