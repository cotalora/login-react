import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRouteProps } from './interfaces/publicRoute';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ children }: PublicRouteProps) => {
    const { login } = useSelector( (state: any) => state.login );
    
    return (!login.isLogged)
        ? children
        : <Navigate to="/other" />
}
