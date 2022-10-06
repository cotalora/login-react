import React from 'react';
import { render, screen } from "@testing-library/react";
import { LoginPage } from '../../../src/pages/LoginPage/LoginPage';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { loginSlice } from '../../../src/store/slices/login';
import { configureStore } from '@reduxjs/toolkit';
import { ILoginInWithAny } from '../../../src/interfaces';

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

const texts = {
    title: 'KURISU WEB',
    subtitle: 'Realiza tus proyectos con nosotros.',
    paragraph: 'Descubre el mundo de la mejor comunidad de freelancers y empresarios.',
    loginTitle: 'Inicio de Sesión',
    loginText: 'Ingresa tus credecciales para acceder a tu cuenta',
}

describe('Pruebas unitarias a la página LoginPage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )
    });

    const store = configureStore({
        reducer: {
            login: loginSlice.reducer,
        }
    });
    
    test(`Se debe presentar dos títulos h1 ${texts.title}`, () => {
        const titles = screen.getAllByText(texts.title);
        expect(titles.length).toEqual(2);
    });
    
    test(`Se debe presentar el texto ${texts.subtitle}`, () => {
        expect(screen.getByText(texts.subtitle)).toBeInTheDocument();
    });
    
    test(`Se debe presentar el texto ${texts.paragraph}`, () => {
        expect(screen.getByText(texts.paragraph)).toBeInTheDocument();
    });
    
    test(`Se debe presentar el texto ${texts.loginTitle}`, () => {
        expect(screen.getByText(texts.loginTitle)).toBeInTheDocument();
    });
    
    test(`Se debe presentar el texto ${texts.loginText}`, () => {
        expect(screen.getByText(texts.loginText)).toBeInTheDocument();
    });
});