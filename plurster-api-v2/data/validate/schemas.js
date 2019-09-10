const check = require('check-types')
// https://gitlab.com/philbooth/check-types.js

const artistSchema = {
    birthName: check.maybe.string,
    stageName: check.string,
    dob: check.maybe.string,
    country: check.maybe.string,
    image: check.string,
    desc: check.string,
    website: check.maybe.string,
    genres: check.maybe.array.of.string,
    crafts: check.maybe.array.of.string,
    groups: check.maybe.array.of.string,
    events: check.maybe.array.of.string,
    likes: check.maybe.array.of.string,
};

const craftSchema = {
    name: check.string,
    desc: check.string,
    artists: check.maybe.array.of.string,
}

const eventSchema = {
    displayName: check.string,
    fullName: check.string,
    image: check.string,
    desc: check.string,
    start: check.date,
    end: check.date,
    artists: check.maybe.array.of.string,
    groups: check.maybe.array.of.string,
    venues: check.maybe.array.of.string,
    organizers: check.maybe.array.of.string,
}

const genreSchema = {
    name: check.string,
    desc: check.string,
    artists: check.maybe.array.of.string,
    groups: check.maybe.array.of.string,
    likes: check.maybe.array.of.string,
}

const groupSchema = {
    name: check.string,
    desc: check.string,
    formed: check.maybe.date,
    image: check.string,
    website: check.maybe.string,
    members: check.maybe.array.of.string,
    genres: check.maybe.array.of.string,
    events: check.maybe.array.of.string,
    venues: check.maybe.array.of.string
}

const organizerSchema = {
    name: check.string,
    desc: check.string,
    logo: check.maybe.string,
    website: check.maybe.string,
    venues: check.array.of.string,
    events: check.array.of.string,
}

const profileSchema = {
    displayName: check.string,
    userId: check.string,
    bio: check.string,
    favoriteGenres: check.maybe.array.of.string,
    favoriteArtists: check.maybe.array.of.string,
    sightings: check.maybe.array.of.string,
}

const sightingSchema = {
    userId: check.string,
    date: check.date,
    notes: check.string,
    seers: check.maybe.array.of.string,
    artist: check.maybe.array.of.string,
    group: check.maybe.array.of.string,
    event: check.maybe.array.of.string,
    venue: check.maybe.array.of.string,
}

const venueSchema = {
    name: check.string,
    address: check.string,
    city: check.string,
    state: check.string,
    zip: check.number,
    country: check.string,
    desc: check.maybe.string,
    image: check.string,
    website: check.maybe.string,
    events: check.maybe.array.of.string,
    organizers: check.maybe.array.of.string,
};

module.exports = {
    artistSchema,
    craftSchema,
    eventSchema,
    genreSchema,
    groupSchema,
    organizerSchema,
    profileSchema,
    sightingSchema,
    venueSchema
}