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
  cros: {
    origin: '*',
  },
})

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

  io.emit('login', 'sex')
})

server.listen(8400, () => {
  console.log('port : 8001')
})

app.use('/api', mainRouter)

export default app
