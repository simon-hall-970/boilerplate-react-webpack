import React from 'react'

import {Link} from 'react-router-dom'

class Rankings extends React.Component {
    state = {
        expand: false
    }

    handleClick = () => {
        this.state.expand ? this.setState({expand: false}) : this.setState({expand: true})
    }

    render() {
        return (
            <div className='ranking'>
            <h1 onClick={this.handleClick}>{this.props.name}</h1>
            {this.state.expand ? 
                this.props.competitors.map(competitor => 
                    <h2 className='name'><Link to={`fighter/${competitor.competitor.id}`}>{competitor.rank}: {competitor.competitor.name}</Link></h2>) : <h2></h2>}
            </div>
        )
    }
}

export default Rankings