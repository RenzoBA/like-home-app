"use client";

import { createContext, useState } from "react";

export const MyContext = createContext();

const GlobalContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <MyContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </MyContext.Provider>
  );
};

export default GlobalContext;
