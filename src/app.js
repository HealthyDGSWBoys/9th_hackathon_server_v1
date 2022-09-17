import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import mainRouter from './routers/mainRouter'
import cros from 'cors'

const http = require('http')
const server = http.createServer(app)

const app = express()
const { Server } = require('socket.io')
const io = require('socket.io')(server, {
  path: '/socket.io',
  transports: ['websocket'],
})
let user = []

app.use(cros())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    cookie: {},
  })
)

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('a', function (data) {
    user.push(data.username)

    // socket.username = data.username

    //socket.broadcast.emit('out', 'test')
    socket.emit('out', { test: 'test' })
  })

  socket.on('vector', function (data) {
    // socket.broadcast.emit('vector', data)
  })

  socket.on('disconnect', () => {
    //console.log(socket.username)
    console.log('a')

    socket.broadcast.emit('out', {
      outUser: user,
      status: user.length,
    })
  })
})

server.listen(8400, () => {
  console.log('port : 8001')
})

app.use('/api', mainRouter)

export default app
