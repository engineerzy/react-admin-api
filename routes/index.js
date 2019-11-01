const User = require('./user')
const SubMenu = require('./layout')
const ErrorRoute = require('./errorRoute')
const Chart = require('./chart')
const Monitor = require('./monitor')

const routes = [
	User,
	SubMenu,
	ErrorRoute,
	Chart,
	Monitor
]

module.exports = routes