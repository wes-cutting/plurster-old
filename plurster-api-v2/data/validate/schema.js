const check = require('check-types')
// https://gitlab.com/philbooth/check-types.js

const artistSchema = {
    birthName: check.maybe.string,
    stageName: check.string,
    dob: check.maybe.date,
    image: check.string,
    desc: check.string,
    website: check.maybe.string,
    genres: check.array.of.maybe.string,
    crafts: check.array.of.maybe.string,
    groups: check.array.of.maybe.string,
    events: check.array.of.maybe.string,
    likes: check.array.of.maybe.string,
};

const craftSchema = {
    name: check.string,
    desc: check.string,
    artists: check.array.of.maybe.string,
}

const eventSchema = {
    displayName: check.string,
    fullName: check.string,
    image: check.string,
    desc: check.string,
    start: check.date,
    end: check.date,
    artists: check.array.of.maybe.string,
    groups: check.array.of.maybe.string,
    venues: check.array.of.maybe.string,
    organizers: check.array.of.maybe.string,
}

const genreSchema = {
    name: check.string,
    desc: check.string,
    artists: check.array.of.maybe.string,
    groups: check.array.of.maybe.string,
    likes: check.array.of.maybe.string,
}

const groupSchema = {
    name: check.string,
    desc: check.string,
    formed: check.maybe.date,
    image: check.string,
    website: check.maybe.string,
    members: check.array.of.string,
    genres: check.array.of.string,
    events: check.array.of.string,
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
    favoriteGenres: check.array.of.maybe.string,
    favoriteArtists: check.array.of.maybe.string,
    sightings: check.array.of.maybe.string,
}

const sightingSchema = {
    userId: check.string,
    date: check.date,
    notes: check.string,
    seers: check.array.of.maybe.string,
    artist: check.array.of.maybe.string,
    group: check.array.of.maybe.string,
    event: check.array.of.maybe.string,
    venue: check.array.of.maybe.string,
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
    events: check.array.of.maybe.string,
    organizers: check.array.of.maybe.string,
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