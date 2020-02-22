const AuthService = require('./auth-service')

function requireAuth(req, res, next) {
  const authToken = req.get('Authorization') || ''

  // make sure there is a jwt bearer sent with request
  let bearerToken
  if (!authToken.toLowerCase().startsWith('bearer ')) {
    return res.status(401).json({ error: 'Missing bearer token' })
  } else {
    bearerToken = authToken.slice(7, authToken.length)
  }

  // verifies the JWT is valid
  try {
    const payload = AuthService.verifyJwt(bearerToken)

    AuthService.getUserWithUserName(req.app.get('db'), payload.sub)
      .then(user => {
        if (!user)
          return res.status(401).json({ error: 'Unauthorized request' })

        req.user = user
        next()
      })
      .catch(err => {
        console.error(err)
        next(err)
      })
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized request' })
  }
}

module.exports = {
  requireAuth
}
