import { Button, Typography } from '@mui/material';
import { Box } from "@mui/system";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import styles from './HomePage.module.scss';
import { routes } from '../../router/MainRoute/data/index';
import { AnimatedIcon } from '../../components/AnimatedIcon/AnimatedIcon';
import { Link } from 'react-router-dom';

export const HomePage = () => {

    return (
        <>
            <Box className={styles.mainCardsContainer}>
                {
                    routes.map(({ path, element, icon, name }) => (
                        path != '/' &&
                            <Link 
                                id={`button-main-${path}`} 
                                className={styles.mainCard}
                                to={path}
                            >
                                <AnimatedIcon
                                    className={styles.buttonCard}
                                    key={path}
                                    target={`#button-main-${path}`}
                                    trigger='hover'
                                    src={icon || ''}
                                    colors={{
                                        primary: '#3C37FF',
                                        secondary: '#3C37FF'
                                    }}
                                />
                                <Typography className={styles.titleCard}>{name}</Typography>
                                <Typography className={styles.descriptionCard}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </Link>
                    ))
                }
            </Box>
        </>
    )
}
