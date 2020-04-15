import React from 'react'
import {Link} from 'react-router-dom'
import {getCards} from '../apis/cards'

class CardsList extends React.Component{
  constructor(){
    super()
  }

  handleClick = (event) =>{
    event.preventDefault()
    getCards()
    .then(this.props.loading)
    .catch(err => this.setState({errorMessage: err.message}))
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
    // cards.map(item =>{
    //   console.log(item)
    // })
    return(
      <div className="cardsList">
      {/* {dragonCards.map((item, i)=>{
        return(
          <img key={i} src={item} alt={`Card ${i}`}/>
        )
      })} */}
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Card Images</td>
              <td>Card ID</td>
              <td>Name</td>
              <td>Type</td>
            </tr>
          </thead>
          <tbody>
            {cards.map((item, i)=>{
            return(
              <tr key={i}>
                <td>{i}</td>
                {(item.card_images) ? <td><img src={item.card_images[0].image_url_small} alt=""/></td>: undefined}
                <td><Link onClick={this.handleClick} to="/">{item.id}</Link></td>
                <td>{item.name}</td>
                <td>{item.type}</td>
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