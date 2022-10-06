import React from 'react';
import { render, screen } from '@testing-library/react';
import { PrivateRoute } from '../../../src/router/PrivateRoute/PrivateRoute';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '../../../src/store/slices/login';
import { MemoryRouter } from 'react-router-dom';
import { authenticatedState } from '../../feaxture/loginFeaxture';

describe('Pruebas unitarias a componente de rutas PrivateRoute', () => {

    const childText = 'child text';

    const store = configureStore({
        reducer: {
            login: loginSlice.reducer,
        }
    });

    test('Se debe renderizar el children cuando el usuario está logueado', () => {
        store.dispatch(loginSlice.actions.login(authenticatedState));
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <PrivateRoute>
                        <div>{childText}</div>
                    </PrivateRoute>
                </MemoryRouter>
            </Provider>
        )
        screen.debug();
        expect(screen.getByText(childText)).toBeInTheDocument();
    });
});