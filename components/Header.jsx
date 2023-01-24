"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { MyContext } from "../app/(global-context)";
import { BiSun, BiMoon } from "react-icons/bi";
import SearchEngine from "./SearchEngine";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(MyContext);
  const [categorySelected, setCategorySelected] = useState("");

  return (
    <div
      className={`${
        darkMode && "dark"
      } flex justify-center backdrop-blur-sm text-gray-800`}
    >
      <div className="w-full flex items-center justify-center dark:bg-slate-700 dark:text-slate-200">
        <div className="flex justify-between items-center w-full max-w-7xl p-3">
          <Link href="/" onClick={() => setCategorySelected("")}>
            <h1 className="text-3xl">
              Like{" "}
              <strong className="underline underline-offset-2 decoration-lime-300 font-semibold">
                HOME
              </strong>
              .
            </h1>
          </Link>
          <div>
            <SearchEngine setCategorySelected={setCategorySelected} />
          </div>
          <div className="flex items-center justify-center gap-20 text-2xl">
            <ul className="flex gap-4">
              <Link
                href="/rent"
                className={`nav-link ${
                  categorySelected == "rent" && "text-lime-300"
                }`}
                onClick={() => setCategorySelected("rent")}
              >
                Rent
              </Link>
              <Link
                href="/sale"
                className={`nav-link ${
                  categorySelected == "sale" && "text-lime-300"
                }`}
                onClick={() => setCategorySelected("sale")}
              >
                Sale
              </Link>
            </ul>
            <div className="flex items-center relative">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`${
                  darkMode ? "bg-slate-200" : "bg-slate-700"
                } p-2 rounded-full transform ease-in-out transition-all text-xl hover:text-2xl absolute right-0`}
              >
                {darkMode ? (
                  <BiSun className="text-slate-700" />
                ) : (
                  <BiMoon className="text-slate-200" />
                )}
              </button>
              {/* user login */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
