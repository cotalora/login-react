import MuiAppBar from '@mui/material/AppBar';
import { IconButton, Box, Typography, Tooltip, Avatar, Divider, Toolbar, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AnimatedIcon } from '../../../../components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppBarProps, NavBarProps } from './interfaces';
import { styled } from '@mui/material/styles';
import { DrawerWidth } from '../../../../enums/drawerWidth.enum';
import { IRootState } from '../../../../interfaces';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { startLogout } from '../../../../store/slices/login/thunks';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: DrawerWidth.width,
        width: `calc(100% - ${DrawerWidth.width}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const NavBar = ({ open, handlerOpen }: NavBarProps) => {

    const [openState, setOpenState] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const dispatch = useAppDispatch();
    const { displayName, photoURL } = useSelector((state: IRootState) => state.login);

    const handleClickAccount = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        setOpenState(open);
    }, [open]);

    return (
        <>
            <AppBar position="fixed" open={openState}>
                <Toolbar className='topbar'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handlerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(openState && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box className='title-avatar-container'>
                        <Typography variant="h6" noWrap component="div">
                            KURISU WEB
                        </Typography>
                        <Tooltip title="Cuenta de usuario">
                            <Box id='count-container' className='count-container' onClick={handleClickAccount}>
                                <IconButton>
                                    {
                                        photoURL ?
                                            <Avatar className='avatar-img' alt={displayName} src={photoURL} /> :
                                            <AnimatedIcon
                                                target='#count-container'
                                                trigger='hover'
                                                src='../../src/assets/icons/avatar-icon.json'
                                                colors={{ primary: '#ffffff', secondary: '#ffffff' }}
                                            />
                                    }
                                </IconButton>
                                {displayName}
                                <KeyboardArrowDownIcon />
                            </Box>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            onClick={handleClose}
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
                            <MenuItem>
                                Profile
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={() => { dispatch(startLogout()) }}>
                                <AnimatedIcon
                                    trigger='hover'
                                    src='../../src/assets/icons/logout-icon.json'
                                    colors={{ primary: '#3C37FF', secondary: '#3C37FF' }}
                                />
                                Cerrar sesión
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
