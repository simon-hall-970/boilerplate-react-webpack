import React from 'react'

class Control extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Get a new suggestion</button>
        <h3>Filter:</h3>
        <form onSubmit={this.props.onSubmit} className='form-container'>

          <input type='radio' name='type' value='random' onChange={this.props.onChange}/>
          <label htmlFor='random'>Random</label>
          <br />
          
          <input type='radio' name='type' value='busywork' onChange={this.props.onChange}/>
          <label htmlFor='busywork'>Busywork</label>
          <br />
          <input type='radio' name='type' value='charity' onChange={this.props.onChange}/>
          <label htmlFor='charity'>Charity</label>
          <br />

          <input type='radio' name='type' value='diy' onChange={this.props.onChange}/>
          <label htmlFor='diy'>DIY</label>
          <br />

          <input type='radio' name='type' value='education' onChange={this.props.onChange}/>
          <label htmlFor='education'>Education</label>
          <br />

          <input type='radio' name='type' value='music' onChange={this.props.onChange}/>
          <label htmlFor='music'>Music</label>
          <br />

          <input type='radio' name='type' value='recreational' onChange={this.props.onChange}/>
          <label htmlFor='recreational'>Recreational</label>
          <br />

          <input type='radio' name='type' value='relaxation' onChange={this.props.onChange}/>
          <label htmlFor='relaxation'>Relaxation</label>
          <br />

          <input type='radio' name='type' value='social' onChange={this.props.onChange}/>
          <label htmlFor='social'>Social</label>

        </form>
      </div>
    )
  }
}

export default Control