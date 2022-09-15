import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { LoginPage } from './pages/LoginPage/LoginPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
)
