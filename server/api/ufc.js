const request = require('superagent')

function getRankings() {
    return request
        .get('https://api.sportradar.us/ufc/trial/v2/en/rankings.json?api_key=6zddq6hzhz98mu2sqppdaa9g')
        .then(res => res.body)
}

module.exports = {
    getRankings
}