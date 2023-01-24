"use client";
import { MyContext } from "app/(global-context)";
// import DetailSkeleton from "@/components/DetailSkeleton";

import { useContext, useEffect, useState } from "react";
import { getPropertyDetails } from "../../(fetchData)";
import PropertyDetails from "../../../components/PropertyDetails";

const externalId = ({ params: { externalID } }) => {
  const { darkMode } = useContext(MyContext);
  const [propertyDetails, setpropertyDetails] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const details = await getPropertyDetails(externalID);
      setpropertyDetails(details);
    };
    getData();
  }, []);

  return (
    <div
      className={`${
        darkMode && "dark"
      } flex justify-center items-center text-gray-800`}
    >
      <div className="w-full flex justify-center dark:bg-slate-700 dark:text-slate-200">
        <PropertyDetails property={propertyDetails} />
      </div>
    </div>
    // <div className="flex justify-center items-center">
    //   <DetailSkeleton />
    // </div>
  );
};

export default externalId;
