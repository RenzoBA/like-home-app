"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";

const places = {
  4: "apartment",
  16: "townhouses",
  3: "villas",
  18: "penthouses",
  21: "hotel apart",
  19: "villa compound",
  7: "warehouse",
};

const sorts = {
  "price-desc": "price desc",
  "price-asc": "price asc",
  "date-desc": "date desc",
  "city-level-score": "city score",
};

const SearchEngine = () => {
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
        className={`search-section ${
          filters.purpose !== "for-sale" && "group"
        }`}
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
            Townhouse
          </button>
          <button onClick={handleFilters} name="categoryExternalID" value="3">
            Villas
          </button>
          <button onClick={handleFilters} name="categoryExternalID" value="18">
            Penthouse
          </button>
          <button onClick={handleFilters} name="categoryExternalID" value="21">
            Hotel Apart
          </button>
          <button onClick={handleFilters} name="categoryExternalID" value="19">
            Villa Comp
          </button>
          <button onClick={handleFilters} name="categoryExternalID" value="7">
            Warehouse
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

      <button onClick={handleSearch} className="text-xl hover:text-theme">
        <BiSearch />
      </button>
    </div>
  );
};

export default SearchEngine;
