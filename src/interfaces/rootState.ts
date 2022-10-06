export interface IRootState {
    login: ILoginState;
    pokemon: IPokemonState;
    loadingSpinner: ILoadingSpinnerState;
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

export interface IPokemonState {
    page: number;
    pokemons: IPokemon[];
}

export interface IPokemon {
    name: string;
    url: string;
}

export interface ILoadingSpinnerState {
    isLoading: boolean;
}