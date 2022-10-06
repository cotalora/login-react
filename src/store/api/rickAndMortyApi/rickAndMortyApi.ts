import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { rickChatacterResultType, rickChatacterType } from './types/rickAndMortyApi';

export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMorty',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_RICK_URL }),
    endpoints: (builder) => ({
        getCharacters: builder.query<rickChatacterResultType, void>({
            query: () => 'character'
        }),
        getCharacterById: builder.query<rickChatacterType, number>({
            query: (id) => `character/${id}`
        }),
    })
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = rickAndMortyApi;