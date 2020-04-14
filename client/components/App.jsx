import React from 'react'

import {getRankings} from '../api/ufc'

import Rankings from './Rankings'

class App extends React.Component {
  state = {
    rankings: {}
  }

  componentDidMount() {
    getRankings().then(rankings => {
      this.setState({'rankings': rankings.rankings})
    })
  }

  render() {
    return (
      <>
      <h1>UFC Rankings</h1>
      {this.state.rankings.length > 0 ? 
        this.state.rankings.map(ranking => <Rankings name={ranking.name} competitors={ranking.competitor_rankings}/>) : 
        <h1>Loading</h1>}
      </>
    )
  }
}

export default App
