"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

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
    <div className="flex flex-row gap-2 items-center justify-center text-center border border-slate-700 dark:border-slate-200 rounded-full py-2 px-4">
      <div className="search-section">
        <label className="search-section-label">purpose</label>
        <div className="search-section-buttons">
          <button onClick={handleFilters} name="purpose" value="for-rent">
            rent
          </button>
          <button onClick={handleFilters} name="purpose" value="for-sale">
            sale
          </button>
        </div>
      </div>
      <div className="search-section">
        <label className="search-section-label">frequency</label>
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
      <div className="search-section">
        <label className="search-section-label">place</label>
        <div className="search-section-buttons">
          {/* Apartment -> 4|Townhouses -> 16|Villas -> 3|Penthouses -> 18|Hotel Apartments -> 21|
          Villa Compound -> 19|Residential Plot -> 14|Residential Floor -> 12|Residential Building -> 17|Office -> 5|Shop -> 6|Warehouse -> 7|Labour camp -> 9|Commercial Villa -> 25|Bulk Units -> 20|Commercial Plot -> 15|Commercial Floor -> 13|Commercial Building -> 10|Factory -> 8|Industrial Land -> 22|Mixed Use Land -> 23|Showroom -> 24|Other Commercial -> 11 */}
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
      <div className="search-section">
        <label className="search-section-label">sort</label>
        <div className="search-section-buttons">
          <button onClick={handleFilters} name="sort" value="price-desc">
            price-desc
          </button>
          <button onClick={handleFilters} name="sort" value="price-asc">
            price-asc
          </button>
          <button onClick={handleFilters} name="sort" value="city-level-score">
            city-level-score
          </button>
          <button onClick={handleFilters} name="sort" value="date-desc">
            date-desc
          </button>
          <button onClick={handleFilters} name="sort" value="verified-score">
            verified-score
          </button>
        </div>
      </div>
      <button onClick={handleSearch}>
        <BiSearch />
      </button>
    </div>
  );
};

export default SearchEngine;
