"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { MyContext } from "../app/(global-context)";
import { BiHomeSmile, BiSun, BiMoon } from "react-icons/bi";
import SearchEngine from "./SearchEngine";

const Header = () => {
  const { darkMode, setDarkMode, categorySelected, setCategorySelected } =
    useContext(MyContext);

  return (
    <div
      className={`${
        darkMode && "dark"
      } flex justify-center backdrop-blur-sm relative shadow z-10`}
    >
      <div className="w-full flex items-center justify-center dark:bg-dark text-dark dark:text-white border-b border-dark dark:border-white">
        <div className="flex justify-between items-center w-full max-w-7xl p-3">
          <Link href="/" onClick={() => setCategorySelected("")}>
            <h1 className="text-3xl font-black">
              Like H
              <span className="inline-block relative -bottom-1">
                <BiHomeSmile color="#bef264" />
              </span>
              me
            </h1>
          </Link>
          <div className="w-1/2">
            <SearchEngine setCategorySelected={setCategorySelected} />
          </div>
          <div className="flex items-center justify-center gap-20 text-2xl">
            <ul className="flex gap-4">
              <Link
                href="/rent"
                className={`nav-link ${
                  categorySelected == "rent" && "text-theme"
                }`}
                onClick={() => setCategorySelected("rent")}
              >
                Rent
              </Link>
              <Link
                href="/sale"
                className={`nav-link ${
                  categorySelected == "sale" && "text-theme"
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
                  darkMode ? "bg-white" : "bg-dark"
                } p-2 rounded-full transform ease-in-out transition-all text-xl hover:text-2xl absolute right-0 z-50`}
              >
                {darkMode ? (
                  <BiSun className="text-dark" />
                ) : (
                  <BiMoon className="text-white" />
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
