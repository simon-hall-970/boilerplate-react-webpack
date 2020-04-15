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
        const fighter = this.state.fighter
        const record = this.state.fighter.record
        return (
            <>
            <img className='fighterPic' src='images/fighter.jpg' />
            {fighter.info ? 
                <div className='fighterInfo'>
                <h1>{fighter.competitor.name}</h1> 
                <h2>Nickname: {fighter.info.nickname}</h2>
                <h2>Weight: {fighter.info.weight}</h2>
                <h1>Record: {record.wins}-{record.losses}-{record.draws}</h1>
                </div>
                : 
                <img src='images/infinity-1s-200px (2).png' />}
            </>
        )
    }
}

export default Fighter