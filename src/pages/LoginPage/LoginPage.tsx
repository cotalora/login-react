import { Box, Typography, Avatar, Button, Divider, TextField, InputLabel, Checkbox, FormControlLabel } from '@mui/material';
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
                                interval={5000}
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
                                    <Typography
                                        paragraph={true}
                                        className="info-item-text"
                                    >
                                        ¡Simplemente increible! Estoy realmete sarisfecho
                                        con mi proyecto y mi negocio. Esto es absolutamente
                                        fantastico
                                    </Typography>
                                    <Box className="info-item-person-container">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="src/assets/img/1.jpg"
                                            variant="rounded"
                                        />
                                        <Box className="info-item-person-text-container">
                                            <Typography
                                                variant='body2'
                                                className='info-item-person-name'
                                            >
                                                Timson K.
                                            </Typography>
                                            <Typography
                                                variant='body2'
                                                className='info-item-person-profession'
                                            >
                                                Developer Freelanzer
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="info-item">
                                    <Typography
                                        paragraph={true}
                                        className="info-item-text"
                                    >
                                        ¡Simplemente increible! Estoy realmete sarisfecho
                                        con mi proyecto y mi negocio. Esto es absolutamente
                                        fantastico
                                    </Typography>
                                    <Box className="info-item-person-container">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="src/assets/img/2.jpg"
                                            variant="rounded"
                                        />
                                        <Box className="info-item-person-text-container">
                                            <Typography
                                                variant='body2'
                                                className='info-item-person-name'
                                            >
                                                Timson K.
                                            </Typography>
                                            <Typography
                                                variant='body2'
                                                className='info-item-person-profession'
                                            >
                                                Developer Freelanzer
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Carousel>
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
                        <form>
                            <Box className="form-buttons-social">
                                <Button
                                    startIcon={
                                        <img
                                            className='form-button-icon'
                                            src='src/assets/img/google-icon.svg'
                                        />
                                    }
                                    className="form-button-social"
                                >
                                    Inicia sesión con Google
                                </Button>
                                <Button
                                    startIcon={
                                        <img
                                            className='form-button-icon'
                                            src='src/assets/img/facebook-icon.svg'
                                        />
                                    }
                                    className="form-button-social"
                                >
                                    Inicia sesión con Facebook
                                </Button>
                            </Box>
                            <Divider className='form-divider'>o</Divider>
                            <Box className="form-control">
                                <InputLabel
                                    htmlFor="email"
                                    className="form-control-label"
                                >
                                    Correo electrónico
                                </InputLabel>
                                <TextField
                                    id="email"
                                    variant="outlined"
                                    type="email"
                                    className="form-control-input"
                                />
                            </Box>
                            <Box className="form-control">
                                <InputLabel
                                    htmlFor="password"
                                    className="form-control-label"
                                >
                                    Contraseña
                                </InputLabel>
                                <TextField
                                    id="password"
                                    variant="outlined"
                                    type="password"
                                    className="form-control-input"
                                />
                            </Box>
                            <Box className="form-control">
                                <FormControlLabel
                                    className='form-control-checkbox'
                                    control={
                                        <Checkbox
                                            disableRipple={true}
                                            className='checkbox'
                                            sx={{
                                                '&.Mui-checked': {
                                                    color: '#3C37FF',
                                                },
                                            }}
                                        />}
                                    label="Recordar información"
                                />
                            </Box>
                            <Button
                                type='submit'
                                className="button-principal"
                            >
                                Iniciar sesión
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
