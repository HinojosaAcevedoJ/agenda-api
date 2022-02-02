require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const personRoutes = require('./routes/persons')

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/persons', personRoutes)

app.listen(3000, () => {
  console.log('El servidor está inicializado en el puerto 3000')
})
