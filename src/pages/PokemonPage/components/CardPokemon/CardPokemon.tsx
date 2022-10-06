import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { IPokemon } from '../../../../interfaces';
import './CardPokemon.scss';

export const CardPokemon = ({ name, url }: IPokemon) => {
    return (
        <>
            <Card className='card-pokemon'>
                <CardMedia
                    className='card-pokemon-media'
                    component="img"
                    image={url}
                    alt={name}
                />
                <CardContent className='card-pokemon-content'>
                    <Typography variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
