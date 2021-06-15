
import { Dispatch } from "redux";
import { PokemonDispatchTypes, POKEMON_SUCCESS, POKEMON_FAIL, POKEMON_LOADING, POKEMON_DELETING, PokemonType } from "./PokemonTypes";
import axios from 'axios';

export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try{
        dispatch({
            type: POKEMON_LOADING
        });

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        dispatch({
            type: POKEMON_SUCCESS,
            payload: res.data
        });

    }catch(e) {
        dispatch({
            type: POKEMON_FAIL
        });
    }  
}

export const DeletePokemon = (pokemon: PokemonType) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
        dispatch({
            type: POKEMON_DELETING,
            payload: pokemon
        });
}