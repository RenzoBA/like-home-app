"use client";

import Image from "next/image";
import { BiBath, BiBed, BiCheckCircle, BiExpand } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const PropertyDetails = ({
  property: {
    geography,
    purpose,
    price,
    product,
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
          <div className="mb-4">
            {/* titulo/info */}
            <h2 className="text-2xl font-medium">
              {title}
              <span className="text-white px-2 py-1 rounded-lg bg-red-500 text-[10px] font-medium select-none w-fit uppercase relative inset-x-2 -inset-y-1">
                {purpose.split("-").join(" ")}
              </span>
            </h2>
            <div className="mt-3 flex justify-between">
              <div className="flex flex-row gap-2 items-center">
                {/* estrellas, ubicacion LISTO */}
                <div className="flex items-center gap-1">
                  <FaStar color="yellow" fill="yellow" />
                  <p>{(score / 20).toFixed(2)}</p>
                </div>
                •
                <p className="">
                  {location[3].name +
                    ", " +
                    location[2].name +
                    ", " +
                    location[1].name}
                </p>
              </div>
            </div>
          </div>
          <div className="grid self-center grid-cols-[2fr_1fr] grid-rows-2 gap-1 relative rounded-xl overflow-hidden mb-2 w-9/12">
            {/* collage fotos */}
            <span
              className={`${
                product === "superhot" || product === "hot"
                  ? "text-yellow-300 bg-red-400"
                  : product === "premium"
                  ? "text-slate-200 bg-lime-300"
                  : "text-slate-800 bg-slate-200"
              } z-10 px-2 py-1 rounded-lg text-lg font-medium select-none w-fit uppercase absolute left-2 top-2 shadow`}
            >
              {product}
            </span>
            <div className="flex items-center justify-center gap-3 shadow px-3 py-1 rounded-lg w-fit bg-slate-200 text-slate-800 h-max absolute bottom-2 left-2">
              {/* baños, cuartos, area LISTO */}
              <div className="flex gap-1 items-center">
                <BiBed color="#9ca3af" />
                <p>{rooms} rooms</p>
              </div>
              <div className="flex gap-1 items-center">
                <BiBath color="#9ca3af" />
                <p>{baths} baths</p>
              </div>
              <div className="flex gap-1 items-center">
                <BiExpand color="#9ca3af" />
                <p>{Math.round(area)} sq.ft.</p>
              </div>
            </div>
            <Image
              src={photos[0].url}
              className="row-span-full object-contain w-full h-full"
              alt="property-0"
              width={550}
              height={550}
            />
            <Image
              src={photos[1]?.url}
              className="row-span-1 object-contain w-full h-full"
              alt="property-0"
              width={550}
              height={550}
            />
            <Image
              src={photos[2]?.url}
              className="row-span-1 object-contain w-full h-full"
              alt="property-0"
              width={550}
              height={550}
            />
          </div>
          <div className="flex flex-row items-center gap-2 mb-2">
            <Image
              src={agency?.logo.url}
              width={45}
              height={45}
              className="rounded-full shadow border object-contain w-10 h-10"
            />
            <div className="flex flex-col justify-center items-start gap-1">
              <div className="flex items-center">
                <h2 className="font-light tracking-wide mr-2">
                  <span className="text-slate-400">Agency:</span> {agency?.name}
                </h2>
                <BiCheckCircle
                  color={`${isVerified ? "#63b3ed" : "#a1a1aa"}`}
                />
              </div>
              <h3 className="tracking-wider font-light text-xs">
                <span className="text-slate-400">Contact:</span> {contactName}
              </h3>
            </div>
          </div>
          <hr />
          <div>
            <label>Price & location:</label>
            <h3>{price}</h3>
            <h4>{geography.lat}</h4>
            <h4>{geography.lng}</h4>
          </div>
          <div>
            <label>Description:</label>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default PropertyDetails;
