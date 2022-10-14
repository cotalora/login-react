import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getPokemons } from '../../store/slices/pokemon/thunks';
import { useSelector } from 'react-redux';
import { IRootState } from '../../interfaces';
import { CardPokemonContainer } from './components/CardPokemonContainer/CardPokemonContainer';
import { Pagination } from './components/Pagination/Pagination';
import { Box } from '@mui/material';
import './PokemonPage.scss';

export const PokemonPage = () => {

    const dispatch = useAppDispatch();
    const { pokemons, page } = useSelector((state: IRootState) => state.pokemon);

    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    return (
        <>
            <Box className='icon-container'>
                <img src="../../src/assets/img/logo-pokemon.svg" alt="pokemon logo" />
                <hr />
            </Box>

            <CardPokemonContainer pokemons={pokemons} />
            <Pagination 
                prevDisabled={page <= 0}
                nextAction={() => dispatch(getPokemons(page + 1))} 
                prevAction={() => dispatch(getPokemons(page - 1))} 
            />
        </>
    )
}

export default PokemonPage;