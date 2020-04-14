import React from 'react'
import {headerCase} from 'header-case'

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
      <h1 id='title'>UFC Rankings</h1>
      <div id='rankingsContainer'>
      {this.state.rankings.length > 0 ? 
        this.state.rankings.map(ranking => <Rankings name={headerCase(ranking.name)} competitors={ranking.competitor_rankings}/>) : 
        <h1>Loading</h1>}
      </div>
      </>
    )
  }
}

export default App
