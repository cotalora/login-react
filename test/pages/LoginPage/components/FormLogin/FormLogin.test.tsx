import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ILoginInWithAny } from "../../../../../src/interfaces";
import { FormLogin } from '../../../../../src/pages/LoginPage/components/FormLogin/FormLogin';
import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '../../../../../src/store/slices/login/loginSlice';
import { notAuthenticatedState } from "../../../../feaxture/loginFeaxture";
import { Provider, useSelector } from 'react-redux';
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../../../src/store/slices/login/thunks', () => ({
    startLoginWithEmailPassword: ({ email, password }: ILoginInWithAny) => {
        return () => mockStartLoginWithEmailPassword({ email, password });
    },
}));

describe(`Pruebas unitarias a componente FormLogin`, () => {
    beforeEach(() => jest.clearAllMocks());

    const store = configureStore({
        reducer: {
            login: loginSlice.reducer,
        }
    });

    test(`Se debe llamar el startLoginWithEmailPassword cuando se haga submit`, async () => {
        const userCredentials = {
            email: 'cotaloradevp@gmail.com',
            password: '123456789'
        }
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <FormLogin />
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole('textbox', { name: /correo electrónico/i });
        fireEvent.change(emailField, { target: { name: 'email', value: userCredentials.email } });

        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField, { target: { name: 'password', value: userCredentials.password } });

        const loginForm = screen.getByLabelText('submit-form');
        fireEvent.submit(loginForm);

        await waitFor(() =>
            expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
                email: userCredentials.email,
                password: userCredentials.password
            })
        )
    });

    test(`Se debe presentar el texto Campo requerido cuando se haga submit y cuando no hay 
        datos en los campos`, async () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <FormLogin />
                </MemoryRouter>
            </Provider>
        );

        const loginForm = screen.getByLabelText('submit-form');
        await act(async () => {
            await fireEvent.submit(loginForm);
        })
        const labelsRequired = screen.getAllByText(/Campo requerido/i);
        expect(labelsRequired.length).toEqual(2);
    });

    test(`Se debe presentar el texto Correo electrónico no es válido cuando se haga 
        submit y cuando no hay datos en el campo email`, async () => {

        const userCredentials = {
            email: 'cotaloradevp',
            password: '123456789'
        }
        
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <FormLogin />
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole('textbox', { name: /correo electrónico/i });
        const loginForm = screen.getByLabelText('submit-form');

        await act(async () => {
            await fireEvent.change(emailField, { target: { name: 'email', value: userCredentials.email } });
            await fireEvent.submit(loginForm);
        });

        const labelsRequired = screen.getByText(/Correo electrónico no es válido/i);
        expect(labelsRequired).toBeInTheDocument();
    });
});