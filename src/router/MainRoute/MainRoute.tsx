import { Navigate, Route, Routes } from 'react-router-dom'
import { AnotherPage } from '../../pages/AnotherPage/AnotherPage'

export const MainRoute = () => {
    return (
        <>
            <div>NAVBAR</div>

            <div className="container">
                <Routes>
                    <Route path="other" element={<AnotherPage />} />

                    <Route path="/" element={<Navigate to="/other" />} />
                </Routes>
            </div>
        </>
    )
}
