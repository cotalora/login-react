import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '../../../src/store/slices/login';
import { MemoryRouter } from 'react-router-dom';
import { PublicRoute } from '../../../src/router/PublicRoute/PublicRoute';

describe('Pruebas unitarias a componente de rutas PublicRoute', () => {

    const childText = 'child text';

    const store = configureStore({
        reducer: {
            login: loginSlice.reducer,
        }
    });

    test('Se debe renderizar el children cuando el usuario no está logueado', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <PublicRoute>
                        <div>{childText}</div>
                    </PublicRoute>
                </MemoryRouter>
            </Provider>
        )
        expect(screen.getByText(childText)).toBeInTheDocument();
    });
});