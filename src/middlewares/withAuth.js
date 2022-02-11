const jwt = require('jsonwebtoken')

async function withAuth(req, res, next) {
  const token = req.headers.authorization
  console.log(token)
  try {
    const decoded = jwt.verify(token, 'secret')
    res.locals.decodedToken = decoded
    await next()
  } catch (err) {
    res.status(401).send({ message: err.message })
  }
}

module.exports = withAuth
