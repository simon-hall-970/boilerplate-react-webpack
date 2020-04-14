import React from 'react'
import { getRandom } from '../api'

import Control from './Control'
import Details from './Details'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activity: {},
      details: false
    }

  }
  componentDidMount() {
    this.random()
  }

  random() {
    getRandom()
    .then(activity => {
      this.setState({
        activity: activity
      })
    })
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
          <Control onClick={() => this.random()}/>
        </div>
      </>

    )
  }
}

export default App
