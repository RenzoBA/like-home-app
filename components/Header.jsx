"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth } from "firebaseConfig";
import { signOut } from "firebase/auth";
import { MyContext } from "app/(global-context)";
import SearchEngine from "@/components/SearchEngine";
import { BiHomeSmile, BiSun, BiMoon, BiUser, BiMenu } from "react-icons/bi";

const Header = () => {
  const { user, setUser, darkMode, setDarkMode } = useContext(MyContext);
  const router = useRouter();

  const logout = () => {
    try {
      signOut(auth);
      setUser(null);
      router.push("/");
    } catch (error) {
      console.log("logout failed: ", error);
    }
  };

  return (
    <div
      className={`${
        darkMode && "dark"
      } flex flex-col justify-center backdrop-blur-sm relative shadow z-10`}
    >
      <div className="w-full flex items-center justify-center dark:bg-dark text-dark dark:text-white border-b border-dark dark:border-white">
        <div className="flex justify-between items-center w-full max-w-7xl p-3">
          <Link href="/" className="">
            <h1 className="text-xl md:text-3xl font-extrabold sm:font-black">
              Like H
              <span className="inline-block relative -bottom-[0.1rem] md:-bottom-1">
                <BiHomeSmile color="#84cc16" />
              </span>
              me
            </h1>
          </Link>
          <div className="hidden lg:flex">
            {/* PENDIENTE */}
            <SearchEngine />
          </div>
          <div className="flex items-center justify-end gap-4 md:gap-8 text-base sm:text-xl md:text-2xl">
            <ul className="hidden sm:flex gap-4">
              <Link href="/rent" className="link">
                Rent
              </Link>
              <Link href="/sale" className="link">
                Sale
              </Link>
            </ul>
            <div className="flex flex-row items-center justify-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="header-icon"
              >
                {darkMode ? <BiSun /> : <BiMoon />}
              </button>
              <div className="relative group flex items-center">
                <button className="header-icon hidden md:inline">
                  <div className="flex flex-row items-center justify-center gap-2 w-[3.25rem]">
                    <BiMenu />
                    {user ? (
                      <Image
                        src={
                          user.photoURL
                            ? user.photoURL
                            : "/assets/user-photo-default.jpg"
                        }
                        width={50}
                        height={50}
                        alt="user"
                        className="rounded-full w-5 h-5"
                      />
                    ) : (
                      <BiUser />
                    )}
                  </div>
                </button>
                <button className="inline md:hidden">
                  <div className="w-8 h-8 text-base flex items-center justify-center bg-dark dark:bg-white text-white dark:text-dark rounded-full">
                    {user ? (
                      <Image
                        src={
                          user.photoURL
                            ? user.photoURL
                            : "/assets/user-photo-default.jpg"
                        }
                        width={50}
                        height={50}
                        alt="user"
                        className="rounded-full"
                      />
                    ) : (
                      <BiUser />
                    )}
                  </div>
                </button>
                <div className="invisible group-focus-within:visible transition-all p-4 rounded-lg shadow-lg flex flex-col items-start gap-4 bg-white dark:bg-dark w-40 text-base absolute top-12 right-0 font-medium">
                  {user ? (
                    <>
                      <p className="text-xs uppercase font-normal mb-2">
                        {user.displayName}
                      </p>
                      <Link href="/saved" className="lg:hover:text-theme">
                        Properties saved
                      </Link>
                      <button onClick={logout} className="text-red-500">
                        Log out
                      </button>
                    </>
                  ) : (
                    <Link href="/login" className="lg:hover:text-theme">
                      Sign up / Log in
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex lg:hidden items-center justify-center dark:bg-dark text-dark dark:text-white border-b border-dark dark:border-white text-xs sm:text-sm">
        <SearchEngine />
      </div>
    </div>
  );
};

export default Header;
