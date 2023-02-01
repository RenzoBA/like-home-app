import { getPropertyDetails } from "app/(fetchData)";
import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import PropertyCard from "./PropertyCard";

const SavedPropertyCard = ({ externalIDProperty }) => {
  const [property, setProperty] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getPropertyDetails(externalIDProperty);
      setProperty(data);
    };
    getData();
  }, []);

  if (property) {
    return <PropertyCard property={property} key={property.id} />;
  }
  return <CardSkeleton />;
};

export default SavedPropertyCard;
