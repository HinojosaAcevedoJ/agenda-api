const { Router } = require('express')
const {
  getAllPersons,
  deletePersonById,
  updatePersonById,
  createPerson,
  getPersonById
} = require('../controllers')
const schemaValidator = require('../middlewares/schemaValidator')
const withAuth = require('../middlewares/withAuth')
const { createPersonSchema, updatePersonSchema } = require('../validations/personSchema')

const routes = new Router()

routes.get('/', withAuth, getAllPersons)

routes.get('/:id', withAuth, getPersonById)

routes.post('/', withAuth, schemaValidator(createPersonSchema), createPerson)

routes.put('/:id', withAuth, schemaValidator(updatePersonSchema), updatePersonById)

// routes.get('/:firstName', withAuth, getPersonByName)

routes.delete('/:id', withAuth, deletePersonById)

module.exports = routes
