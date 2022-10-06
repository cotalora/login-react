import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './api/rickAndMortyApi/rickAndMortyApi';
import { loginSlice, pokemonSlice, loadingSpinnerSlice } from './slices';

export const store = configureStore({
    reducer: {
        loadingSpinner: loadingSpinnerSlice.reducer,
        login: loginSlice.reducer,
        pokemon: pokemonSlice.reducer,
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(rickAndMortyApi.middleware)
})

export type AppDispatch = typeof store.dispatch;