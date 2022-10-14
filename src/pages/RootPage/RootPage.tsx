import { Box } from '@mui/material';
import { RootPageProps } from './interfaces/RootPage';
import styles from './RootPage.module.scss';
import { NavBar, InfoCite } from '../../layouts';

export const RootPage = ({ children }: RootPageProps) => {
    return (
        <>
            <Box className={styles.mainContainer}>
                <NavBar />
                <Box className={styles.contentLikeNavBar}></Box>
                <Box className={styles.infoBodyContainer}>
                    <InfoCite />
                    <Box className={styles.mainBody}>
                        {children}
                    </Box>
                </Box>
            </Box>
        </>
    )
}
