"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const places = {
  4: "apartment",
  16: "townhouses",
  3: "villas",
  18: "penthouses",
  21: "hotel apart",
  // Apartment -> 4|Townhouses -> 16|Villas -> 3|Penthouses -> 18|Hotel Apartments -> 21|
  //         Villa Compound -> 19|Residential Plot -> 14|Residential Floor -> 12|Residential Building -> 17|Office -> 5|Shop -> 6|Warehouse -> 7|Labour camp -> 9|Commercial Villa -> 25|Bulk Units -> 20|Commercial Plot -> 15|Commercial Floor -> 13|Commercial Building -> 10|Factory -> 8|Industrial Land -> 22|Mixed Use Land -> 23|Showroom -> 24|Other Commercial -> 11
};

const sorts = {
  "price-desc": "price desc",
  "price-asc": "price asc",
  "date-desc": "date desc",
  "city-level-score": "city score",
};

const SearchEngine = ({ setCategorySelected }) => {
  const router = useRouter();
  const [filters, setFilters] = useState({
    purpose: "",
    sort: "",
    rentFrequency: "",
    categoryExternalID: "",
  });

  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    setCategorySelected("");
    router.push(
      `/search/purpose=${filters.purpose}&sort=${filters.sort}&rentFrequency=${filters.rentFrequency}&categoryExternalID=${filters.categoryExternalID}`
    );
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center text-center border border-dark dark:border-white rounded-full py-2 px-4 w-full dark:bg-dark">
      <div className="search-section group">
        <label className="search-section-label">
          {filters.purpose ? filters.purpose.split("-").join(" ") : "purpose"}
        </label>
        <div className="search-section-buttons">
          <button onClick={handleFilters} name="purpose" value="for-rent">
            for rent
          </button>
          <button onClick={handleFilters} name="purpose" value="for-sale">
            for sale
          </button>
        </div>
      </div>
      <div
        className={`${
          filters.purpose !== "for-sale" && "group"
        } search-section`}
      >
        <label className="search-section-label">
          {filters.purpose == "for-sale"
            ? "-"
            : filters.rentFrequency
            ? filters.rentFrequency
            : "frequency"}
        </label>
        <div className="search-section-buttons">
          <button onClick={handleFilters} name="rentFrequency" value="daily">
            daily
          </button>
          <button onClick={handleFilters} name="rentFrequency" value="weekly">
            weekly
          </button>
          <button onClick={handleFilters} name="rentFrequency" value="monthly">
            monthly
          </button>
          <button onClick={handleFilters} name="rentFrequency" value="yearly">
            yearly
          </button>
        </div>
      </div>
      <div className="search-section group">
        <label className="search-section-label">
          {filters.categoryExternalID
            ? places[filters.categoryExternalID]
            : "place"}
        </label>
        <div className="search-section-buttons">
          <button onClick={handleFilters} name="categoryExternalID" value="4">
            Apartment
          </button>
          <button onClick={handleFilters} name="categoryExternalID" value="16">
            Townhouses
          </button>
          <button onClick={handleFilters} name="categoryExternalID" value="3">
            Villas
          </button>
          <button onClick={handleFilters} name="categoryExternalID" value="18">
            Penthouses
          </button>
          <button onClick={handleFilters} name="categoryExternalID" value="21">
            Hotel Apartments
          </button>
        </div>
      </div>
      <div className="search-section group">
        <label className="search-section-label">
          {filters.sort ? sorts[filters.sort] : "sort"}
        </label>
        <div className="search-section-buttons">
          <button onClick={handleFilters} name="sort" value="price-desc">
            price desc
          </button>
          <button onClick={handleFilters} name="sort" value="price-asc">
            price asc
          </button>
          <button onClick={handleFilters} name="sort" value="date-desc">
            date desc
          </button>
          <button onClick={handleFilters} name="sort" value="city-level-score">
            city score
          </button>
        </div>
      </div>
      <button onClick={handleSearch} className="text-xl">
        <BiSearch />
      </button>
    </div>
  );
};

export default SearchEngine;
