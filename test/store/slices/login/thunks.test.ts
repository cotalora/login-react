import { checkingCredentials, login } from "../../../../src/store/slices/login";
import { checkingAuthentication, startGoogleLogin } from '../../../../src/store/slices/login/thunks';
import { authenticatedState } from "../../../feaxture/loginFeaxture";

const mockStartGoogleLogin = jest.fn();

jest.mock('../../../../src/firebase/providers', () => ({
    checkingAuthentication: jest.fn(),
    startGoogleLogin: () => mockStartGoogleLogin,
}));

describe('Pruebas unitarias a login thunks', () => {

    const dispatch = jest.fn();
    beforeEach( () => jest.clearAllMocks() );

    test('Se debe de llamar a checkingAuthentication', async () => {
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    /* test('startGoogleSignIn debe de llamar checkingCredentials y login debe ser exitoso', async() => {
        
        const loginData = { ok: true, ...authenticatedState };
        await mockStartGoogleLogin.mockResolvedValue(loginData);

        await startGoogleLogin()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    }); */
});