import { Navigate, Route, Routes } from 'react-router-dom'
import { Grow } from "@mui/material";
import { AnotherPage } from '../../pages/AnotherPage/AnotherPage'

export const MainRoute = () => {
    return (
        <>
            <Grow in={true}>
                <div>
                    <div>NAVBAR</div>

                    <div className="container">
                        <Routes>
                            <Route path="other" element={<AnotherPage />} />

                            <Route path="/*" element={<Navigate to="/other" />} />
                        </Routes>
                    </div>
                </div>
            </Grow>
        </>
    )
}
