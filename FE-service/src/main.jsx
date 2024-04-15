import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import {
  List,
  Organizer,
  Home,
  ListElementDetails,
} from './components/index.js'
import { LoginProvider } from './context/LoginContext'
import { NotificationProvider } from './context/NotificationContext'
import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      { element: <Home />, path: '/' },
      {
        element: <List />,
        path: '/summary',
      },
      { element: <ListElementDetails />, path: '/summary/:id' },
      { element: <Organizer />, path: '/organizer' },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <NotificationProvider>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  </NotificationProvider>
)
