const options = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
}

function schemaValidator(schema) {
  return async (req, res, next) => {
    try {
      const value = await schema.validateAsync(req.body, options)
      res.locals.value = value
    } catch (error) {
      res.status(400).send({ message: `Validation error: ${error.details.map(x => x.message).join(', ')}` })
      return
    }
    await next()
  }
}

module.exports = schemaValidator
