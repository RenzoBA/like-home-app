"use client";

import { useContext } from "react";
import { MyContext } from "./(global-context)";
import "/styles/globals.css";

const page = () => {
  const { darkMode } = useContext(MyContext);

  return (
    <div
      className={`${
        darkMode && "dark"
      } h-[88.6vh] flex justify-center text-gray-800`}
    >
      <div className="w-full flex flex-col items-center justify-center dark:bg-slate-700 dark:text-slate-200">
        <p className="text-red-500">hola</p>
      </div>
    </div>
  );
};

export default page;
