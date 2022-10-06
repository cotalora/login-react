import { configureStore } from '@reduxjs/toolkit';
import { loginSlice, pokemonSlice, loadingSpinnerSlice } from './slices';

export const store = configureStore({
    reducer: {
        loadingSpinner: loadingSpinnerSlice.reducer,
        login: loginSlice.reducer,
        pokemon: pokemonSlice.reducer,
    },
})

export type AppDispatch = typeof store.dispatch;