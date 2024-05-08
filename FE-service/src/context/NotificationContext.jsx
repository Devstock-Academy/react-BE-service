import { createContext, useState, useCallback } from "react";

export const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const [notificationVariant, setNotificationVariant] = useState("primary");

  const handleNotification = useCallback(
    (e, variant = "primary") => {
      console.log("e", variant);
      setNotificationVariant(variant);
      setNotification(e);
      setTimeout(() => setNotification(null), 3000);
    },
    [setNotification, setNotificationVariant]
  );

  return (
    <NotificationContext.Provider
      value={{
        notification,
        setNotification,
        notificationVariant,
        setNotificationVariant,
        handleNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
