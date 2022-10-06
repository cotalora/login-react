import { Navigate, Route, Routes } from 'react-router-dom'
import { Box, CircularProgress, Fade, Grow } from "@mui/material";
import { DrawerLayout } from '../../layouts/Drawer';
import { ChatPage, HomePage, PokemonPage } from '../../pages';
import { IRootState } from '../../interfaces';
import { useSelector } from 'react-redux';

export const MainRoute = () => {

    const { isLoading } = useSelector((state: IRootState) => state.loadingSpinner);

    return (
        <>
            <Grow in={true}>
                <div>
                    {
                        isLoading &&
                        <Fade in={true}>
                            <Box className='main-spinner'><CircularProgress /></Box>
                        </Fade>
                    }
                    <DrawerLayout>
                        <div className="container" aria-label='main-routes-container'>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="chat" element={<ChatPage />} />
                                <Route path="pokemon" element={<PokemonPage />} />

                                <Route path="/*" element={<Navigate to="/" />} />
                            </Routes>
                        </div>
                    </DrawerLayout>
                </div>
            </Grow>
        </>
    )
}
