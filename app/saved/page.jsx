"use client";

import { useContext } from "react";
import { MyContext } from "app/(global-context)";
import SavedPropertyCard from "@/components/SavedPropertyCard";

const page = () => {
  const { darkMode, user } = useContext(MyContext);

  return (
    <div className={`${darkMode && "dark"} flex justify-center min-h-screen`}>
      <div className="w-full flex flex-col gap-4 items-center justify-center dark:bg-dark text-dark dark:text-white text-center pt-28 pb-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wider font-bold">
          Properties{" "}
          <span className="uppercase underline inline-block decoration-theme underline-offset-2">
            saved
          </span>
        </h2>
        {user &&
          (user.savedProperties.length == 0 ? (
            <p className="text-2xl sm:text-3xl font-medium">No saved 💔</p>
          ) : (
            <>
              <p className="text-2xl sm:text-3xl font-medium">
                Properties saved ({user.savedProperties.length}):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl px-5 py-10">
                {user.savedProperties.map((p) => (
                  <SavedPropertyCard
                    externalIDProperty={p.externalIDProperty}
                    key={p.id}
                  />
                ))}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default page;
