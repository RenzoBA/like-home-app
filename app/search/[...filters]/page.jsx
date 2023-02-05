"use client";

import { useContext, useEffect, useState } from "react";
import { MyContext } from "app/(global-context)";
import { getPropertiesSearch } from "app/(fetchData)";
import PropertyCard from "@/components/PropertyCard";
import CardSkeleton from "@/components/CardSkeleton";

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

  return (
    <div className={`${darkMode && "dark"} flex justify-center min-h-screen`}>
      <div className="w-full flex flex-col gap-4 items-center justify-center dark:bg-dark text-dark dark:text-white text-center pt-28 pb-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wider font-bold">
          <span className="uppercase underline inline-block decoration-theme underline-offset-2">
            search result
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl px-5 py-10">
          {propertiesSearched ? (
            propertiesSearched.map((p) => (
              <PropertyCard property={p} key={p.id} />
            ))
          ) : (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default filters;
