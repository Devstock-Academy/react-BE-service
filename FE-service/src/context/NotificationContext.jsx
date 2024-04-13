import { createContext, useState } from 'react'

export const NotificationContext = createContext(null)

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null)
  const [notificationVariant, setNotificationVariant] = useState('primary')

  return (
    <NotificationContext.Provider
      value={{
        notification,
        setNotification,
        notificationVariant,
        setNotificationVariant,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}
