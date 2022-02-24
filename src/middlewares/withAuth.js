const jwt = require('jsonwebtoken')

async function withAuth(req, res, next) {
  const token = req.headers.authorization
  const splittedToken = token?.split(' ')
  if (!token || splittedToken[0] !== 'Bearer') {
    res.status(401).send({ message: 'Invalid Token' })
    return
  }
  try {
    const decoded = jwt.verify(splittedToken[1], 'secret')
    res.locals.decodedToken = decoded
    await next()
  } catch (err) {
    res.status(401).send({ message: err.message })
  }
}

module.exports = withAuth
