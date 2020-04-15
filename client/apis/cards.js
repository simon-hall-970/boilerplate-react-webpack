import request from 'superagent'

// const dogUrl = 'https://dog.ceo/api/breeds/image/random'
// const dogUrl = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
const cardUrl = 'https://db.ygoprodeck.com/api/v6/cardinfo.php'


export function getCards(){
  return request
  .get(cardUrl)
  .then(res => res.body)
}