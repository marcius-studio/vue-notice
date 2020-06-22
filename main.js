import Noty from 'noty'

const defaults = {
	layout: 'topRight',
	theme: 'mint',
	timeout: 5000,
	progressBar: true,
	closeWith: ['click'],
}

const options = {
	options: {},

	setOptions(opts) {
		this.options = Object.assign({}, defaults, opts)
		return this
	},

	create(params) {
		return new Noty(params)
	},

	show(text, type = 'alert', opts = {}) {
		const params = Object.assign({}, this.options, opts, {
			type,
			text
		})

		const noty = this.create(params)
		return noty.show()
	},

	success(text, opts = {}) {
		return this.show(text, 'success', opts)
	},

	error(text, opts = {}) {
		return this.show(text, 'error', opts)
	},

	warning(text, opts = {}) {
		return this.show(text, 'warning', opts)
	},

	info(text, opts = {}) {
		return this.show(text, 'info', opts)
	}
}

export default {
	install: function (Vue, opts) {
		const updatedOptions = options.setOptions(opts)
		Vue.prototype.$notice = updatedOptions
	}
}