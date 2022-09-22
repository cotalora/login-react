import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('user') ? 
    JSON.parse(localStorage.getItem('user') || '') : 
    { email: '', password: '', isLogged: false};

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        login: initialState
    },
    reducers: {
        login: (state, action) => {
            state.login = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload) );
        },
        logout: (state) => {
            state.login = { email: '', password: '', isLogged: false};
            localStorage.removeItem('user');
        }
    },
})

export const { login, logout } = loginSlice.actions;