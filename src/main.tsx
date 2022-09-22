import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { PrivateRoute, PublicRoute, MainRoute } from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store }>
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
    </Provider>
  </React.StrictMode>
)
