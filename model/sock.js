const TokenUtil = require('../utils/token')
const Mock = require('mockjs')
let count = 0
let timer = null
function sendMsg (count, io, username, socket) {
	if(count >= 20 || socket.disconnected) {
		timer && clearTimeout(timer)
	}else {
		timer = setTimeout(() => {
			count++
			io.emit('chat message', Mock.mock({'msg': '@cword(2, 16)', 'user': '@cname(2)'}))
			sendMsg(count, io, username, socket)
		},  Math.ceil(Math.random()*3) * 1000);
	}
	
}
module.exports = function (io) {
	io.on('connection', function (socket) {
		let token;
		if(!socket.request.cookies) {
			io.emit('chat loading', { msg: '正在为您连接聊天室'})
		}else {
			token = TokenUtil.validToken(socket.request.cookies.auth)
			io.emit('chat connect', { msg: '已成功连接聊天室', user: token.data.username })
			sendMsg(count, io, token.data.username, socket)
		}
		socket.on('disconnect', function () {
			console.log('用户已断开socket连接')
			io.emit('chat disconnect', { msg: '断开连接' })
		})
		socket.on('chat message', function (msg) {	
			io.emit('chat message', { msg, user: token.data.username })
		})

		socket.on('server message', function (msg) {
			console.log(`send server message ==> ${msg}`)
		})
	})
}