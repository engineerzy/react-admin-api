const express = require('express')
const Mock = require('mockjs')
const apiRoutes = express.Router()

const menus = [
	{
		title: 'Dashborad',
		key: '0-0',
		path: '/dashborad',
		parent: null,
		children: [
			{
				title: '分析页',
				key: '0-1',
				path: '/dashborad/analysis',
				parent: '0-0'
			},
			{
				title: '监控页',
				key: '0-2',
				path: '/dashborad/monitor',
				parent: '0-0'
			},
			{
				title: '工作台',
				key: '0-3',
				path: '/dashborad/workplace',
				parent: '0-0'
			},
		]
	},
	{
		title: '表单页',
		key: '1-0',
		path: '/form',
		parent: null,
		children: [
			{
				title: '基础表单',
				key: '1-1',
				path: '/form/basic-form',
				parent: '1-0'
			},
			{
				title: '分步表单',
				key: '1-2',
				path: '/form/step-form',
				parent: '1-0'
			},
			{
				title: '高级表单',
				key: '1-3',
				path: '/form/advanced-form',
				parent: '1-0'
			}
		]
	}
]

apiRoutes.get('/submenu', function (req, res) {
	res.json({
		status: 200,
		msg: null,
		data: {
			menus
		}
	})
})

module.exports = apiRoutes