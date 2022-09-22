import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
    status: string;
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    errorMessage: string;
}

const initialState: LoginState = localStorage.getItem('user') ?
    JSON.parse(localStorage.getItem('user') || '') :
    {
        status: 'not-authenticated',
        uid: '',
        email: '',
        displayName: '',
        photoURL: '',
        errorMessage: '',
    };

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = payload.errorMessage;

            localStorage.setItem('user', JSON.stringify(state));
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.uid = '';
            state.email = '';
            state.displayName = '';
            state.photoURL = '';
            state.errorMessage = payload?.errorMessage || '';

            localStorage.removeItem('user');
        },
        checkingCredentials: (state) => {
            state.status = 'authenticating';
        },
    },
})

export const { login, logout, checkingCredentials } = loginSlice.actions;