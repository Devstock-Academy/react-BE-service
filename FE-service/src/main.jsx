import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import { LoginProvider } from "./context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificationProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </NotificationProvider>
  </React.StrictMode>
);
