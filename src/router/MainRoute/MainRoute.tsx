import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import { Grow } from "@mui/material";
import { DrawerLayout } from '../../layouts/Drawer/Drawer';
import { IRootState } from '../../interfaces';
import { useSelector } from 'react-redux';
import { LoadingSpinner } from '../../components';
import { routes } from './data/index';
import './MainRoute.scss'

export const MainRoute = () => {

    const { isLoading } = useSelector((state: IRootState) => state.loadingSpinner);

    return (
        <>
            <Grow className='grow-animation' in={true}>
                <div>
                    <LoadingSpinner isLoading={isLoading} />
                    <DrawerLayout>
                        <div className="container" aria-label='main-routes-container'>
                            <Routes>
                                {
                                    routes.map(({ path, element }) => (
                                        <Route key={path} path={path} element={React.createElement(element)}/>
                                    ))
                                }
                                <Route path="/*" element={<Navigate to="/" />} />
                            </Routes>
                        </div>
                    </DrawerLayout>
                </div>
            </Grow>
        </>
    )
}
