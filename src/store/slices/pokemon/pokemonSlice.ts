import { createSlice } from "@reduxjs/toolkit";
import { IPokemonState } from "../../../interfaces";
import { unsetLoading } from "../loadingSpinner/loadingSpinnerSlice";

const initialState: IPokemonState = {
    page: 0,
    pokemons: []
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: initialState,
    reducers: {
        setPokemons: (state, { payload }) => {
            state.page = payload.page;
            state.pokemons = payload.pokemons;
        }
    },
})

export const { setPokemons } = pokemonSlice.actions;