const express = require('express')
const apiRoutes = express.Router()

apiRoutes.get('/errorToken', (req, res) => {
	res.json({
		status: 4006,
		msg: 'token失效',
		data: null
	})
})

module.exports = apiRoutes