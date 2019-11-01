
const TokenUtil = require('./token')
const createError = require('./error')

module.exports = function (req, res, next) {
	let { url = '', headers = {} } = req
	if (url.indexOf('login') === -1) {
		if (!headers.auth) {
			res.status(403).send(createError('token error'))
		} else {
			try {
				const token = TokenUtil.validToken(headers.auth)
				if (token.data) {
					next()
				} else {
					res.status(406).send(createError('token error'))
					next()
				}
			} catch (error) {
				console.log(error)
				res.status(403).send(createError('token error'))
				next()
			}
		}
	} else {
		next()
	}
} 