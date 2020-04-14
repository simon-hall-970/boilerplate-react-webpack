import React from 'react'

import {getRankings} from '../api/ufc'
import {headerCase} from 'header-case'
import Rankings from './Rankings'

class Home extends React.Component {
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
            <div id='rankingsContainer'>
            {this.state.rankings.length > 0 ? 
                this.state.rankings.map(ranking => <Rankings name={headerCase(ranking.name)} competitors={ranking.competitor_rankings}/>) : 
                <img src='images/infinity-1s-200px (2).png' />}
            </div>
        )
    }
}

export default Home