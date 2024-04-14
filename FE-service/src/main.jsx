import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { List, Organizer } from './components/index.js'
import { LoginProvider } from './context/LoginContext'
import { NotificationProvider } from './context/NotificationContext'
import './index.css'

const router = createBrowserRouter([
  { element: <App />, path: '/' },
  { element: <List />, path: '/summary' },
  { element: <Organizer />, path: '/organizer' },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <NotificationProvider>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  </NotificationProvider>
)
