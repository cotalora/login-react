import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRouteProps } from './interfaces/publicRoute';

export const PublicRoute = ({ children }: PublicRouteProps) => {
    const isLogged = true;
    
    return (!isLogged)
        ? children
        : <Navigate to="/other" />
}
