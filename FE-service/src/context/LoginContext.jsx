import { createContext, useState } from "react";

export const LoginContext = createContext({ aa: "aa" });

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, aaa: "aaa" }}>
      {children}
    </LoginContext.Provider>
  );
};
