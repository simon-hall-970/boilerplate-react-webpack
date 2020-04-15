import React, { Component } from 'react'
import { getPokemon } from '../api/pokemon'

class Pokemon extends Component {
    state = {
        id: "",
        name: "",
        order: "",
        moves: [],
        sprites: {},
        types: []
    }

    componentDidMount() {
        getPokemon(this.props.url)
            .then((pokemon) => {
                this.setState({
                    id: pokemon.id,
                    name: pokemon.name,
                    order: pokemon.order,
                    moves: pokemon.moves,
                    sprites: pokemon.sprites,
                    types: pokemon.types
                })
            })
    }

    render() {
        return (
            <div className="pokemon-info">
                <h2 className="pokemon">#{this.state.id} {this.state.name}</h2>
                <img className="pokemon" src={this.state.sprites.front_default} alt={this.state.name}/>
            </div>
        )
    }
}

export default Pokemon