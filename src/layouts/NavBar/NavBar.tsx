import { IconButton, Box, Typography, Avatar, Menu, MenuItem, Badge, TextField, Button, useMediaQuery } from '@mui/material';
import { AnimatedIcon } from '../../components';
import { IRootState } from '../../interfaces';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { startLogout } from '../../store/slices/login/thunks';
import { useSelector } from 'react-redux';
import { useState, MouseEvent } from 'react';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    const dispatch = useAppDispatch();
    const { displayName, photoURL } = useSelector((state: IRootState) => state.login);

    const width530 = useMediaQuery('(max-width: 530px)');
    const width470 = useMediaQuery('(max-width: 470px)');

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);

    const handleClickMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box className={styles.navBar}>
                <Box className={styles.navBarIconsContainer}>
                    <Box className={styles.iconsContainer}>
                        <Link to={'/'} className={styles.appIcon}>
                            <img src="../../../src/assets/img/app-icon.svg" alt="" />
                        </Link>
                    </Box>
                    {
                        !width470 &&
                        <Box className={styles.searchContainer}>
                            <Box className={`${styles.inputSearchContainer} form-control`}>
                                <TextField
                                    id="search-field"
                                    error={false}
                                    variant="outlined"
                                    type="text"
                                    className="form-control-input"
                                    placeholder="Buscar..."
                                    inputProps={{
                                        'data-testid': 'search-field'
                                    }}
                                />
                            </Box>
                            <IconButton className={styles.iconSearch}>
                                <AnimatedIcon
                                    target='#search-field'
                                    trigger={'hover'}
                                    src={'../../../src/assets/icons/search-icon.json'}
                                    colors={{
                                        primary: '#3C37FF',
                                        secondary: '#3C37FF'
                                    }}
                                />
                            </IconButton>
                        </Box>
                    }
                    <Box className={styles.profileIconContainer}>
                        <IconButton className={styles.iconBell}>
                            <AnimatedIcon
                                trigger={'hover'}
                                src={'../../../src/assets/icons/bell-icon.json'}
                                colors={{
                                    primary: '#3C37FF',
                                    secondary: '#3C37FF'
                                }}
                            />
                        </IconButton>
                        {
                            !width530 &&
                            <IconButton className={styles.iconSettings}>
                                <AnimatedIcon
                                    trigger={'hover'}
                                    src={'../../../src/assets/icons/settings-icon.json'}
                                    colors={{
                                        primary: '#3C37FF',
                                        secondary: '#3C37FF'
                                    }}
                                />
                            </IconButton>
                        }
                        <Button className={styles.buttonUser} onClick={handleClickMenu}>
                            <Badge
                                className={styles.badgeContainer}
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                badgeContent={
                                    <div className={styles.badgeContent}>
                                        <img src="../../../src/assets/img/arrow-down-icon.svg" alt="" />
                                    </div>
                                }
                            >
                                <Avatar className={styles.avatarIcon} alt={displayName} src={photoURL} />
                            </Badge>
                        </Button>
                        <Menu
                            id="account-menu"
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleCloseMenu}
                            onClick={handleCloseMenu}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            {
                                width530 &&
                                <MenuItem className={styles.menuItems}>
                                    Configuración
                                </MenuItem>
                            }
                            <MenuItem className={styles.menuItems} onClick={() => dispatch(startLogout())}>
                                Cerrar Sesión
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
                
                {
                        width470 &&
                        <Box className={styles.searchContainer}>
                            <Box className={`${styles.inputSearchContainer} form-control`}>
                                <TextField
                                    id="search-field"
                                    error={false}
                                    variant="outlined"
                                    type="text"
                                    className="form-control-input"
                                    placeholder="Buscar..."
                                    inputProps={{
                                        'data-testid': 'search-field'
                                    }}
                                />
                            </Box>
                            <IconButton className={styles.iconSearch}>
                                <AnimatedIcon
                                    target='#search-field'
                                    trigger={'hover'}
                                    src={'../../../src/assets/icons/search-icon.json'}
                                    colors={{
                                        primary: '#3C37FF',
                                        secondary: '#3C37FF'
                                    }}
                                />
                            </IconButton>
                        </Box>
                    }
            </Box>
        </>
    )
}
