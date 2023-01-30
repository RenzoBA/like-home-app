"use client";
import { MyContext } from "app/(global-context)";
import DetailSkeleton from "@/components/DetailSkeleton";

import { useContext, useEffect, useState } from "react";
import { getPropertyDetails } from "../../(fetchData)";
import PropertyDetails from "../../../components/PropertyDetails";

const externalId = ({ params: { externalID } }) => {
  const { darkMode } = useContext(MyContext);
  const [propertyDetails, setpropertyDetails] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const details = await getPropertyDetails(externalID);
      setpropertyDetails(details);
    };
    getData();
  }, []);

  if (propertyDetails) {
    return (
      <div
        className={`${
          darkMode && "dark"
        } flex justify-center items-center text-dark`}
      >
        <div className="w-full flex justify-center dark:bg-dark dark:text-white">
          <PropertyDetails property={propertyDetails} />
        </div>
      </div>
    );
  }
  return (
    <div
      className={`${
        darkMode && "dark"
      } flex justify-center items-center text-dark`}
    >
      <div className="w-full flex justify-center dark:bg-dark dark:text-white">
        <DetailSkeleton />
      </div>
    </div>
  );
};

export default externalId;
