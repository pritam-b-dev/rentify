import CarCarousel from "./CarCarousel";

const AvailableCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`);
  const allCars = await res.json();
  const availableCars = allCars
    .filter((car) => car.availabilityStatus === "Available")
    .slice(0, 6);

  return (
    <div id="available-cars" className="container mx-auto my-5 p-2">
      <h1 className="my-5 font-bold text-2xl">Available Cars</h1>
      <CarCarousel cars={availableCars} />
    </div>
  );
};

export default AvailableCars;
