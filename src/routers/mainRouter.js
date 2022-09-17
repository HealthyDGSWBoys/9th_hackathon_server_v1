import express from 'express'
import { join, login, logout } from '../controllers/userControllers'

const mainRouter = express.Router()

mainRouter.post('/join', join)

mainRouter.post('/login', login)

mainRouter.post('/logout', logout)

export default mainRouter
