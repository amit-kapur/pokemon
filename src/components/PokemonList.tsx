import React from "react";
import { PokemonType } from "../actions/PokemonTypes";

interface Props {
    pokemon: PokemonType,
    DeletePokemon(pokemonToDelete: PokemonType): void;
}

const PokemonList = ({pokemon, DeletePokemon} : Props) => {

    return (
        <article className="card" key={pokemon.abilities && pokemon?.abilities[0].ability.name}>
            <a href="#">
               
                <img src={pokemon.sprites?.front_default} alt="A banana that looks like a bird" />
               
                <div className="card-content">
                    <h2>{pokemon.name}</h2>
                    <p>{pokemon?.description}</p>
                    <h5>Stats</h5>
                    <ul>
                        {pokemon.stats && pokemon.stats?.map(stats => {
                            return <li> {stats.stat.name} </li>
                        })}
                    </ul>
                    <h5>Abilities</h5>
                    <ul>
                        {pokemon.abilities && pokemon.abilities?.map(ability => {
                            return <li> {ability.ability.name} </li>
                        })}
                    </ul>
                    <button onClick={() => DeletePokemon(pokemon)} >Delete Pokemon</button>
                </div>
            </a>
        </article>
    )
}

export default PokemonList;



 {/* <div className="pokemon-list">

            <div className="content" key={pokemon.abilities && pokemon?.abilities[0].ability.name}> 
               
               <span>
                   {pokemon.name}
               </span>
               <span>
                    <img src={pokemon.sprites?.front_default} alt="" />   
                </span>
                <span>
                    {pokemon.stats && pokemon.stats[0]?.stat.name}
                </span>
                <span>
                    {pokemon.abilities && pokemon.abilities?.map(ability => {
                        return <p> {ability.ability.name} </p>
                    })}
                </span>
            </div>
            <button onClick={() => DeletePokemon(pokemon)} >X</button>
        </div> */}