"use client";

import CardSkeleton from "@/components/CardSkeleton";
import { MyContext } from "app/(global-context)";
import { useContext, useEffect, useState } from "react";
import { getProperties } from "../(fetchData)";
import PropertyCard from "../../components/PropertyCard";

const rentHome = () => {
  const [properties, setProperties] = useState(null);
  const { darkMode } = useContext(MyContext);

  useEffect(() => {
    const getData = async () => {
      const { hits } = await getProperties("for-rent");
      setProperties(hits);
    };
    getData();
  }, []);

  if (properties) {
    return (
      <div
        className={`${darkMode && "dark"} flex justify-center z-0 h-[88.5vh]`}
      >
        <div className="w-full flex justify-center dark:bg-dark text-dark dark:text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl px-5 py-10">
            {properties.map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`${darkMode && "dark"} flex justify-center h-[88.5vh]`}>
      <div className="w-full flex justify-center dark:bg-dark text-dark dark:text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full max-w-7xl px-5 py-10">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
};

export default rentHome;
