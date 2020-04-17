import React from 'react'
import CardsList from './CardsList'
import CardDetail from './CardDetail'
import {HashRouter as Router ,Link, Route} from 'react-router-dom'
import {getCards} from '../apis/cards'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      cards: [{}]
    }
  }

  componentDidMount(){
    this.loading()
  }

  loading = () =>{
    getCards()
    .then(cards=>{
      this.setState({
        cards: cards,
      })
    })
  }

  handleClick = (card) =>{
    this.setState({
      card: card
    })
  }

  render(){
    console.log('rendered')
    return (
      <>
      <Router>
        <Route path="/">
          <div className="title">
            <img className="animated zoomIn slow" src="/images/yugioh.png" alt="Yugioh title"/>
          </div>
          <div className="cardsInfo">
            <CardsList handleClick={this.handleClick} cards={this.state.cards} loading={this.loading}/>
            <CardDetail card={this.state.card}/>
          </div>
        </Route>
      </Router>
      </>
    )
  }
}

export default App
