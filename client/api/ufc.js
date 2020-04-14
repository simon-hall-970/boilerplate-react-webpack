import request from 'superagent'

export function getRankings() {
    return request
        .get('/api/v1/ufc')
        .then(res => res.body)
}