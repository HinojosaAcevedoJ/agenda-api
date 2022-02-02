const { Router } = require('express')
const {
  getAllPersons,
  getPersonById,
  deletePersonById,
  updatePersonById,
  createPerson
} = require('../controllers')

const routes = new Router()

routes.get('/', getAllPersons)

routes.get('/:id', getPersonById)

routes.post('/', createPerson)

routes.put('/:id', updatePersonById)

routes.delete('/:id', deletePersonById)

module.exports = routes
