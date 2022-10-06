import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { loginSlice } from '../../../../../src/store/slices/login';
import { ButtonSocial } from '../../../../../src/pages/LoginPage/components/ButtonSocial/ButtonSocial';
import { notAuthenticatedState } from '../../../../feaxture/loginFeaxture';

const mockStartGoogleLogin = jest.fn();
const mockStartFacebbokLogin = jest.fn();

jest.mock('../../../../../src/store/slices/login/thunks', () => ({
    startGoogleLogin: () => mockStartGoogleLogin,
    startFacebookLogin: () => mockStartFacebbokLogin,
}));

describe(`Pruebas unitarias a componente ButtonSocial`, () => {
    beforeEach(() => jest.clearAllMocks());

    const store = configureStore({
        reducer: {
            login: loginSlice.reducer,
        }
    });

    test(`Se debe llamar el startGoogleLogin cuando se presione el botón google`, async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ButtonSocial />
                </MemoryRouter>
            </Provider>
        );

        const googleButton = screen.getByLabelText('google-button');
        fireEvent.click(googleButton);

        await waitFor(() =>
            expect(mockStartGoogleLogin).toHaveBeenCalled()
        )

        expect(store.getState().login).toEqual(notAuthenticatedState);
    });

    test(`Se debe llamar el startGoogleLogin cuando se presione el botón facebook`, async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ButtonSocial />
                </MemoryRouter>
            </Provider>
        );

        const facebookButton = screen.getByLabelText('facebook-button');
        fireEvent.click(facebookButton);

        await waitFor(() =>
            expect(mockStartFacebbokLogin).toHaveBeenCalled()
        )

        expect(store.getState().login).toEqual(notAuthenticatedState);
    });

});