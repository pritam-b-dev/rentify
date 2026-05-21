"use client";
import React, { useEffect, useState } from "react";
import CarCard from "../../../components/CarCard";

const AllCarsPage = () => {
  const [allCars, setAllCars] = useState([]);
  const [search, setSearch] = useState("");
  const [carType, setCarType] = useState("");

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (carType) params.append("carType", carType);

    fetch(`http://localhost:5000/car?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => setAllCars(data));
  }, [search, carType]);

  return (
    <div className="container mx-auto my-5 p-2">
      <h1 className="my-5 font-bold text-2xl">Explore all Cars</h1>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by car name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 text-sm w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <select
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <option value="">All Types</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Truck">Truck</option>
          <option value="Convertible">Convertible</option>
          <option value="Hatchback">Hatchback</option>
        </select>

        {/* Clear Button */}
        {(search || carType) && (
          <button
            onClick={() => {
              setSearch("");
              setCarType("");
            }}
            className="text-sm text-gray-500 hover:text-gray-800 underline"
          >
            Clear
          </button>
        )}
      </div>

      {/* Cars Grid */}
      {allCars.length === 0 ? (
        <p className="text-center text-gray-400 py-20">No cars found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {allCars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCarsPage;
