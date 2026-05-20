import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import BookingCard from "../../../../components/BookingCard";
import EditCarDetails from "../../../../components/EditCarDetails";
import DeleteCar from "../../../../components/DeleteCar";

const CarDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/car/${id}`);
  const carDetails = await res.json();
  console.log(carDetails);
  const {
    _id,
    carName,
    dailyPrice,
    carType,
    seatCapacity,
    availabilityStatus,
    pickupLocation,
    imageUrl,
    description,
  } = carDetails;
  const isAvailable = availabilityStatus === "Available";
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/all-cars"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            <FaArrowLeftLong />
            <span>Back to All Cars</span>
          </Link>
          <div className="flex gap-2">
            <EditCarDetails carDetails={carDetails} />
            <DeleteCar carDetails={carDetails} />
          </div>
        </div>

        <div className="w-full rounded-2xl overflow-hidden bg-white shadow-sm mb-8 h-80 relative">
          <Image alt={carName} src={imageUrl} fill className="object-cover" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {carName}
              </h1>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <FaMapMarkerAlt className="text-red-400" />
                <span>Pick up from {pickupLocation}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                {carType}
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                {seatCapacity} Seats
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  isAvailable
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {isAvailable ? "Available" : "Unavailable"}
              </span>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>

          <BookingCard carDetails={carDetails} />
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
