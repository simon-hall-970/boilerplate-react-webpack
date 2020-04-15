import React, { Component } from 'react'
import Pokemon from './Pokemon'
import { getPokemon } from '../api/pokemon'


class PokemonList extends Component {
    
    render() {
        const { results } = this.props.pokemons
        return(
            <div className="pokedex-container">
                {results.map((pokemon, id) => {
                    const { name, url } = pokemon
                    return <Pokemon key={id} name={name} url={url} />
                })}
            </div>
        )
    }
}

export default PokemonList