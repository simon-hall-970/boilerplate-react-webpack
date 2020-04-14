import React from 'react'
import { getRandom, getFiltered } from '../api'

import Control from './Control'
import Details from './Details'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activity: {},
      details: false,
      filter: 'random'
    }

  }
  componentDidMount() {
    this.getSuggestion()
  }

  getSuggestion() {

    if(this.state.filter != 'random') {
      getFiltered(this.state.filter)
      .then(activity => {
        this.setState({
          activity: activity
        })
      })
    } else {
      getRandom()
      .then(activity => {
        this.setState({
          activity: activity
        })
      })
    }
  }

  handleChange = e => {
    this.setState({
      filter: e.target.value
    })

    getFiltered(this.state.filter)
  }

  details = e => {
    this.setState({
      details: !this.state.details
    })
  }

  render() {
    return (
      <>
        <div className='display-container'>
          <h1>Bored?</h1>
          <h2>{this.state.activity.activity}</h2>
          <button onClick={this.details}>Show Details</button>
          {
            this.state.details && <Details {...this.state.activity}/>
          }
        </div>
        <div className='control-container'>
          <Control onClick={() => this.getSuggestion()} onChange={this.handleChange}/>
        </div>
      </>

    )
  }
}

export default App
