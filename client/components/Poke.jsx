import React from 'react'

class Poke extends React.Component {
 
    render() {
    
        const poke = this.props.poke
    
        return (
    
    <>
        {/* {iss.velocity && <p>The velocity is: {iss.velocity}</p>} */}
        {Object.keys(poke).map(key => {
          return (
            <p>The {key} is: <a href={poke[key]}>{poke[key]}</a></p>
          )
        })}
      </>
    )
  }
}

export default Poke