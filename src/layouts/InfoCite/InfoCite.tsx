import { Box, IconButton, Typography, Avatar, AvatarGroup, Button, Fade, Grow } from '@mui/material';
import styles from './InfoCite.module.scss';
import { AnimatedIcon } from '../../components/AnimatedIcon/AnimatedIcon';
import { useState } from 'react';

export const InfoCite = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            {
                show &&
                <Grow in={true}>
                    <Box className={styles.semiBody}>
                        <IconButton className={styles.buttonClose} onClick={() => setShow(false)}>
                            <AnimatedIcon
                                trigger={'hover'}
                                src={'../../../src/assets/icons/cross-icon.json'}
                                colors={{
                                    primary: '#3C37FF',
                                    secondary: '#3C37FF'
                                }}
                            />
                        </IconButton>

                        <Box className={styles.textContainer}>
                            <Box className={styles.mainText}>
                                <Typography>Comienza con nosotros</Typography>
                                <img src="../../../src/assets/img/app-icon.svg" alt="" />
                            </Box>
                            <Box className={styles.subText}>
                                <Typography>Conversación en <b>medios sociales</b></Typography>
                            </Box>
                            <Box className={styles.socialMedia}>
                                <Typography>Visitanos en nuestras redes sociales: </Typography>
                                <AvatarGroup className={styles.socialButtonContainer} max={4}>
                                    <Button className={styles.socialButton}>
                                        <Avatar className={styles.socialAvatar} alt="Remy Sharp" src="../../../src/assets/img/facebook-rounded-icon.svg" />
                                    </Button>
                                    <Button className={styles.socialButton}>
                                        <Avatar className={styles.socialAvatar} alt="Remy Sharp" src="../../../src/assets/img/instagram-icon.svg" />
                                    </Button>
                                    <Button className={styles.socialButton}>
                                        <Avatar className={styles.socialAvatar} alt="Remy Sharp" src="../../../src/assets/img/github-icon.svg" />
                                    </Button>
                                    <Button className={styles.socialButton}>
                                        <Avatar className={styles.socialAvatar} alt="Remy Sharp" src="../../../src/assets/img/linkedin-rounded-icon.svg" />
                                    </Button>
                                </AvatarGroup>
                            </Box>
                            <img className={styles.imgPeople} src="../../../src/assets/img/people.png" alt="People icon" />
                        </Box>
                    </Box>
                </Grow>
            }
        </>
    )
}
