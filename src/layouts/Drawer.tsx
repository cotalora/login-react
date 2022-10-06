import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AppBarProps, DrawerProps } from './interfaces';
import {
    Box, Divider, Toolbar, List, CssBaseline, Typography, IconButton, ListItem,
    ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Avatar
} from '@mui/material';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import lottie from 'lottie-web';
import { defineLordIconElement } from "lord-icon-element";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Drawer.scss'
import { useAppDispatch } from '../hooks/useAppDispatch';
import { startLogout } from '../store/slices/login/thunks';
import { useSelector } from 'react-redux';
import { IRootState } from '../interfaces';

const drawerWidth = 240;
defineLordIconElement(lottie.loadAnimation);

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const drawerItems = [
    {
        id: 'item-home',
        name: 'Inicio',
        icon: {
            target: '#item-home',
            src: '../../src/assets/home-icon.json',
            colors: 'primary:#3C37FF,secondary:#3C37FF',
            colorsWhite: 'primary:#FFFFFF,secondary:#FFFFFF',
        },
        to: ''
    },
    {
        id: 'item-chat',
        name: 'Chat Room',
        icon: {
            target: '#item-chat',
            src: '../../src/assets/chating-icon.json',
            colors: 'primary:#3C37FF,secondary:#3C37FF',
            colorsWhite: 'primary:#FFFFFF,secondary:#FFFFFF',
        },
        to: 'chat'
    },
    {
        id: 'item-pokemon',
        name: 'Pokemon List',
        icon: {
            target: '#item-pokemon',
            src: '../../src/assets/bug-icon.json',
            colors: 'primary:#3C37FF,secondary:#3C37FF',
            colorsWhite: 'primary:#FFFFFF,secondary:#FFFFFF',
        },
        to: 'pokemon'
    }
]

export const DrawerLayout = ({ children }: DrawerProps) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const { displayName, photoURL } = useSelector((state: IRootState) => state.login)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClickAccount = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar className='topbar'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
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
                                        <lord-icon
                                            target="#count-container"
                                            trigger="hover"
                                            src="../../src/assets/avatar-icon.json"
                                            colors="primary:#ffffff,secondary:#ffffff"
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
                                <lord-icon
                                    trigger="hover"
                                    src="../../src/assets/logout-icon.json"
                                    colors="primary:#3C37FF,secondary:#3C37FF"
                                />
                                Cerrar sesión
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {
                        drawerItems.map(({ id, name, icon, to }, index) => (
                            <NavLink key={name} 
                                className={({isActive}) => `anchor-link ${ isActive ? 'active' : '' }`} 
                                to={to} end>
                                <ListItem className='item-list'>
                                    <ListItemButton id={id} className='item-list-button'
                                        sx={{
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon className='item-list-icon'
                                            sx={{
                                                mr: open ? 3 : 'auto',
                                            }}
                                        >
                                            <lord-icon target={icon.target} trigger="hover" src={icon.src} colors={`/${to}` == pathname ? icon.colorsWhite : icon.colors} />
                                        </ListItemIcon>
                                        <ListItemText className='list-item-text'
                                            primary={name}
                                            sx={{ opacity: open ? 1 : 0 }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                                {index === 0 && <Divider />}
                            </NavLink>
                        ))
                    }
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}
