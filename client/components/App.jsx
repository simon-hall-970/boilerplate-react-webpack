import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'

class App extends React.Component {
  render() {
    return (
      <>
      <h1 id='title'>UFC Rankings</h1>
      <Router>
        <Route exact path="/" component={Home} />
        {/* <Route exact path='/fighter/:id' component={Fighter} /> */}
      </Router>
      </>
    )
  }
}

export default App
