
import { Dispatch } from "@reduxjs/toolkit";
import { loginInWithEmailPassword, logoutFirebase, signInWithFacebook, signInWithGoogle } from "../../../firebase/providers";
import { checkingCredentials, login, logout } from "./loginSlice"
import { ILoginInWithAny } from '../../../interfaces/login';

export const checkingAuthentication = () => async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
}

export const startGoogleLogin = () => async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result));
    
    dispatch(login(result));
}

export const startFacebookLogin = () => async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithFacebook();
    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
}

export const startLoginWithEmailPassword = ({ email, password }: ILoginInWithAny) => async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginInWithEmailPassword({ email, password });

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
}

export const startLogout = () => async (dispatch: Dispatch) => {
    const result = await logoutFirebase();

    dispatch(logout(result));
}