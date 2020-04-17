import React from 'react'
import {getCards} from '../apis/cards'

class CardDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      card: {}
    }
  }

  render(){
    console.log(this.props.card)
    console.log(this.props)
    const card = this.props.card
    return(
      <div className="cardDetail">
        {(card == undefined) ? <h1>Choose a card</h1> : 
        <div>
          <h1>{card.name}</h1>
          <h3>Card Type: {card.type}</h3>
          <h3>Card Race: {card.race}</h3>
          <img src={card.card_images[0].image_url} alt={card.name}/>
          <p>{card.desc}</p>
        </div>
        }
      </div>
    )
  }
}

export default CardDetail;