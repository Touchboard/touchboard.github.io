let Shared = {}

Shared.more = {
	styles: `
		.shared_more {
			justify-self: center;
		}
		@media screen and (max-width: 815px) {
			.more_hide {
				display: none !important;
			}
			.more_show .more_hide {
				display: inherit !important;
			}
			.more_show .shared_more {
				display: none;
			}
		}
		@media screen and (min-width: 815px) {
			.shared_more {
				display: none;
			}
		}
	`,
	html: `
		<button
			class="shared_more"
			onclick="this.parentNode.classList.toggle('more_show')"
		>
			more
		</button>
	`,
}
