// src/context/Context.js
import React, { createContext, useState } from "react";

// Create the UserContext
export const UserContext = createContext();

// Create the UserProvider component
export const UserProvider = ({ children }) => {
  const [userSession, setUserSession] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch (error) {
      console.error("Error parsing user session from localStorage:", error);
      return null;
    }
  });

  const login = (userData) => {
    setUserSession(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUserSession(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ userSession, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
