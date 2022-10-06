import { setPokemons } from "./pokemonSlice";
import { Dispatch } from '@reduxjs/toolkit';
import { getPokemonsByPage } from "../../../api/pokemonApi";
import { setLoading, unsetLoading } from "../loadingSpinner/loadingSpinnerSlice";

export const getNextPokemons = (page: number = 0) => async (dispatch: Dispatch) => {
    console.log('next', page)
    dispatch(setLoading());
    const pokemons = await getPokemonsByPage(page);

    if (pokemons) {
        dispatch(setPokemons({ page, pokemons }));
        dispatch(unsetLoading());
    }
}

export const getPreviousPokemons = (page: number = 0) => async (dispatch: Dispatch) => {
    console.log('prev', page)
    dispatch(setLoading());
    const pokemons = await getPokemonsByPage(page);

    if (pokemons) {
        dispatch(setPokemons({ page, pokemons }));
        dispatch(unsetLoading());
    }
}