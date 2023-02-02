"use client";

import { useContext } from "react";
import { MyContext } from "app/(global-context)";
import SavedPropertyCard from "@/components/SavedPropertyCard";

const page = () => {
  const { darkMode, user } = useContext(MyContext);

  return (
    <div
      className={`${
        darkMode && "dark"
      } h-[88.5vh] flex justify-center items-center text-dark`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center dark:bg-dark dark:text-white px-5">
        {user &&
          (user.savedProperties.length == 0 ? (
            <h2 className="text-3xl font-medium">No properties saved 💔</h2>
          ) : (
            <div className="w-full text-start flex flex-col justify-start items-center gap-5">
              <h2 className="text-3xl font-medium">
                Properties saved ({user.savedProperties.length}):
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl px-5 py-10">
                {user.savedProperties.map((p) => (
                  <SavedPropertyCard
                    externalIDProperty={p.externalIDProperty}
                    key={p.id}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;
