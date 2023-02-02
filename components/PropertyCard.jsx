"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { db } from "firebaseConfig";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { MyContext } from "app/(global-context)";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  BiBed,
  BiBath,
  BiExpand,
  BiHomeAlt,
  BiCheckCircle,
} from "react-icons/bi";

const PropertyCard = ({
  property: {
    externalID,
    purpose,
    price,
    coverPhoto,
    location,
    rentFrequency,
    rooms,
    baths,
    area,
    category,
    score,
    contactName,
    agency,
    isVerified,
  },
}) => {
  const { user } = useContext(MyContext);
  const router = useRouter();

  const property = user?.savedProperties.find(
    (p) => p.externalIDProperty === externalID
  );

  const saveProperty = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        userID: user.uid,
        externalIDProperty: externalID,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const unsaveProperty = async () => {
    try {
      await deleteDoc(doc(db, "users", property.id));
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const loginRoute = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <div className="rounded-lg hover:-translate-y-2 transform transition-transform duration-300 ease-in-out bg-white text-dark shadow-md dark:bg-dark-card dark:text-white border border-stone-500 overflow-hidden pb-5 relative w-72 h-[410px]">
      <button
        onClick={
          !user
            ? loginRoute
            : user.savedProperties.includes(property)
            ? unsaveProperty
            : saveProperty
        }
        className="z-50 text-3xl absolute top-3 right-2"
      >
        {!user ? (
          <AiOutlineHeart />
        ) : user.savedProperties.includes(property) ? (
          <AiFillHeart color="#ef4444" />
        ) : (
          <AiOutlineHeart />
        )}
      </button>
      <Link href={`/${purpose.split("-")[1]}/${externalID}`}>
        <div>
          <div className="w-full flex flex-col items-center relative">
            <Image
              alt="cover-photo"
              src={
                coverPhoto ? coverPhoto.url : "/assets/cover-photo-default.jpg"
              }
              width={400}
              height={400}
              className="object-cover w-full h-52"
            />
            <div className="flex items-center pr-6 h-fit justify-between w-full absolute inset-3">
              <p className="px-3 py-2 rounded-lg bg-white text-dark text-sm font-medium select-none w-fit shadow uppercase">
                {purpose.split("-").join(" ")}
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 shadow px-3 py-1 rounded-lg w-fit absolute inset-y-[80%] bg-white h-max text-dark">
              <div className="flex gap-1 items-center">
                <BiBed color="#9ca3af" />
                <p>{rooms} rooms</p>
              </div>
              <div className="flex gap-1 items-center">
                <BiBath color="#9ca3af" />
                <p>{baths} baths</p>
              </div>
            </div>
          </div>
          <div className="mt-4 px-5">
            <div className="flex items-center text-sm gap-1">
              <FaStar color="#84cc16" />
              <p>{score / 20}</p>
            </div>
            <p className="font-medium text-base md:text-lg">
              {location[2].name.substring(0, 17) + "... , " + location[1].name}
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 px-5">
            <div className="details-house">
              <BiExpand color="#a8a29e" />
              <p>{Math.round(area)} sq.ft.</p>
            </div>
            <div className="details-house">
              <BiHomeAlt color="#a8a29e" />
              <p>{category[1].nameSingular}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6 px-5">
            <div className="flex flex-row items-center justify-start gap-1">
              <Image
                alt="agency"
                src={
                  agency ? agency.logo.url : "/assets/user-photo-default.jpg"
                }
                width={40}
                height={40}
                className="rounded-full shadow border object-contain w-8 h-8"
              />
              <p>{contactName.substring(0, 8)}...</p>
              {isVerified && <BiCheckCircle color="#63b3ed" />}
            </div>
            <p className="text-base font-medium whitespace-nowrap">
              {price} AED{" "}
              <span className="text-sm text-stone-400">
                {rentFrequency && `/ ${rentFrequency[0]}`}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
