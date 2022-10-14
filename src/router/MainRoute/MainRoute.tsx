import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import { IRootState } from '../../interfaces';
import { useSelector } from 'react-redux';
import { LoadingSpinner } from '../../components';
import { routes } from './data/index';
import './MainRoute.scss';
import { RootPage } from '../../pages/RootPage/RootPage';
import { Fade, Skeleton, Box } from '@mui/material';

export const MainRoute = () => {

    const { isLoading } = useSelector((state: IRootState) => state.loadingSpinner);

    return (
        <>
            <Fade className='grow-animation' in={true}>
                <div>
                    <LoadingSpinner isLoading={isLoading} />
                    <RootPage>
                        <Suspense fallback={<LoadingSpinner isLoading={true} />}>
                            <Routes>
                                {
                                    routes.map(({ path, element }) => (
                                        <Route key={path} path={path} element={React.createElement(element)} />
                                    ))
                                }
                                <Route path="/*" element={<Navigate to="/" />} />
                            </Routes>
                        </Suspense>
                    </RootPage>
                </div>
            </Fade>
        </>
    )
}