Main.add_module({
	type: 'questions',

	style: `
		.questions {
			display: inline-block;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			grid-gap : var(--space-00);
		}

		.questions .container {
			position: relative;
			cursor: pointer;
		}

		.questions .container.show {
			z-index: 1;
		}

		.questions .container .popup {
			position: relative;
			display: grid;
			height: 100%;
			box-sizing: border-box;
			background-color: var(--surface-area);
			border-radius: var(--space-00);
			grid-gap : var(--space-00);
			align-items: center;
		}

		@keyframes questions_pop_close {
			0% {transform: scaleY(0.8);}
			25% {transform: scaleY(1.01);}
			60% {transform: scaleY(0.995);}
			100% {transform: scaleY(1);}
		}

		@keyframes questions_pop_open {
			0% {transform: scaleY(1.2);}
			25% {transform: scaleY(0.98);}
			60% {transform: scaleY(1.005);}
			100% {transform: scaleY(1);}
		}

		.questions .container.show .popup {
			box-shadow: 0 20px 60px 0 rgba(0,0,0, 0.4);
			height: auto;
			// top: 50%;
			// transform: translateY(-50%);
		}

		.questions .container.show .a {
			display: inline-block;
		}

		.questions .container .q {
			position: relative;
			font-weight: bold;
			padding-right: var(--space-20);
		}

		.questions .container .q:after {
			content: '';
			position: absolute;
			width: 16px;
			height: 16px;
			transform: translate(-50%, -50%);
			background: url('./modules/questions/cross.png') center;
			right: 0px;
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
				grid-template-columns: 1fr;
			}
			.questions .container {
				transform: rotate(0deg);
				animation: none;
			}
			.questions .container .popup {
				padding: var(--space-00);
			}
		}
		@media screen and (min-width: 815px) {
			.questions .container {
				height: 200px;
			}
			.questions .container .popup {
				padding: var(--space-10);
			}
		}
	`,

	html({list}) {
		const router = `Main.modules.questions.on_click`
		const angles = [-3, 4, 2, -4, -3]
		const container = ([q, a], i) => `
			<div
				class="container"
				onclick="${router}(event);"
			>
				<div class="popup">
					<div class="q">${q}</div>
					<div class="a">${a}</div>
				</div>
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
			if (a || el.classList.contains('show')) {
				const dir = el.classList.contains('show')
					? 'open'
					: 'close'
				el.style.animation = 'none'
				el.offsetHeight
				el.style.animation = `1s questions_pop_${dir} alternate`
			}
			el.classList[a ? 'toggle' : 'remove']('show')
		})
	},
})

// return `<div
// 	class="logo dark"
// 	${Main.router(onclick)}
// >
// </div>`
