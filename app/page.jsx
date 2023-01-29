"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BiHomeSmile } from "react-icons/bi";
import { MyContext } from "./(global-context)";
import "/styles/globals.css";

const page = () => {
  const { darkMode, setCategorySelected } = useContext(MyContext);

  return (
    <div
      className={`${
        darkMode && "dark"
      } h-[88.5vh] flex justify-center items-center text-dark`}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center dark:bg-dark dark:text-white">
        <div className="flex flex-row justify-center h-full w-full divide-x divide-dark dark:divide-white">
          <div className="home-section group">
            <Image
              src="/assets/rent-image.jpg"
              width={800}
              height={800}
              className="home-section-image"
              alt="rent"
            />
            <Link
              href="/rent"
              className="home-section-link"
              onClick={() => setCategorySelected("rent")}
            >
              rent
            </Link>
          </div>
          <div className="home-section group">
            <Image
              src="/assets/sale-image.jpg"
              width={800}
              height={800}
              className="home-section-image"
              alt="sale"
            />
            <Link
              href="/sale"
              className="home-section-link"
              onClick={() => setCategorySelected("sale")}
            >
              sale
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center absolute select-none">
          <h1 className="text-7xl font-black text-white tracking-wide">
            Like H
            <span className="inline-block relative -bottom-1">
              <BiHomeSmile color="#84cc16" />
            </span>
            me
          </h1>
          <p className="text-2xl text-white">
            The best site to find your place
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
