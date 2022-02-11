const Joi = require('joi')

const personSchema = {
  firstName: Joi.string()
    .min(3),
  lastName: Joi.string()
    .min(3),
  email: Joi.string()
    .email(),
  phone: Joi.string()
    .min(6),
  age: Joi.number()
    .integer()
    .min(10)
    .max(100),
  src: Joi.string()
}

const updatePersonSchema = Joi.object(personSchema)
const createPersonSchema = Joi.object({
  ...personSchema,
  firstName: personSchema.firstName.required(),
  lastName: personSchema.lastName.required(),
  email: personSchema.email.required(),
  phone: personSchema.phone.required(),
  age: personSchema.age.required()
})

module.exports = { updatePersonSchema, createPersonSchema }
