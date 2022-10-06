import React from 'react'
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getNextPokemons, getPreviousPokemons } from '../../store/slices/pokemon/thunks';
import { useSelector } from 'react-redux';
import { IPokemon, IRootState } from '../../interfaces';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './PokemonPage.scss';

export const PokemonPage = () => {

    const dispatch = useAppDispatch();
    const { pokemons, page } = useSelector((state: IRootState) => state.pokemon);

    useEffect(() => {
        dispatch(getNextPokemons());
    }, [])

    return (
        <>
            <h1>Pokemon App</h1>
            <hr />

            <Box className='card-container'>
                {
                    pokemons.map(({ name, url }: IPokemon) =>
                        <Card key={name} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={url}
                                alt={name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                }
            </Box>

            <Box className='buttons-page-container'>
                <button disabled={page <= 0} onClick={() => dispatch(getPreviousPokemons(page - 1))}>
                    Previus
                </button>
                <button onClick={() => dispatch(getNextPokemons(page + 1))}>
                    Next
                </button>
            </Box>
        </>
    )
}
