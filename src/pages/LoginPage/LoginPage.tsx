import { Box, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import './LoginPage.scss';

export const LoginPage = () => {
    return (
        <>
            <Box className='login-main-container'>
                <Box className="login-container">
                    <Box className="info-container">
                        <Box className="data-text-container">
                            <Typography
                                variant="h1"
                                className="title-data-text"
                            >
                                KURISU WEB
                            </Typography>
                            <Box className="subtitle-paragraph-data-text-container">
                                <Typography
                                    variant="h2"
                                    className="subtitle-data-text"
                                >
                                    Realiza tus proyectos con nosotros.
                                </Typography>
                                <Typography
                                    paragraph={true}
                                    className="paragraph-data-text"
                                >
                                    Descubre el mundo de la mejor comunidad de freelancers
                                    y empresarios.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="carousel-container">
                            <Carousel
                                autoPlay={true}
                                navButtonsAlwaysInvisible={true}
                                interval={3000}
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
                                <Box className="info-item">
                                    ITEM 1
                                </Box>
                                <Box className="info-item">
                                    ITEM 2
                                </Box>
                            </Carousel>
                        </Box>
                    </Box>
                    <Box className="form-container">
                        <h1>FORMULARIO</h1>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
