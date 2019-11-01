const express = require('express')
const Mock = require('mockjs')
const apiRoutes = express.Router()

apiRoutes.post('/monitor/getMonitorTableData' ,function (req, res) {
	res.json(Mock.mock({
		status: 200,
		msg: null,
		'data|9-10': [{
			'name': '@cname',
			'age|18-35': 20,
			'sex': '@boolean',
			'isSingle': '@boolean',
			'singleWay': '@cword(2, 16)',
			'marryPlan': '@cword(2, 16)',
			'mark': '@cword(2, 16)'
		}]
	}))
})

module.exports = apiRoutes