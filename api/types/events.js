const { send } = require('micro')
const { get, post, put, del } = require('microrouter')
const db = require('../dbconfig')

const events = db.get('Event')

// [GET] /events 200[] Get all of the Event
const getEvents = async (req, res) => {
    const result = await events.find({}).then(results => (results))
    send(res, 200, result)
}

// [GET] /events/id/:id 200{} Get a single Event by ID
const getEventsByID = (req, res) => {
    send(res, 200, `Get me the Events with ID - ${req.params.id}`)
}

module.exports = [
    get('/events', getEvents),
    get('/events/id/:id', getEventsByID)
]
