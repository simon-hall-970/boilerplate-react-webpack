import React from 'react'

class Rankings extends React.Component {
  render() {
    return (
        <>
        <h1>{this.props.name}</h1>
        {this.props.competitors.map(competitor => <h2>{competitor.rank}: {competitor.competitor.name}</h2>)}
        </>
    )
  }
}

export default Rankings