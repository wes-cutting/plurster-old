const { send, json } = require('micro')
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
const getArtistByName = async (req, res) => {
    let result = await artists.find({}).then(results => (results))
    // console.log("PreFilter: ", result)
    result = result.filter(artist => artist.name.toLowerCase().includes(req.params.name.toLowerCase()))
    // console.log("PostFilter: ", result)
    send(res, 200, result)
}

// [POST] /artists 200{} Create an Artist { 'name': '', dob: '', 'genre': [], 'type': [], 'image': '' }
const createArtist = async (req, res) => {
    const body = await json(req)
    const result = await artists.insert( body ).then(results => (results))
    send(res, 200, result)
}

// [PUT] /artists/id/:id 200{} Update an Artist { name: '', dob: '', genre: [], type: [], image: '' }
const updateArtist = async (req, res) => {
    const result = await artists.find({}).then(results => (results))
    send(res, 200, `Update the Artist with ID ${req.params.id} using ${req.body}`)
}

// [DELETE] /artists/id/:id 200{} Delete an Artist
const deleteArtist = async (req, res) => {
    const result = await artists.find({}).then(results => (results))
    send(res, 200, `Delete the Artist with ID - ${req.params.id}`)
}

module.exports = [
    get('/artists', getArtists),
    get('/artists/id/:id', getArtistByID),
    get('/artists/name/:name', getArtistByName),
    post('/artists', createArtist),
    put('/artists/id/:id', updateArtist),
    del('/artists/id/:id', deleteArtist) 
]
