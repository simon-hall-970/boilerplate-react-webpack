import React, { Component } from 'react'
import { getPokemon } from '../api/pokemon'
import PokemonList from './PokemonList'

const baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=802"

class App extends Component {
  state = {
    pokemons: null
  }

  componentDidMount() {
    this.update()
  }

  update = () => {
    getPokemon(baseUrl)
      .then((pokemonsData) => {
        this.setState({
          pokemons: pokemonsData
        })
      })
  }

  render() {
    if(this.state.pokemons === null) {
      return (
        <>
          <h1 className="header">Gotta Catch em All!!</h1>
          <p>Loading...</p>
        </>
      )
    } else {
      return (
        <div>
          <h1 className="header">Gotta Catch em All!!</h1>
            <PokemonList pokemons={this.state.pokemons}/>
        </div>
      )
    }
  }
}

export default App
