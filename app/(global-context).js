"use client";

import { createContext, useState } from "react";

export const MyContext = createContext();

const GlobalContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [categorySelected, setCategorySelected] = useState("");

  return (
    <MyContext.Provider
      value={{ darkMode, setDarkMode, categorySelected, setCategorySelected }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default GlobalContext;
