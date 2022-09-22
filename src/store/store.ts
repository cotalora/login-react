import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './slices/login';

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
    },
})