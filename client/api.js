const request = require('superagent')

const baseURL = 'https://www.boredapi.com/api/activity'

export function getRandom() {
  return request
  .get(baseURL)
  .then(res => res.body)
}

export function getFiltered(filter) {
  return request
  .get(baseURL + '?type=' + filter)
  .then(res => res.body)
}