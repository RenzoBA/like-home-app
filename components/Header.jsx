"use client";

import Link from "next/link";
import { useContext } from "react";
import { MyContext } from "../app/(global-context)";
import { BiHomeSmile, BiSun, BiMoon, BiUser, BiMenu } from "react-icons/bi";
import SearchEngine from "./SearchEngine";
import { auth } from "firebaseConfig";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Header = () => {
  const {
    user,
    setUser,
    darkMode,
    setDarkMode,
    categorySelected,
    setCategorySelected,
  } = useContext(MyContext);
  const router = useRouter();

  const logout = () => {
    try {
      signOut(auth);
      setUser(null);
      router.push("/");
    } catch (error) {}
    console.log("USER after logout:", user);
  };

  return (
    <div
      className={`${
        darkMode && "dark"
      } flex justify-center backdrop-blur-sm relative shadow z-10`}
    >
      <div className="w-full flex items-center justify-center dark:bg-dark text-dark dark:text-white border-b border-dark dark:border-white">
        <div className="flex justify-between items-center w-full max-w-7xl p-3">
          <Link
            href="/"
            onClick={() => setCategorySelected("")}
            className="1/4"
          >
            <h1 className="text-3xl font-black">
              Like H
              <span className="inline-block relative -bottom-1">
                <BiHomeSmile color="#84cc16" />
              </span>
              me
            </h1>
          </Link>
          <div className="w-1/2">
            <SearchEngine setCategorySelected={setCategorySelected} />
          </div>
          <div className="flex items-center justify-end gap-8 w-1/4 text-2xl">
            <ul className="flex gap-4">
              <Link
                href="/rent"
                className={`link ${categorySelected == "rent" && "text-theme"}`}
                onClick={() => setCategorySelected("rent")}
              >
                Rent
              </Link>
              <Link
                href="/sale"
                className={`link ${categorySelected == "sale" && "text-theme"}`}
                onClick={() => setCategorySelected("sale")}
              >
                Sale
              </Link>
            </ul>
            <div className="flex flex-row items-center justify-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`${
                  darkMode ? "bg-white" : "bg-dark"
                } p-2 rounded-full transform ease-in-out transition-all text-xl hover:bg-theme`}
              >
                {darkMode ? (
                  <BiSun className="text-dark" />
                ) : (
                  <BiMoon className="text-white" />
                )}
              </button>
              {/* user login */}
              <div className="relative group">
                <button
                  className={`${
                    darkMode ? "bg-white" : "bg-dark"
                  } p-2 rounded-full transform ease-in-out transition-all text-xl hover:bg-theme`}
                >
                  <div className="flex flex-row items-center gap-2">
                    <BiMenu
                      className={`${darkMode ? "text-dark" : "text-white"}`}
                    />
                    {!user ? (
                      <BiUser
                        className={`${darkMode ? "text-dark" : "text-white"}`}
                      />
                    ) : (
                      <Image
                        src={
                          user.photoURL
                            ? user.photoURL
                            : "/assets/user-photo-default.jpg"
                        }
                        width={50}
                        height={50}
                        alt="user"
                        className="rounded-full w-6 h-6"
                      />
                    )}
                  </div>
                </button>
                {user ? (
                  <div className="invisible group-focus-within:visible p-4 rounded-lg shadow-lg flex flex-col items-start gap-4 bg-white dark:bg-dark w-40 text-base absolute -left-20 top-12 font-medium">
                    <p className="text-xs uppercase font-normal mb-2">
                      {user.displayName}
                    </p>
                    <Link href="/saved" className="hover:text-theme">
                      Properties saved
                    </Link>
                    <button onClick={logout}>Log out</button>
                  </div>
                ) : (
                  <div className="invisible group-focus-within:visible p-4 rounded-lg shadow-lg flex flex-col gap-4 bg-white dark:bg-dark w-40 text-base absolute -left-20 top-12 font-medium">
                    <Link href="/login" className="hover:text-theme">
                      Sign up / Log in
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
