const createPerson = require('./persons/create')
const deletePersonById = require('./persons/deleteById')
const getPersonById = require('./persons/getById')
const getAllPersons = require('./persons/getAll')
const updatePersonById = require('./persons/updateById')
const login = require('./auth/login')
const signup = require('./auth/signup')
const changePassword = require('./users/changePassword')
const myInfo = require('./users/myInfo')
const getPersonByName = require('./persons/getByName')

module.exports = {
  createPerson,
  deletePersonById,
  getPersonById,
  getAllPersons,
  updatePersonById,
  login,
  signup,
  changePassword,
  myInfo,
  getPersonByName
}
