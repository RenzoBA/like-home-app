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
      } flex justify-center backdrop-blur-sm relative shadow z-10`}
    >
      <div className="w-full flex items-center justify-center dark:bg-dark text-dark dark:text-white border-b border-dark dark:border-white">
        <div className="flex justify-between items-center w-full max-w-7xl p-3">
          <Link href="/" className="1/4">
            <h1 className="text-3xl font-black">
              Like H
              <span className="inline-block relative -bottom-1">
                <BiHomeSmile color="#84cc16" />
              </span>
              me
            </h1>
          </Link>
          <div className="w-1/2">
            <SearchEngine />
          </div>
          <div className="flex items-center justify-end gap-8 w-1/4 text-2xl">
            <ul className="flex gap-4">
              <Link href="/rent" className={"link"}>
                Rent
              </Link>
              <Link href="/sale" className={"link"}>
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
              <div className="relative group">
                <button className="header-icon">
                  <div className="flex flex-row items-center gap-2">
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
                        className="rounded-full w-6 h-6"
                      />
                    ) : (
                      <BiUser />
                    )}
                  </div>
                </button>
                <div className="invisible group-focus-within:visible transition-all p-4 rounded-lg shadow-lg flex flex-col items-start gap-4 bg-white dark:bg-dark w-40 text-base absolute -left-20 top-12 font-medium">
                  {user ? (
                    <>
                      <p className="text-xs uppercase font-normal mb-2">
                        {user.displayName}
                      </p>
                      <Link href="/saved" className="hover:text-theme">
                        Properties saved
                      </Link>
                      <button onClick={logout} className="text-red-500">
                        Log out
                      </button>
                    </>
                  ) : (
                    <Link href="/login" className="hover:text-theme">
                      Sign up / Log in
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
