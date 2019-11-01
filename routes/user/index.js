const express = require('express')
const Mock = require('mockjs')
const TokenUtil = require('../../utils/token')
const apiRoutes = express.Router()

apiRoutes.post('/login', function (req, res) {
	const { body } = req
	if(body.username && body.password) {
		const token = TokenUtil.createToken(body)
		res.cookie('auth', token)
		res.json({
			status: 200,
			msg: '返回成功',
			data: {
				Auth: token
			}
		})
	}else {
		res.json({
			status: 401,
			msg: '参数错误',
			data: null
		})
	}
})

apiRoutes.post('/getUser', (req, res) => {
	res.json({
		status: 200,
		msg: '返回成功',
		data: Mock.mock({
			avatar:  Mock.Random.image('100x100', '#6bb055','@cname'),
			nickname: '@cname'
		})
	})
})

module.exports = apiRoutes