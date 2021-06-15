

export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_DELETING = "POKEMON_DELETING";


export type PokemonType = {
    name: string,
    abilities: PokemonAbility[],
    sprites: PokemonSprites,
    stats: PokemonStat[],
    weight: number,
    description? : string,
};


export type PokemonAbility = {
    ability: {
        name: string,
        url: string
    }
}

export type PokemonSprites = {
    front_default: string;
}

export type PokemonStat = {
    base_stat: number,
    stat: {
        name: string
    }
}

export interface PokemonLoading {
    type: typeof POKEMON_LOADING
}

export interface PokemonFail {
    type: typeof POKEMON_FAIL
}

export interface PokemonSuccess {
    type: typeof POKEMON_SUCCESS, 
    payload: PokemonType[]
}

export interface PokemonDeleting {
    type: typeof POKEMON_DELETING,
    payload?: PokemonType
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess | PokemonDeleting;

