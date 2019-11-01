const jwt = require('jsonwebtoken')

class Token {
	static createToken (data) {
		let created = Math.floor(Date.now() / 1000);
		let token = jwt.sign({
			data,
			exp: created + 3600 * 24
		}, 'zhouyang');
		return token
	}
	static validToken (auth) {
		let token = jwt.verify(
			auth,
			'zhouyang'
		)
		return token
	}
}

module.exports = Token