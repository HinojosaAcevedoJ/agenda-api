const { Router } = require('express')
const { login, signup } = require('../controllers')
const schemaValidator = require('../middlewares/schemaValidator')
const userSchema = require('../validations/userSchema')

const routes = new Router()

routes.post('/login', login)

routes.post('/signup', schemaValidator(userSchema), signup)

module.exports = routes
