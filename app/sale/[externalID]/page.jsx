"use client";

import { useContext, useEffect, useState } from "react";
import { MyContext } from "app/(global-context)";
import { getPropertyDetails } from "app/(fetchData)";
import PropertyDetails from "@/components/PropertyDetails";
import DetailSkeleton from "@/components/DetailSkeleton";

const externalId = ({ params: { externalID } }) => {
  const { darkMode } = useContext(MyContext);
  const [propertyDetails, setPropertyDetails] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const details = await getPropertyDetails(externalID);
      setPropertyDetails(details);
    };
    getData();
  }, []);

  return (
    <div
      className={`${
        darkMode && "dark"
      } flex justify-center items-center text-dark`}
    >
      <div className="w-full flex justify-center dark:bg-dark dark:text-white">
        {propertyDetails ? (
          <PropertyDetails property={propertyDetails} />
        ) : (
          <DetailSkeleton />
        )}
      </div>
    </div>
  );
};

export default externalId;
