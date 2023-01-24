import { getProperties } from "../(fetchData)";
import PropertyCard from "../../components/PropertyCard";

const buyHome = async () => {
  const properties = await getProperties("for-sale");

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full dark:bg-red-400 max-w-7xl py-10">
        {properties.hits.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>
    </div>
  );
};

export default buyHome;
