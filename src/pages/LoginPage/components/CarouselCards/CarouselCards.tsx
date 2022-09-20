import { Avatar, Box, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { Opinion } from '../../interfaces/opinion'
import './CarouselCards.scss'

const opinios: Opinion[] = [
    {
        opinion: '¡Simplemente increible! Estoy realmete sarisfecho con mi proyecto y mi negocio. Esto es absolutamente fantastico',
        image: 'src/assets/img/1.jpg',
        name: 'Timson K.',
        job: 'Developer Freelanzer',
    },
    {
        opinion: '¡Simplemente increible! Estoy realmete sarisfecho con mi proyecto y mi negocio. Esto es absolutamente fantastico',
        image: 'src/assets/img/2.jpg',
        name: 'Timson K.',
        job: 'Developer Freelanzer',
    }
]

export const CarouselCards = () => {
    return (
        <>
            <Carousel
                autoPlay={ true }
                navButtonsAlwaysInvisible={ true }
                interval={ 5000 }
                indicatorContainerProps={{
                    className: 'carousel-indicator-container'
                }}
                indicatorIconButtonProps={{
                    className: 'carousel-indicators'
                }}
                activeIndicatorIconButtonProps={{
                    className: 'carousel-indicators-active'
                }}
            >
                {
                    opinios.map((opinion) =>
                        <Box key={opinion.name} className="info-item">
                            <Typography
                                paragraph={ true }
                                className="info-item-text"
                            >
                                { opinion.opinion }
                            </Typography>
                            <Box className="info-item-person-container">
                                <Avatar
                                    alt={ opinion.name }
                                    src={ opinion.image }
                                    variant="rounded"
                                />
                                <Box className="info-item-person-text-container">
                                    <Typography
                                        variant='body2'
                                        className='info-item-person-name'
                                    >
                                        { opinion.name }
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        className='info-item-person-profession'
                                    >
                                        { opinion.job }
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    )
                }
            </Carousel>
        </>
    )
}
