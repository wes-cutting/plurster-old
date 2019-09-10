const allSchemas = require('./schemas')
const allValidators = require('./validators')

module.exports = {
    ...allSchemas,
    ...allValidators
}