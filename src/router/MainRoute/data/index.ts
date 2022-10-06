import { Navigate } from 'react-router-dom';
import { ChatPage, HomePage, RickRTKPage } from '../../../pages';
import { PokemonPage } from '../../../pages/PokemonPage/PokemonPage';

export const routes = [
    {
        path: '/',
        element: HomePage
    },
    {
        path: 'chat',
        element: ChatPage
    },
    {
        path: 'pokemon',
        element: PokemonPage
    },
    {
        path: 'rickrtk',
        element: RickRTKPage
    },
]