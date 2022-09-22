
import { Dispatch } from "@reduxjs/toolkit";
import { signInWithFacebook, signInWithGoogle } from "../../../firebase/providers";
import { checkingCredentials, login, logout } from "./loginSlice"

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