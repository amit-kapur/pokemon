import { PokemonDispatchTypes, PokemonType, POKEMON_FAIL, POKEMON_SUCCESS, POKEMON_LOADING, POKEMON_DELETING } from '../actions/PokemonTypes';
import {pokemons} from '../mock/Pokemons';

interface DefaultState {
    loading: boolean,
    pokemons?: PokemonType[],
}

const defaultState: DefaultState = {
    loading: false,
    pokemons: pokemons
}

const pokemonReducer = (state: DefaultState = defaultState, action: PokemonDispatchTypes) : DefaultState => {

    switch(action.type) {
        case POKEMON_FAIL:
            return {
                loading: false,
                pokemons: state.pokemons
            }
        case POKEMON_LOADING:
            return {
                loading: true,
                pokemons: state.pokemons
            }
        case POKEMON_SUCCESS:
            return {
                loading: false,
                pokemons: state.pokemons?.concat(action.payload)
            }
        case POKEMON_DELETING:
            console.log(action.payload);
            return {
                loading: false,
                pokemons: state.pokemons?.filter(pokemon => pokemon !== action.payload)
            }
        default:
            return state;
    }
}

export default pokemonReducer;