import React from "react";
import CarCard from "./CarCard";
import AnimatedFeaturedCarsCard from "./AnimatedFeaturedCarsCard";

const AvailableCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`);
  const allCars = await res.json();
  console.log(allCars);
  return (
    <div id="available-cars" className="container mx-auto my-5 p-2">
      <h1 className="my-5 font-bold text-2xl">Available Cars</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {allCars
          .filter((car) => car.availabilityStatus === "Available")
          .slice(0, 6)
          .map((car) => (
            <AnimatedFeaturedCarsCard key={car._id} car={car} />
          ))}
      </div>
    </div>
  );
};

export default AvailableCars;
