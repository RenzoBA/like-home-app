"use client";

import { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { db } from "firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { MyContext } from "app/(global-context)";
import { BiHomeSmile } from "react-icons/bi";

const page = () => {
  const { darkMode, user, setUser } = useContext(MyContext);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "users"), where("userID", "==", user.uid));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const properties = [];
        querySnapshot.forEach((doc) => {
          properties.push({ id: doc.id, ...doc.data() });
        });
        setUser({ ...user, savedProperties: properties });
      });
    }
  }, []);

  return (
    <div
      className={`${
        darkMode && "dark"
      } h-screen flex justify-center items-center text-dark`}
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
            <Link href="/rent" className="home-section-link">
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
            <Link href="/sale" className="home-section-link">
              sale
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center absolute select-none">
          <h1 className="text-7xl font-black text-white tracking-wide text-center">
            Like
            <br className="inline sm:hidden" /> H
            <span className="inline-block relative -bottom-1">
              <BiHomeSmile color="#84cc16" />
            </span>
            me
          </h1>
          <p className="text-xl sm:text-2xl text-white text-center">
            The best site to find your place
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
