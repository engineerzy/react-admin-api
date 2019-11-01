const express = require('express')
const cors = require('cors')
const path = require('path')
const Routes = require('./routes')
const bodyParser=require("body-parser");
const checkToken = require('./utils/checkToken')
const sock = require('./model/sock')
const cookieParser = require('cookie-parser')
const cookie = require('cookie')
const app = express()

app.use(cors({
	credentials: true,
	methods:['GET','POST', 'OPTIONS', 'PUT', 'DELETE'],
	origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
	allowedHeaders:['Content-Type','Auth', 'Cookie'] 
}))

app.use(cookieParser())

// app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

let NODE_PORT = process.env.PORT || 4000

app.use(express.static(path.join(__dirname, './')))

app.use(checkToken)
app.use(bodyParser.json())


Routes.forEach(route => {
	app.use('/api', route)
})

app.use(function (err, req, res, next) {
	console.log('err => ', err)
	res.status(500).send('something broke')
})

const server = app.listen(NODE_PORT, function () {
	console.log('mock服务在' + NODE_PORT + '端口上已启用了！');
});

const io = require('socket.io')(server, {
	PORT: 3000
})
io.use((socket, next) => {
	if(socket.request.headers.cookie) {
		socket.request.cookies = cookie.parse(socket.request.headers.cookie)
	}
	next()
})
sock(io)

