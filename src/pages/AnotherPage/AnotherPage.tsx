import { Button } from "@mui/material"
import { useDispatch } from 'react-redux';
import { logout } from "../../store/slices/login";

export const AnotherPage = () => {
    const dispatch = useDispatch();
    
    return (
        <Button onClick={() => dispatch(logout())}>Cerrar sesión</Button>
    )
}
