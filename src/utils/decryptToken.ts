import { ILocalState } from "../store/slices/login/interfaces/loginSlice";

export const decryptToken = (token: string): ILocalState => {
    return JSON.parse(atob(token.split('.')[1]));
}