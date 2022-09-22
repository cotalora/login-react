import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./interfaces/privateRoute";
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { login } = useSelector( (state: any) => state.login );
    
    return (login.isLogged)
        ? children
        : <Navigate to="/login" />
}
