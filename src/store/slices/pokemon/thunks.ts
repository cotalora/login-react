import { setPokemons } from "./pokemonSlice";
import { Dispatch } from '@reduxjs/toolkit';
import { getPokemonsByPage } from "../../../api/pokemonApi";
import { setLoading, unsetLoading } from "../loadingSpinner/loadingSpinnerSlice";

export const getPokemons = (page: number = 0) => async (dispatch: Dispatch) => {
    dispatch(setLoading());
    const pokemons = await getPokemonsByPage(page);

    if (pokemons) {
        dispatch(setPokemons({ page, pokemons }));
        dispatch(unsetLoading());
    }
}