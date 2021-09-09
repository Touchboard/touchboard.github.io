let Tracking = {
	key: 'google_statistics',

	get() {
		return window.localStorage.getItem(this.key) === 'true'
	},

	set(flag) {
		console.log(flag)
		window.localStorage.setItem(this.key, flag)
	},

	on_load() {
		if (!this.get()) return
		this.enable()
	},

	agree() {
		this.set(true)
		this.enable()
	},

	enable() {
		console.log('tracking is on')
		window.dataLayer = window.dataLayer || []
		function gtag() {
			dataLayer.push(arguments)
		}
		gtag('js', new Date())
		gtag('config', 'G-KQSZ2LR5T7')
	},
}

Tracking.on_load()
