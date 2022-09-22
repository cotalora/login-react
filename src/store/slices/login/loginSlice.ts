import { createSlice } from '@reduxjs/toolkit';
import { decryptToken } from '../../../utils/decryptToken';

interface LoginState {
    status: string;
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    errorMessage: string;
    accessToken: string;
}

const localState: any = localStorage.getItem('token') ? decryptToken(localStorage.getItem('token') || '') : '';

const initialState: LoginState =
    {
        status: localState ? 'authenticated' : 'not-authenticated',
        uid: localState.user_id || '',
        email: localState.email || '',
        displayName: localState.name || '',
        photoURL: localState.picture || '',
        errorMessage: '',
        accessToken: localStorage.getItem('token') || ''
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
            state.accessToken = payload.accessToken;

            localStorage.setItem('token', state.accessToken.toString());
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.uid = '';
            state.email = '';
            state.displayName = '';
            state.photoURL = '';
            state.errorMessage = payload?.errorMessage || '';
            state.accessToken = '';

            localStorage.removeItem('token');
        },
        checkingCredentials: (state) => {
            state.status = 'authenticating';
        },
    },
})

export const { login, logout, checkingCredentials } = loginSlice.actions;