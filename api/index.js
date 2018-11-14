const { send } = require('micro')
const { router, get } = require('microrouter')
const cors = require('micro-cors')()
const Artists = require('./artists')

const hello = (req, res) => send(res, 200, `Hello ${req.params.who}`)

const notfound = (req, res) => send(res, 404, 'Not found route')

module.exports = cors(
    router(
        ...Artists,
        get('/hello/:who', hello), 
        get('/*', notfound)
    )
)