'use strict'

// Local dependencies
const healthcheck = require('./healthcheck')
const privacyAndCookies = require('./privacy-and-cookies')
const termsAndConditions = require('./terms-and-conditions')
const index = require('./index')

// Export
module.exports.bind = app => {
  app.use(healthcheck.router)
  app.use(privacyAndCookies.router)
  app.use(termsAndConditions.router)
  app.use(index.router)
}
