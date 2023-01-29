export const getPropertiesSearch = async (path) => {
  const res = await fetch(
    `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&${path}&hitsPerPage=1&page=0&lang=en`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY_4,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    }
  );

  if (!res.ok) {
    throw new Error("PROPERTIES SEARCH fetching error");
  }
  return res.json();
};

export const getProperties = async (purpose) => {
  const res = await fetch(
    `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=${purpose}&hitsPerPage=1&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY_4,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    }
  );

  if (!res.ok) {
    throw new Error("PROPERTIES fetching error");
  }
  return res.json();
};

export const getPropertyDetails = async (externalID) => {
  const res = await fetch(
    `https://bayut.p.rapidapi.com/properties/detail?externalID=${externalID}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY_4,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    }
  );
  if (!res.ok) {
    throw new Error("PROPERTY DETAILS fetching error");
  }
  return res.json();
};
