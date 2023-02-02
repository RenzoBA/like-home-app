"use client";

import { useContext } from "react";
import { MyContext } from "app/(global-context)";

const Footer = () => {
  const { darkMode } = useContext(MyContext);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="text-center font-light text-white bg-black border-t border-dark dark:border-white">
        <p>© 2023 Like Home, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
