const { Router } = require('express')
const { changePassword, myInfo } = require('../controllers')
const schemaValidator = require('../middlewares/schemaValidator')
const userSchema = require('../validations/userSchema')
const withAuth = require('../middlewares/withAuth')

const routes = new Router()

routes.post('/changepassword', schemaValidator(userSchema), changePassword)

routes.post('/getuserinfo', withAuth, myInfo)

module.exports = routes
