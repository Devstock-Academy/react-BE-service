import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LoginProvider } from './context/LoginContext'
import { NotificationProvider } from './context/NotificationContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </NotificationProvider>
  </React.StrictMode>
)
