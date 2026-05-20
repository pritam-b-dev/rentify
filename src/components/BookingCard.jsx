"use client";
import { Button } from "@heroui/react";
import { useState } from "react";

const BookingCard = ({ carDetails }) => {
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
  const [driverNeeded, setDriverNeeded] = useState("no");
  const [specialNote, setSpecialNote] = useState("");
  const [date, setDate] = useState("");

  const isAvailable =
    availabilityStatus?.toString().toLowerCase() === "available";

  const handleBooking = () => {
    const bookingData = {
      carId,
      driverNeeded,
      specialNote,
      date,
    };
    console.log(bookingData);
    // API call
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5 sticky top-6">
      <h1 className="font-bold text-3xl">Book Here!</h1>
      <div>
        <p className="text-gray-400 text-sm">Daily Rate</p>
        <p className="text-4xl font-bold text-gray-900">
          ${dailyPrice}
          <span className="text-base font-normal text-gray-400"> / day</span>
        </p>
      </div>

      <hr className="border-gray-100" />

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Car Type</span>
          <span className="font-medium text-gray-800">{carType}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Seats</span>
          <span className="font-medium text-gray-800">
            {seatCapacity} Person
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Pickup</span>
          <span className="font-medium text-gray-800">{pickupLocation}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Status</span>
          <span
            className={`font-medium ${isAvailable ? "text-green-600" : "text-red-500"}`}
          >
            {isAvailable ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>

      <hr className="border-gray-100" />

      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm text-gray-500">Booking Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-gray-500">Driver Needed?</label>
          <div className="flex gap-3">
            <button
              onClick={() => setDriverNeeded("yes")}
              className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-colors ${
                driverNeeded === "yes"
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setDriverNeeded("no")}
              className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-colors ${
                driverNeeded === "no"
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              No
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm text-gray-500">Special Note</label>
          <textarea
            value={specialNote}
            onChange={(e) => setSpecialNote(e.target.value)}
            placeholder="Any special request..."
            rows={3}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
      </div>

      <Button
        onClick={handleBooking}
        className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium"
        disabled={!isAvailable || !date}
      >
        {isAvailable ? "Book Now" : "Not Available"}
      </Button>

      <p className="text-xs text-center text-gray-400">
        Free cancellation within 24 hours
      </p>
    </div>
  );
};

export default BookingCard;
