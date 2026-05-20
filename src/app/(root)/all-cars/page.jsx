import React from "react";
import CarCard from "../../../components/CarCard";

const AllCarsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`);
  const allCars = await res.json();
  console.log(allCars);
  return (
    <div className="container mx-auto my-5 p-2">
      <h1 className="my-5 font-bold text-2xl">Explore all Cars</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {allCars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default AllCarsPage;
