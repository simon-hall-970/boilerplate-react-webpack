import React from 'react'

import { getPokeFacts } from '../Poke'

import Poke from './Poke'

class App extends React.Component {
  state = {
    poke: {}
  }
  componentDidMount() {
    this.update()
  }

  update = () => {
    getPokeFacts()
    .then(poke => {
      this.setState({
        poke: poke
      })
    })
  }


  render() {
    return (
      <>
        <h1>What facts can I see?</h1>
        <Poke poke={this.state.poke} />
      </>
    )
  }
}
export default App