"use client";

import CardSkeleton from "@/components/CardSkeleton";
import PropertyCard from "@/components/PropertyCard";
import { getPropertiesSearch } from "app/(fetchData)";
import { MyContext } from "app/(global-context)";
import { useContext, useEffect, useState } from "react";

const filters = ({ params: { filters } }) => {
  const { darkMode } = useContext(MyContext);
  const [propertiesSearched, setPropertiesSearched] = useState(null);
  const path = filters[0].replaceAll("%3D", "=").replaceAll("%26", "&");

  useEffect(() => {
    const getData = async () => {
      const { hits } = await getPropertiesSearch(path);
      setPropertiesSearched(hits);
    };

    getData();
  }, []);

  if (propertiesSearched) {
    return (
      <div className={`${darkMode && "dark"} flex justify-center`}>
        <div className="w-full flex justify-center dark:bg-dark text-dark dark:text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl px-5 py-10">
            {propertiesSearched.map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`${darkMode && "dark"} flex justify-center`}>
      <div className="w-full flex justify-center dark:bg-dark">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full max-w-7xl px-5 py-10">
          <CardSkeleton darkMode={darkMode} />
          <CardSkeleton darkMode={darkMode} />
          <CardSkeleton darkMode={darkMode} />
          <CardSkeleton darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default filters;
