import React from 'react'

import {getRankings} from '../api/ufc'

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
      {this.state.rankings.length > 0 ? this.state.rankings.map(ranking => <h1>{ranking.name}</h1>) : <h1>Loading</h1>}
      </>
    )
  }
}

export default App
