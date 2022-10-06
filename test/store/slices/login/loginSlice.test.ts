import { checkingCredentials, login, loginSlice, logout } from "../../../../src/store/slices/login";
import { initialState, authenticatedState, notAuthenticatedState } from '../../../feaxture/loginFeaxture';

describe('Pruebas unitarias a loginSlice', () => {

    test('Se debe de regresar el estado inicial y llamarse "login"', () => {

        const state = loginSlice.reducer(initialState, {
            type: 'login'
        });

        expect(state).toEqual(initialState);
        expect(loginSlice.name).toBe('login');
    });

    test('Se debe de realizar la autenticación', () => {
        const state = loginSlice.reducer(initialState, login(authenticatedState));
        expect(state).toEqual(authenticatedState);
    });

    test('Se debe de realizar el logout', () => {
        const state = loginSlice.reducer(authenticatedState, logout(notAuthenticatedState));
        expect(state).toEqual(notAuthenticatedState)
    });

    test('Se debe de cambiar el estado a authenticating', () => {
        const state = loginSlice.reducer(authenticatedState, checkingCredentials());
        expect( state.status ).toBe('authenticating');
    });
});