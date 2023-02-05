"use client";

import { useContext } from "react";
import Image from "next/image";
import { MyContext } from "app/(global-context)";
import PropertyMap from "@/components/PropertyMap";
import ReservationForm from "@/components/ReservationForm";
import SaleForm from "@/components/SaleForm";
import { FaStar } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { BiBath, BiBed, BiCheckCircle, BiExpand } from "react-icons/bi";

const PropertyDetails = ({
  property: {
    geography,
    purpose,
    price,
    product,
    rentFrequency,
    title,
    description,
    location,
    rooms,
    baths,
    area,
    score,
    photos,
    contactName,
    agency,
    isVerified,
  },
}) => {
  const { user } = useContext(MyContext);

  return (
    <div className="max-w-6xl">
      <div className="flex flex-col">
        <div className="pb-10">
          <h2 className="text-2xl md:text-3xl font-medium uppercase flex flex-col-reverse md:inline relative">
            {title} <br className="flex md:hidden" />
            <span className="text-white px-2 py-0 md:py-2 rounded-lg bg-red-500 text-[0.6rem] md:text-sm font-medium select-none w-fit h-fit uppercase m-0 md:ml-2 relative bottom-1 inline-block">
              {purpose.split("-").join(" ")}
            </span>
          </h2>
          <div className="mt-3 flex justify-between font-light md:font-medium text-base md:text-lg">
            <div className="flex flex-col-reverse md:flex-row items-start justify-start gap-1 md:gap-5">
              <div className="flex items-center gap-1">
                <TiLocation color="#84cc16" className="text-xl" />
                <p>
                  {(location[3] && location[3].name) +
                    ", " +
                    (location[2] && location[2].name) +
                    ", " +
                    (location[1] && location[1].name)}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <FaStar color="#84cc16" className="text-xl" />
                <p>{score / 20}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:grid self-center grid-cols-[2fr_1fr] grid-rows-2 gap-1 relative rounded-xl overflow-hidden mx-10 shadow">
          <span
            className={`${
              product === "superhot" || product === "hot"
                ? "text-yellow-300 bg-red-500"
                : product === "premium"
                ? "text-white bg-theme"
                : "text-dark bg-white"
            } px-2 py-1 rounded-lg text-lg md:text-xl lg:text-2xl font-bold select-none w-fit uppercase absolute left-2 top-2 shadow`}
          >
            {product}
          </span>
          <div className="flex items-center justify-center gap-3 shadow px-3 py-1 rounded-lg w-fit bg-white text-dark h-max absolute bottom-2 left-2 text-base lg:text-lg">
            <div className="flex gap-1 items-center">
              <BiBed color="#a8a29e" />
              <p>{rooms} rooms</p>
            </div>
            <div className="flex gap-1 items-center">
              <BiBath color="#a8a29e" />
              <p>{baths} baths</p>
            </div>
            <div className="flex gap-1 items-center">
              <BiExpand color="#a8a29e" />
              <p>{Math.round(area)} sq.ft.</p>
            </div>
          </div>
          <Image
            src={photos[0].url}
            alt="property"
            width={600}
            height={600}
            className="row-span-full object-cover w-full h-full"
          />
          <Image
            src={photos[1] ? photos[1].url : "/assets/cover-photo-default.jpg"}
            alt="property"
            width={600}
            height={600}
            className="row-span-1 object-cover w-full h-full"
          />
          <Image
            src={photos[2] ? photos[2].url : "/assets/cover-photo-default.jpg"}
            alt="property"
            width={600}
            height={600}
            className="row-span-1 object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-row gap-2 -mr-5 md:hidden overflow-x-scroll overflow-hidden relative">
          <span
            className={`${
              product === "superhot" || product === "hot"
                ? "text-yellow-300 bg-red-500"
                : product === "premium"
                ? "text-white bg-theme"
                : "text-dark bg-white"
            } px-2 py-1 rounded-lg text-lg md:text-xl lg:text-2xl font-bold select-none w-fit uppercase absolute left-2 top-2 shadow`}
          >
            {product}
          </span>
          <div className="flex items-center justify-center gap-3 shadow px-3 py-1 rounded-lg w-fit bg-white text-dark h-max absolute bottom-2 left-2 text-base lg:text-lg">
            <div className="flex gap-1 items-center">
              <BiBed color="#a8a29e" />
              <p>{rooms} rooms</p>
            </div>
            <div className="flex gap-1 items-center">
              <BiBath color="#a8a29e" />
              <p>{baths} baths</p>
            </div>
            <div className="flex gap-1 items-center">
              <BiExpand color="#a8a29e" />
              <p>{Math.round(area)} sq.ft.</p>
            </div>
          </div>
          {photos.map((photo, id) => (
            <Image
              key={id}
              src={photo.url}
              alt="property"
              width={600}
              height={600}
              className="row-span-full object-cover rounded-lg w-11/12 h-full"
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 justify-center px-0 py-10 md:p-10 w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between">
            <div className="flex flex-row items-center gap-2">
              <Image
                src={
                  agency ? agency.logo.url : "/assets/user-photo-default.jpg"
                }
                alt="logo"
                width={60}
                height={60}
                className="rounded-full shadow border object-contain w-12 h-12"
              />
              <div className="flex flex-col text-base md:text-lg tracking-wide">
                {/*  */}
                <div className="flex items-center gap-2">
                  <p className="text-stone-400 font-light text-sm mr-1">
                    Agency
                  </p>
                  <h2>
                    {agency ? (
                      <span>
                        {agency.name}{" "}
                        {isVerified && (
                          <BiCheckCircle
                            color="#63b3ed"
                            className="inline relative bottom-[2px] left-1"
                          />
                        )}
                      </span>
                    ) : (
                      "-"
                    )}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-stone-400 font-light text-sm mr-1">
                    Contact
                  </p>
                  <h2>{contactName ? contactName : "-"}</h2>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end justify-center">
              <h2 className="font-bold text-2xl">{price} AED </h2>
              <p className="text-stone-400 font-light text-sm pl-1">
                {rentFrequency && `/${rentFrequency}`}
              </p>
            </div>
          </div>
          <div>
            <p className="text-justify leading-relaxed tracking-wide pt-4">
              {description}
            </p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row items-center gap-8 px-0 py-10 md:p-10 w-full justify-between">
          <PropertyMap geography={geography} />
          {rentFrequency ? (
            <ReservationForm
              price={price}
              rentFrequency={rentFrequency}
              score={score}
              user={user}
            />
          ) : (
            <SaleForm price={price} score={score} user={user} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
