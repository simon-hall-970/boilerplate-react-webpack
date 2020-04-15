import React from 'react'

import {getFighter} from '../api/ufc'

class Fighter extends React.Component {
    state = {
        fighter: {}
    }


    componentDidMount() {
        getFighter('sr:competitor:253371').then(fighter => {
            console.log(fighter)
            this.setState({'fighter': fighter})
        })
    }

    render() {
        return (
            <>
            <img className='fighter' src='images/fighter.jpg' />
            {this.state.fighter.info ? 
                <>
                <h1>{this.state.fighter.competitor.name}</h1> 
                <h2>Nickname: {this.state.fighter.info.nickname}</h2>
                <h2>Weight: {this.state.fighter.info.weight}</h2>
                </>
                : 
                <img src='images/infinity-1s-200px (2).png' />}
            </>
        )
    }
}

export default Fighter