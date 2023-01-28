"use client";

import Image from "next/image";
import { BiBath, BiBed, BiCheckCircle, BiExpand } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import PropertyMap from "./PropertyMap";
import ReservationForm from "./ReservationForm";

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
  if (price) {
    return (
      <div className="max-w-6xl p-4">
        <div className="flex flex-col">
          <div className="py-10">
            {/* titulo/info */}
            <h2 className="text-3xl font-medium uppercase flex items-center">
              {title}
              <span className="text-white px-2 py-1 rounded-lg bg-red-500 text-xs font-medium select-none w-fit uppercase ml-4">
                {purpose.split("-").join(" ")}
              </span>
            </h2>
            <div className="mt-3 flex justify-between font-medium text-lg">
              <div className="flex flex-row items-center justify-start gap-5">
                <div className="flex items-center gap-1">
                  <TiLocation color="#84cc16" />
                  <p>
                    {(location[3] && location[3].name) +
                      ", " +
                      (location[2] && location[2].name) +
                      ", " +
                      (location[1] && location[1].name)}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar color="#84cc16" />
                  <p>{(score / 20).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid self-center grid-cols-[2fr_1fr] grid-rows-2 gap-1 relative rounded-xl overflow-hidden mx-10 shadow">
            {/* collage fotos */}
            <span
              className={`${
                product === "superhot" || product === "hot"
                  ? "text-yellow-300 bg-red-400"
                  : product === "premium"
                  ? "text-white bg-theme"
                  : "text-dark bg-white"
              } z-10 px-2 py-1 rounded-lg text-2xl font-bold select-none w-fit uppercase absolute left-2 top-2 shadow`}
            >
              {product}
            </span>
            <div className="flex items-center justify-center gap-3 shadow px-3 py-1 rounded-lg w-fit bg-white text-dark h-max absolute bottom-2 left-2 text-lg">
              {/* baños, cuartos, area LISTO */}
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
              className="row-span-full object-cover w-full h-full"
              alt="property-0"
              width={600}
              height={600}
            />
            <Image
              src={photos[1]?.url}
              className="row-span-1 object-cover w-full h-full"
              alt="property-0"
              width={600}
              height={600}
            />
            <Image
              src={photos[2]?.url}
              className="row-span-1 object-cover w-full h-full"
              alt="property-0"
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col items-center gap-3 justify-center p-10 w-full">
            <div className="flex flex-row items-center w-full justify-between">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={agency?.logo.url}
                  width={60}
                  height={60}
                  className="rounded-full shadow border object-contain w-12 h-12"
                />
                <div className="flex flex-col text-lg tracking-wide">
                  <div className="flex items-center">
                    <h2 className="mr-2">
                      <span className="text-stone-400 font-light text-sm mr-1">
                        Agency
                      </span>{" "}
                      {agency?.name}
                    </h2>
                    {isVerified && <BiCheckCircle color="#63b3ed" />}
                  </div>
                  <h2>
                    <span className="text-stone-400 font-light text-sm mr-1">
                      Contact
                    </span>{" "}
                    {contactName}
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center">
                <h3 className="font-bold text-2xl">{price} AED</h3>
                <span className="text-stone-400 font-light text-sm">
                  / {rentFrequency}
                </span>
              </div>
            </div>
            <div>
              <p className="text-justify leading-relaxed tracking-wide pt-3">
                {description}
              </p>
            </div>
          </div>
          <hr />
          <div className="flex flex-row p-10 w-full justify-between items-center">
            <PropertyMap geography={geography} />
            <ReservationForm
              price={price}
              rentFrequency={rentFrequency}
              score={score}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default PropertyDetails;
