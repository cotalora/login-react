import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./interfaces/privateRoute";

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isLogged = true;
    
    return (isLogged)
        ? children
        : <Navigate to="/login" />
}
