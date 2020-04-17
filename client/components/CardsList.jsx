import React from 'react'
import {Link} from 'react-router-dom'


class CardsList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cards: {}
    }
  }

  render(){
    const cards = this.props.cards
    // const dragonCards = []
    // for(let i = 0; i < cards.length;i++){
    //   Object.keys(cards[i]).map(key => {
    //     if(key == 'race' && cards[i][key] == 'Dragon'){
    //       dragonCards.push(cards[i]['card_images'][0].image_url_small)
    //     }
    //   })
    // }
    // const cardsName = []
    // for(let i=0; i <cards.length; i++){
    //   Object.keys(cards[i]).map(key =>{
    //     if(key == 'name'){
    //       cardsName.push(cards[i]['name'])
    //     }
    //   })
    // }
    // cards.map(card =>{
    //   console.log(card)
    // })
    return(
      <div className="cardsList">
      {/* {dragonCards.map((card, i)=>{
        return(
          <img key={i} src={card} alt={`Card ${i}`}/>
        )
      })} */}
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Card Images</td>
              <td>Card ID</td>
              <td>Name</td>
              <td>
                  <select name="type" id="cardType">
                    <option value="">CARD TYPE</option>
                    <option value="Spell Card">Spell</option>
                    <option value="Trap Card">Trap</option>
                    <option value="Effect Monster">Effect Monster</option>
                    <option value="Normal Monster">Normal Monster</option>
                    <option value="Spirit Monster">Spirit Monster</option>
                    <option value="Flip Effect Monster">Flip Effect Monster</option>
                    <option value="Union Effect Monster">Union Effect Monster</option>
                    <option value="Fusion Monster">Fusion Monster</option>
                    <option value="Ritual Effect Monster">Ritual Effect Monster</option>
                    <option value="Pendulum Effect Monster">Pendulum Effect Monster</option>
                    <option value="Link Monster">Link Monster</option>
                    <option value="XYZ Monster">XYZ Monster</option>
                    <option value="Synchro Tuner Monster">Synchro Tuner Monster</option>
                    <option value="Tuner Monster">Tuner Monster</option>
                    <option value="Normal Tuner Monster">Normal Tuner Monster</option>
                    <option value="Synchro Monster">Synchro Monster</option>
                  </select>
                </td>
            </tr>
          </thead>
          <tbody>
            {cards.map((card, i)=>{
            return(
              <tr key={i}>
                <td>{i}</td>
                {(card.card_images) ? <td><img src={card.card_images[0].image_url_small} alt=""/></td>: undefined}
                <td><Link onClick={()=>{this.props.handleClick(card)}}>{card.id}</Link></td>
                <td>{card.name}</td>
                <td>{card.type}</td>
              </tr>
            )
            })}
          </tbody>    
        </table> 
      </div>
    )
  }
}

export default CardsList;