require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const personRoutes = require('./routes/persons')
const userRoutes = require('./routes/auth')
const userOptionRoutes = require('./routes/users')

const app = express()
const PORT = process.env.PORT || 4000

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/persons', personRoutes)
app.use('/auth', userRoutes)
app.use('/users', userOptionRoutes)

app.listen(PORT, () => {
  console.log('El servidor está inicializado en el puerto 4000')
})
