require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const { CLIENT_ORIGIN } = require('./config')
const errorHandler = require('./error-handler')

const app = express()

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common'

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.get('/api/*', (req, res) => {
  res.send('Hello, world!')
})

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
)

app.use(errorHandler)

module.exports = app
