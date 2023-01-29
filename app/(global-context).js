"use client";

import { createContext, useState } from "react";

export const MyContext = createContext();

const GlobalContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [categorySelected, setCategorySelected] = useState("");
  const [user, setUser] = useState(null);

  return (
    <MyContext.Provider
      value={{
        darkMode,
        setDarkMode,
        categorySelected,
        setCategorySelected,
        user,
        setUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default GlobalContext;
