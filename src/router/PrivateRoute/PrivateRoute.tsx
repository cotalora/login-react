import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./interfaces/privateRoute";
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { login } = useSelector( (state: any) => state );
    
    return (login.status === 'authenticated')
        ? children
        : <Navigate to="/login" />
}
