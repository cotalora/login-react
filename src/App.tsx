import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainRoute, PrivateRoute, PublicRoute } from "./router";

export const App = () => {
    return (
        <Routes>
            <Route path="login/*" element={
                <PublicRoute>
                    <Routes>
                        <Route path="/*" element={<LoginPage />} />
                    </Routes>
                </PublicRoute>
            }
            />

            <Route path="/*" element={
                <PrivateRoute>
                    <MainRoute />
                </PrivateRoute>
            } />
        </Routes>
    )
}
