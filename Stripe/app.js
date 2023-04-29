const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/StripeDB'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const aRouter = require('./routes/index')
app.use('/index', aRouter)

app.listen(9000, () => {
    console.log('Server started')
})

