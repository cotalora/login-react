import { Box, Typography, Divider, Grow } from '@mui/material';
import { ButtonSocial, CarouselCards, Form } from './components';
import './LoginPage.scss';

export const LoginPage = () => {
    return (
        <>
            <Grow in={ true }>
                <Box className='login-main-container'>
                    <Box className="login-container">
                        <Box className="login-title-container">
                            <Typography variant="h1" className="login-title">
                                KURISU WEB
                            </Typography>
                            <Divider />
                        </Box>
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
                                        paragraph={ true }
                                        className="paragraph-data-text"
                                    >
                                        Descubre el mundo de la mejor comunidad de freelancers
                                        y empresarios.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <CarouselCards />
                            </Box>
                        </Box>
                        <Box className="form-container">
                            <Typography
                                variant='h2'
                                className="form-title"
                            >
                                Inicio de Sesión
                            </Typography>
                            <Typography
                                className="form-text"
                                variant='body2'
                            >
                                Ingresa tus credecciales para acceder a tu cuenta
                            </Typography>
                            <Box>
                                <ButtonSocial />
                                <Divider className='form-divider'>o</Divider>
                                <Form />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grow>
        </>
    )
}
