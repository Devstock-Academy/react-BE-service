import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LoginProvider } from './context/LoginContext'
import { NotificationProvider } from './context/NotificationContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NotificationProvider>
    <LoginProvider>
      <App />
    </LoginProvider>
  </NotificationProvider>
)
