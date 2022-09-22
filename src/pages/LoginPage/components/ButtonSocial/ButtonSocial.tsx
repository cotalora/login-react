import { Box, Button } from '@mui/material'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { startGoogleLogin, startFacebookLogin } from '../../../../store/slices/login/thunks'
import { Social } from '../../interfaces/social'
import './ButtonSocial.scss'

export const ButtonSocial = () => {
    const dispatch = useAppDispatch(); 

    const socials: Social[] = [
        {
            image: 'src/assets/img/google-icon.svg',
            text: 'Inicia sesión con Google',
            action: () => dispatch(startGoogleLogin())
        },
        {
            image: 'src/assets/img/facebook-icon.svg',
            text: 'Inicia sesión con Facebook',
            action: () => dispatch(startFacebookLogin())
        }
    ]

    return (
        <Box className="form-buttons-social">
            {
                socials.map((social) =>
                    <Button
                        key={social.text}
                        startIcon={
                            <img
                                className='form-button-icon'
                                src={ social.image }
                            />
                        }
                        className="form-button-social"
                        onClick={social.action}
                    >
                        { social.text }
                    </Button>
                )
            }
        </Box>
    )
}
