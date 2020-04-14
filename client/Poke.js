import request from 'superagent'

const baseURL = 'https://pokeapi.co/api/v2/'

export function getPokeFacts () {
    
    return request
    .get(baseURL) 
    .then(res => res.body)
}