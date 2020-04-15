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
            <h1></h1>
            // <h1>{this.state.fighter.competitor.name}</h1>
        )
    }
}

export default Fighter