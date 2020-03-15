const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const database = require('./config/database')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use('/users', routes)

database.connect
database.once
database.error

module.exports = app