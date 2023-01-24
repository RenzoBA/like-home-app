import React from "react";
import { getProperyDetails } from "../../(fetchData)";

const externalId = async ({ params: { externalId } }) => {
  const property = await getProperyDetails(externalId);
  return (
    <div>
      <PropertyDetails property={property} />
    </div>
  );
};

export default externalId;
