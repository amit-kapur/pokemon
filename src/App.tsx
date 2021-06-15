import React, {FC, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from './Store';
import { GetPokemon, DeletePokemon } from './actions/PokemonActions';
import PokemonList from './components/PokemonList';
import './App.css';
import { PokemonType } from './actions/PokemonTypes';

const App: FC = () => {

  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore )=> state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  }

  const handleSubmit =() => {
    dispatch(GetPokemon(pokemonName.toLowerCase()));
    setPokemonName("");
  }

  const handleDeletePokemon = (pokemonToDelete: PokemonType) => {
    console.log(pokemonToDelete);
    dispatch(DeletePokemon(pokemonToDelete));
  }

  return (
    <>
      <div className="App">
          <div className="header">  
            <h3 className="heading">
                Search All the Pokémon data you'll ever need in one place. 
            </h3> 
            <div className="container">
              <div className="inputContainer">
                <input type="text" onChange={handleChange} placeholder="Pokemon name..." value={pokemonName} />
              </div>
              <button onClick={handleSubmit}>Search</button>
            </div>
            <div className="subheading">
              example : bulbasaur / ivysaur / venusaur / charmander / charmeleon
            </div> 
        </div>
      
        <main className="main-area">
          <div className="centered">
            <section className="cards">
                { pokemonState.pokemons && pokemonState?.pokemons.map((pokemon : PokemonType, key: number) => {
                  return (
                    <PokemonList key={key} pokemon={pokemon} DeletePokemon={handleDeletePokemon} ></PokemonList>
                  )
                }
                )}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
