import request from 'superagent'

export function getRankings() {
    return request
        .get('/api/v1/ufc')
        .then(res => res.body)
}

export function getFighter(id) {
    return request
        .get('/api/v1/ufc/fighter/' + id)
        .then(res => res.body)
}