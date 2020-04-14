const request = require('superagent')

const baseURL = 'https://www.boredapi.com/api/'

export function getRandom() {
  return request
  .get(baseURL + 'activity')
  .then(res => res.body)
}

export function getFiltered(filter) {
  return request
  .get(baseURL + 'activity?type=' + filter)
  .then(res => res.body)
}