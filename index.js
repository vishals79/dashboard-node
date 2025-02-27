// Import packages
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// App
const app = express()
// Morgan
app.use(morgan('tiny'))
// First route
app.get('/', cors(),(req, res) => {
    res.json({ message: 'Hello world' })
})
// Starting server
app.listen(process.env.PORT)
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))