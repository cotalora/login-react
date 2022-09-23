export interface IRootState {
    login: ILoginState;
}

export interface ILoginState {
    accessToken: string;
    displayName: string;
    email: string;
    errorMessage: string;
    photoURL: string;
    status: string;
    uid: string;
}