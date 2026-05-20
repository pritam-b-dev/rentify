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
  const [isOpen, setIsOpen] = useState(false);
  const [driverNeeded, setDriverNeeded] = useState("no");
  const [specialNote, setSpecialNote] = useState("");
  const [date, setDate] = useState("");

  const isAvailable = availabilityStatus === "Available";

  const handleConfirm = () => {
    const bookingData = { carId, driverNeeded, specialNote, date };
    console.log(bookingData);
    setIsOpen(false);
  };

  return (
    <>
      {/* Book Now Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-gray-900 text-white px-8 py-3 rounded-xl font-medium"
      >
        {isAvailable ? "Book Now" : "Not Available"}
      </Button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Confirm Booking
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 text-sm">Daily Rate</p>
              <p className="text-3xl font-bold text-gray-900">
                ${dailyPrice}
                <span className="text-sm font-normal text-gray-400">
                  {" "}
                  / day
                </span>
              </p>
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
              onClick={handleConfirm}
              disabled={!date}
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium"
            >
              Confirm Booking
            </Button>

            <p className="text-xs text-center text-gray-400">
              Free cancellation within 24 hours
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingCard;
