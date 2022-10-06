import React from 'react';
import { render, screen } from "@testing-library/react";
import { MainRoute } from '../../../src/router/MainRoute/MainRoute';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '../../../src/store/slices/login';
import { ILoginInWithAny } from '../../../src/interfaces';
import { MemoryRouter } from 'react-router-dom';

const mockStartGoogleLogin = jest.fn();
const mockStartFacebbokLogin = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/slices/login/thunks', () => ({
    startGoogleLogin: () => mockStartGoogleLogin,
    startFacebookLogin: () => mockStartFacebbokLogin,
    startLoginWithEmailPassword: ({ email, password }: ILoginInWithAny) => {
        return () => mockStartLoginWithEmailPassword({ email, password });
    },
}));

describe('Pruebas unitarias a componente de rutas MainRoute', () => {

    const store = configureStore({
        reducer: {
            login: loginSlice.reducer,
        }
    });

    test('No se deben renderizar los nodos hijos cuando la ruta es erronea', async () => {
        await render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['anotherRoute']}>
                    <MainRoute />
                </MemoryRouter>
            </Provider>
        )
        const hasChildNodes = screen.getByLabelText('main-routes-container').hasChildNodes();
        expect(hasChildNodes).toBe(false);
    });

    test('Se deben renderizar los nodos hijos cuando la ruta es correcta', async () => {
        await render(
            <Provider store={store}>
                <MemoryRouter>
                    <MainRoute />
                </MemoryRouter>
            </Provider>
        )
        const hasChildNodes = screen.getByLabelText('main-routes-container').hasChildNodes();
        expect(hasChildNodes).toBe(true);
    });
})