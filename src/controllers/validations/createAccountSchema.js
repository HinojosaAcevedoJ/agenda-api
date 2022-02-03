const Joi = require('joi')
const validateRequest = require('./validateRequest')

function createAccountSchema(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string()
      .required(),
    lastName: Joi.string()
      .required(),
    email: Joi.string()
      .email()
      .required(),
    phone: Joi.string()
      .min(6)
      .required(),
    age: Joi.number()
      .integer()
      .min(10)
      .max(100)
      .required(),
    src: Joi.string()
      .required()
  })
  validateRequest(req, next, schema)
}

module.exports = createAccountSchema
