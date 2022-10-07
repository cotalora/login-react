import { ILocalState } from "../store/slices/login/interfaces/loginSlice";

export const decryptToken = (token: string): ILocalState => {
    const decodeData = JSON.parse(decodeURIComponent(escape(atob(token.split('.')[1]))));
    if (decodeData?.exp * 1000 >= Date.now()) {
        return JSON.parse(decodeURIComponent(escape(atob(token.split('.')[1]))));
    }
    return {
        user_id: '',
        email: '',
        name: '',
        picture: ''
    };
}