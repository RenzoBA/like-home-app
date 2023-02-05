"use client";

import { useContext, useEffect, useState } from "react";
import { MyContext } from "app/(global-context)";
import { getProperties } from "app/(fetchData)";
import PropertyCard from "@/components/PropertyCard";
import CardSkeleton from "@/components/CardSkeleton";

const rentHome = () => {
  const { darkMode } = useContext(MyContext);
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { hits } = await getProperties("for-rent");
      setProperties(hits);
    };
    getData();
  }, []);

  return (
    <div className={`${darkMode && "dark"} flex justify-center min-h-screen`}>
      <div className="w-full flex flex-col gap-4 items-center justify-center dark:bg-dark text-dark dark:text-white text-center pt-28 pb-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wider font-bold">
          Properties{" "}
          <span className="uppercase underline inline-block decoration-theme underline-offset-2">
            for rent
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl px-5 py-10">
          {properties ? (
            properties.map((p) => <PropertyCard property={p} key={p.id} />)
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

export default rentHome;
