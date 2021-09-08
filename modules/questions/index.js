Main.add_module({
	type: 'questions',

	style: `
		.questions {
			display: inline-block;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
			grid-gap : var(--space-20);
			align-items: center;
		}

		.questions .container {
			display: inline-block;
			background-color: var(--surface-area);
			padding: var(--space-00);
			padding-right: var(--space-10);
			border-radius: var(--space-00);
			cursor: pointer;
			transition: .2s;
			animation: 1s var(--d) questions_jiggle infinite alternate linear;
		}

		@keyframes questions_jiggle {
			0% {transform: translate(-1%, .5%) rotate(calc(var(--r) + 1deg));}
			50% {transform: translate(.5%, -1%) rotate(calc(var(--r) - 1deg));}
			100% {transform: translate(.5%, 1%) rotate(calc(var(--r) + .5deg));}
		}

		.questions .container.show {
			grid-area: span 2;
			transform: translate(0%, 0%) rotate(0deg);
			animation: none;
		}

		.questions .container.show .a {
			display: inline-block;
		}

		.questions .container .q {
			position: relative;
			font-weight: bold;
		}

		.questions .container .q:after {
			content: '';
			position: absolute;
			width: 16px;
			height: 16px;
			transform: translate(-50%, -50%);
			background: url('./modules/questions/cross.png') center;
			right: -30px;
			top: 50%;
			transition: .2s;
		}

		.questions .container.show .q:after {
			transform: translate(-50%, -50%) rotate(45deg);
		}

		.questions .container .a {
			display: none;
		}

		@media screen and (max-width: 815px) {
			.questions {
				grid-gap : var(--space-00);
			}
			.questions .container {
				transform: rotate(0deg);
				animation: none;
			}
		}
		@media screen and (min-width: 815px) {

		}
	`,

	html({list}) {
		const router = `Main.modules.questions.on_click`
		const angles = [-3, 4, 2, -4, -3]
		const container = ([q, a], i) => `
			<div
				class="container"
				onclick="${router}(event);"
				style="
					--r: ${angles[i % angles.length]}deg;
					--d: ${i / angles.length}s;
				"
			>
				<div class="q">${q}</div>
				<div class="a"></br>${a}</div>
			</div>
		`
		return `<div class="questions responsive">
			${list.map(container).join('')}
		</div>`
	},

	on_click(e) {
		const els = document.querySelectorAll('.questions .container')
		els.forEach(el => {
			const a = el == e.currentTarget
			el.classList[a ? 'toggle' : 'remove']('show')
		})
	},
})

// return `<div
// 	class="logo dark"
// 	${Main.router(onclick)}
// >
// </div>`
