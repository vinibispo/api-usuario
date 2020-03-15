const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const database = require('./config/database')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use('/users', routes)

app.get('/', (req, res)=>{
    res.redirect('/users')
})
database.connect
database.once
database.error

module.exports = app