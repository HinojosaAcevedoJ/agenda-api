const Joi = require('joi')

const personSchema = {
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required(),
}

const userSchema = Joi.object(personSchema)

module.exports = userSchema
