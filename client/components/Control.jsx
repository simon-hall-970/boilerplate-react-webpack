import React from 'react'

class Control extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Get Random suggestion</button>
      </div>
    )
  }
}

export default Control