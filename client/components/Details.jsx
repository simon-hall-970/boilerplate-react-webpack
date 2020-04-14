import React from 'react'

class Details extends React.Component {

  state = {
    whwat: 'why'
  }

  render() {
    return (
      <>
        {this.props.link && <p>{this.props.link}</p>}
        <p>Participants: {this.props.participants}</p>
        <p>Type: {this.props.type}</p>
      </>

    )
  }
}

export default Details