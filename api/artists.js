const { send } = require('micro')
const { get, post, put, del } = require('microrouter')
const dbconfig = require('./dbconfig')

const artists = dbconfig.get('Artist')

// [GET] /artists 200[] Get all of the Artists
const getArtists = async (req, res) => {
    const result = await artists.find({}).then( results => ( results ) )
    send(res, 200, result)
}

// [GET] /artists/id/:id 200{} Get a single Artist by ID
const getArtistByID = (req, res) => {
    send(res, 200, `Get me the Artists with ID - ${req.params.id}`)
}

module.exports = [
    get('/artists', getArtists),
    get('/artists/id/:id', getArtistByID)
]
