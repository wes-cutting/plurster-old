const monk = require('monk')
const db = monk('mongodb://developer:password1@ds031271.mlab.com:31271/plurster')

module.exports = db