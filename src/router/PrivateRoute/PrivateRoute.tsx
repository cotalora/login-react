import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./interfaces/privateRoute";
import { useSelector } from 'react-redux';
import { IRootState } from "../../interfaces/rootState";

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { status } = useSelector( (state: IRootState) => state.login );
    
    return (status === 'authenticated')
        ? children
        : <Navigate to="/login" />
}
