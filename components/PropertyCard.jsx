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
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MyContext } from "app/(global-context)";
import { useContext } from "react";
import { useRouter } from "next/navigation";

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

  const handleSaveProperty = () => {
    alert("saved");
  };

  const loginRoute = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <div className="rounded-lg hover:-translate-y-2 transform transition-transform duration-300 ease-in-out bg-white text-dark shadow-md dark:bg-dark-card dark:text-white border border-stone-500 overflow-hidden pb-5">
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
              <p className="text-white px-3 py-2 rounded-lg bg-red-500 text-sm font-medium select-none w-fit shadow uppercase">
                {purpose.split("-").join(" ")}
              </p>
              <button onClick={user ? handleSaveProperty : loginRoute}>
                <AiOutlineHeart className="z-50 text-3xl" />
              </button>
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
              <p>{(score / 20).toFixed(2)}</p>
            </div>
            <p className="font-medium text-base md:text-lg">
              {location[2].name + ", " + location[1].name}
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
                src={agency.logo.url}
                width={40}
                height={40}
                className="rounded-full shadow border object-contain w-9 h-9"
              />
              <p>{contactName.substring(0, 8)}...</p>
              <BiCheckCircle color={`${isVerified ? "#63b3ed" : "#a8a29e"}`} />
            </div>
            <p className="text-lg font-semibold whitespace-nowrap">
              {price} AED{" "}
              <span className="text-sm text-stone-400">
                {rentFrequency && `/${rentFrequency[0]}`}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
