const validateAgainstSchema = (thing, thingSchema) => {
    let valid = new Set();
    for (const key in thingSchema) {
        // console.log(key, thing[key], thingSchema[key])
        if (thing.hasOwnProperty(key)) {
            valid.add(thingSchema[key](thing[key]))
            // console.log(key, result, typeof thing[key])
        } else{
            valid.add(false)
        }
    }
    return valid.size === 1 ? true : false
}

module.exports = {
    validateAgainstSchema
}