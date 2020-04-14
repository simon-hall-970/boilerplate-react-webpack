import React from 'react'

class Details extends React.Component {

  state = {
    whwat: 'why'
  }

  render() {
    return (
      <>
        {this.props.link && <a href={this.props.link}>{this.props.link}</a>}
        <p>Participants: {this.props.participants}</p>
        <p>Type: {this.props.type}</p>
      </>

    )
  }
}

export default Details