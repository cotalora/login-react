import { Box, Button } from '@mui/material'
import { Social } from '../../interfaces/social'
import './ButtonSocial.scss'

const socials: Social[] = [
    {
        image: 'src/assets/img/google-icon.svg',
        text: 'Inicia sesión con Google'
    },
    {
        image: 'src/assets/img/facebook-icon.svg',
        text: 'Inicia sesión con Facebook'
    }
]

export const ButtonSocial = () => {
    return (
        <Box className="form-buttons-social">
            {
                socials.map((social) =>
                    <Button
                        startIcon={
                            <img
                                className='form-button-icon'
                                src={ social.image }
                            />
                        }
                        className="form-button-social"
                    >
                        { social.text }
                    </Button>
                )
            }
        </Box>
    )
}
