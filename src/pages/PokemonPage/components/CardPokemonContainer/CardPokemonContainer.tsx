import { Box } from '@mui/material';
import { CardPokemon } from '../CardPokemon/CardPokemon';
import { IPokemon } from '../../../../interfaces';
import { CardPokemonContainerProps } from './interfaces/CardPokemonContainer';
import './CardPokemonContainer.scss';

export const CardPokemonContainer = ({ pokemons }: CardPokemonContainerProps) => {
    return (
        <>
            <Box className='card-container'>
                {
                    pokemons.map((pokemon: IPokemon) =>
                        <CardPokemon key={pokemon.name} {...pokemon} />
                    )
                }
            </Box>
        </>
    )
}
