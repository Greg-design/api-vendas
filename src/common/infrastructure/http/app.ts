import cors from 'cors'
import express from 'express'
import { routes } from './routes'
import { errorHandler } from './middlewares/errorHandler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorHandler) // middleware pra tratar errors

export { app }
