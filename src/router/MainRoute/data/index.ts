import { lazy } from 'react';
import { HomePage } from '../../../pages';

const LazyChat = lazy(() => import('../../../pages/ChatPage/ChatPage'));
const LazyPokemon = lazy(() => import('../../../pages/PokemonPage/PokemonPage'));
const LazyRick = lazy(() => import('../../../pages/RickRTKPage/RickRTKPage'));

export const routes = [
    {
        path: '/',
        icon: null,
        name: 'Home',
        element: HomePage
    },
    {
        path: 'chat',
        icon: '../../../src/assets/icons/chat-color-icon.json',
        name: 'Chat Kurisu',
        element: LazyChat
    },
    {
        path: 'pokemon',
        icon: '../../../src/assets/icons/pokemon-color-icon.json',
        name: 'Pokemon List Redux',
        element: LazyPokemon
    },
    {
        path: 'rickrtk',
        icon: '../../../src/assets/icons/rick-color-icon.json',
        name: 'Rick and Morty RTK Qurery',
        element: LazyRick
    },
]