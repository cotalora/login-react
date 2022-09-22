import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRouteProps } from './interfaces/publicRoute';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ children }: PublicRouteProps) => {
    const { login } = useSelector( (state: any) => state );
    
    return (login.status === 'not-authenticated' || login.status === 'authenticating')
        ? children
        : <Navigate to="/other" />
}
