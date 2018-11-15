const { send } = require('micro')
const { get, post, put, del } = require('microrouter')
const db = require('../dbconfig')

const artists = db.get('Artist')

// [GET] /artists 200[] Get all of the Artists
const getArtists = async (req, res) => {
    const result = await artists.find({}).then( results => ( results ) )
    send(res, 200, result)
}

// [GET] /artists/id/:id 200{} Get a single Artist by ID
const getArtistByID = async (req, res) => {
    const result = await artists.find({ "_id" : req.params.id }).then(results => (results))
    send(res, 200, result)
}

// [GET] /artists/name/:name 200[] Get Artists by Name
const getArtistByName = (req, res) => {
    send(res, 200, `Get me the Artist with Name - ${req.params.name}`)
}

// [POST] /artists 200{} Create an Artist { name: '', dob: '', genre: [], type: [], image: '' }
const createArtist = (req, res) => {
    send(res, 200, `Create the Artist with ${req.body}`)
}

// [PUT] /artists/id/:id 200{} Update an Artist { name: '', dob: '', genre: [], type: [], image: '' }
const updateArtist = (req, res) => {
    send(res, 200, `Update the Artist with ID ${req.params.id} using ${req.body}`)
}

// [DELETE] /artists/id/:id 200{} Delete an Artist
const deleteArtist = (req, res) => {
    send(res, 200, `Delete the Artist with ID - ${req.params.id}`)
}

module.exports = [
    get('/artists', getArtists),
    get('/artists/id/:id', getArtistByID),
    get('/artists/name/:name', getArtistByName),
    post('/artist', createArtist),
    put('/artists/id/:id', updateArtist),
    del('/artists/id/:id', deleteArtist) 
]
