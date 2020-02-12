const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4c876f05d64dc7e2e0b2fd8c7d9a0399/'+ latitude +','+ longitude + "?units=si"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search',undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " The temparature is " + body.hourly.data[0].temperature + " with a " + body.daily.data[0].precipProbability*100 + "% chance of rain.")
        }
    })
}

module.exports = forecast