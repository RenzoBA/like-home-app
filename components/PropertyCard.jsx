import Image from "next/image";
import Link from "next/link";
import {
  BiBed,
  BiBath,
  BiExpand,
  BiHomeAlt,
  BiCheckCircle,
} from "react-icons/bi";
import { FaStar } from "react-icons/fa";

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
  return (
    <div className="rounded-lg hover:-translate-y-2 transform transition-transform duration-300 ease-in-out bg-white text-gray-800 shadow-md border dark:bg-slate-600 dark:text-slate-200 dark:border-slate-700">
      <Link href={`/${purpose.split("-")[1]}/${externalID}`}>
        <div className="p-5">
          <div className="w-full flex flex-col items-center relative">
            <Image
              alt="cover-photo"
              src={coverPhoto.url}
              width={400}
              height={400}
              className="object-cover w-full h-52 rounded-xl"
            />
            <div className="flex items-start justify-between w-full absolute inset-3">
              <p className="text-white px-3 py-2 rounded-lg bg-red-500 text-sm font-medium select-none w-fit shadow uppercase">
                {purpose.split("-").join(" ")}
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 shadow px-3 py-1 rounded-lg w-fit absolute inset-y-[80%] bg-white h-max text-gray-800">
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
          <div className="mt-4">
            <div className="flex items-center text-sm gap-1">
              <FaStar color="yellow" fill="yellow" />
              <p>{(score / 20).toFixed(2)}</p>
            </div>
            <p className="font-medium text-base md:text-lg">
              {location[2].name + ", " + location[1].name}
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="details-house">
              <BiExpand color="#9ca3af" />
              <p>{Math.round(area)} sq.ft.</p>
            </div>
            <div className="details-house">
              <BiHomeAlt color="#9ca3af" />
              <p>{category[1].nameSingular}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex flex-row items-center justify-start gap-1">
              <Image
                alt="agency"
                src={agency.logo.url}
                width={40}
                height={40}
                className="rounded-full shadow border object-contain w-9 h-9"
              />
              <p>{contactName}</p>
              <BiCheckCircle color={`${isVerified ? "#63b3ed" : "#a1a1aa"}`} />
            </div>
            <p className="text-sm font-semibold whitespace-nowrap">
              $ <span className="text-xl">{(price / 3.67).toFixed(2)}</span>
              {rentFrequency && `/${rentFrequency[0]}`}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
