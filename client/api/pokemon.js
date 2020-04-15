import request from 'superagent'


export const getPokemon = (url) => {
    return request
        .get(url)
        .then((res) => res.body)
}