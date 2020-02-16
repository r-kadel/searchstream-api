require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const { CLIENT_ORIGIN } = require('./config')
const errorHandler = require('./error-handler')
const usersRouter = require('./users/users-router')
const searchRouter = require('./search/search-router')
const authRouter = require('./auth/auth-router')

const app = express()

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common'

app.use(morgan(morganOption))
app.use(helmet())
app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
)

app.get('/api', (req, res) => {
  res.send('Hello, world!')
})

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/search', searchRouter)


app.use(errorHandler)

module.exports = app
