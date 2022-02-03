const { Router } = require('express')
const {
  getAllPersons,
  getPersonById,
  deletePersonById,
  updatePersonById,
  createPerson,
  updateAccountSchema,
  createAccountSchema
} = require('../controllers')

const routes = new Router()

routes.get('/', getAllPersons)

routes.get('/:id', getPersonById)

routes.post('/', createAccountSchema, createPerson)

routes.put('/:id', updateAccountSchema, updatePersonById)

routes.delete('/:id', deletePersonById)

module.exports = routes
