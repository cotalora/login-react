import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { PrivateRoute, PublicRoute, MainRoute } from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </React.StrictMode>
)
