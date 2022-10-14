import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { DrawerProps } from './interfaces';
import {
    Box, Divider, List, CssBaseline, IconButton, ListItem,
    ListItemButton, ListItemIcon, ListItemText
} from '@mui/material';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Drawer.scss'
import { AnimatedIcon } from '../../components';
import { NavBar } from '../NavBar/NavBar';
import { DrawerWidth } from '../../enums';

const openedMixin = (theme: Theme): CSSObject => ({
    width: DrawerWidth.width,
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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: DrawerWidth.width,
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
            src: '../../src/assets/icons/home-icon.json',
            colors: {
                primary: '#3C37FF',
                secondary: '#3C37FF'
            },
            colorsWhite: {
                primary: '#FFFFFF',
                secondary: '#FFFFFF'
            }
        },
        to: ''
    },
    {
        id: 'item-chat',
        name: 'Chat Room',
        icon: {
            target: '#item-chat',
            src: '../../src/assets/icons/chating-icon.json',
            colors: {
                primary: '#3C37FF',
                secondary: '#3C37FF'
            },
            colorsWhite: {
                primary: '#FFFFFF',
                secondary: '#FFFFFF'
            }
        },
        to: 'chat'
    },
    {
        id: 'item-pokemon',
        name: 'Pokemon List',
        icon: {
            target: '#item-pokemon',
            src: '../../src/assets/icons/bug-icon.json',
            colors: {
                primary: '#3C37FF',
                secondary: '#3C37FF'
            },
            colorsWhite: {
                primary: '#FFFFFF',
                secondary: '#FFFFFF'
            }
        },
        to: 'pokemon'
    },
    {
        id: 'item-rickrtk',
        name: 'Rick RTK List',
        icon: {
            target: '#item-rickrtk',
            src: '../../src/assets/icons/pizza-icon.json',
            colors: {
                primary: '#3C37FF',
                secondary: '#3C37FF'
            },
            colorsWhite: {
                primary: '#FFFFFF',
                secondary: '#FFFFFF'
            }
        },
        to: 'rickrtk'
    }
]

export const DrawerLayout = ({ children }: DrawerProps) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavBar open={open} handlerOpen={handleDrawerOpen} />
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
                                className={({ isActive }) => `anchor-link ${isActive ? 'active' : ''}`}
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
                                            <AnimatedIcon
                                                target={icon.target}
                                                trigger={'hover'}
                                                src={icon.src}
                                                colors={
                                                    `/${to}` == pathname ? 
                                                    { primary: icon.colorsWhite.primary, secondary: icon.colorsWhite.secondary } :
                                                    { primary: icon.colors.primary, secondary: icon.colors.secondary }
                                                }
                                            />
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
