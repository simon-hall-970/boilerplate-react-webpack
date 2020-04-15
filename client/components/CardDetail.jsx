import React from 'react'
import {getCards} from '../apis/cards'

class CardDetail extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    const cards = this.props.cards;
    const cardsImages = []
    for(let i=0; i <cards.length; i++){
      Object.keys(cards[i]).map(key =>{
        if(key == 'card_images'){
          cardsImages.push(cards[i]['card_images'][0].image_url)
        }
      })
    }
    return(
      <div className="cardDetail">
        
      </div>
    )
  }
}

export default CardDetail;