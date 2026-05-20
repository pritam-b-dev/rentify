import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";

const CarCard = ({ car }) => {
  const {
    _id,
    imageUrl,
    availabilityStatus,
    carName,
    pickupLocation,
    dailyPrice,
  } = car;
  return (
    <div className="border border-neutral-500 p-5 rounded-2xl bg-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <Image
        alt={carName}
        src={imageUrl}
        height={500}
        width={500}
        className="w-full h-48 object-contain mx-auto"
      />
      <div className="text-xl font-bold text-neutral-800 mb-1">{carName}</div>
      <div className="flex gap-2 items-center">
        <FaMapMarkerAlt /> <span>Pickup from {pickupLocation}</span>
      </div>
      <div className="flex justify-between text-slate-700">
        <h1>{availabilityStatus}</h1>
        <span className="text-amber-800">${dailyPrice}/day</span>
      </div>
      <Link href={`/all-cars/${_id}`}>
        <Button
          variant="ghost"
          className="mt-3 w-full bg-neutral-500 hover:bg-neutral-700 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 border-none transition-colors"
        >
          Show Details
          <FaExternalLinkAlt />
        </Button>
      </Link>
    </div>
  );
};

export default CarCard;
