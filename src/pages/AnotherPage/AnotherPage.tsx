import { Button } from "@mui/material"
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { startLogout } from "../../store/slices/login/thunks";

export const AnotherPage = () => {
    const dispatch = useAppDispatch(); 
    
    return (
        <Button onClick={() => dispatch(startLogout())}>Cerrar sesión</Button>
    )
}
