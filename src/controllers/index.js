const createPerson = require('./persons/create')
const deletePersonById = require('./persons/deleteById')
const getPersonById = require('./persons/getById')
const getAllPersons = require('./persons/getAll')
const updatePersonById = require('./persons/updateById')
const createAccountSchema = require('./validations/createAccountSchema')
const updateAccountSchema = require('./validations/updateAccountSchema')

module.exports = {
  createPerson,
  deletePersonById,
  getPersonById,
  getAllPersons,
  updatePersonById,
  createAccountSchema,
  updateAccountSchema
}
