import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRouteProps } from './interfaces/publicRoute';
import { useSelector } from 'react-redux';
import { IRootState } from '../../interfaces/rootState';

export const PublicRoute = ({ children }: PublicRouteProps) => {
    const { status } = useSelector( (state: IRootState) => state.login );
    
    return (status === 'not-authenticated' || status === 'authenticating')
        ? children
        : <Navigate to="/" />
}
