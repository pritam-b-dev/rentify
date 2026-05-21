"use client";
import { Button } from "@heroui/react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const BookingCard = ({ carDetails }) => {
  const { data: session } = authClient.useSession();
  const {
    _id,
    carName,
    imageUrl,
    dailyPrice,
    pickupLocation,
    availabilityStatus,
  } = carDetails;

  const [isOpen, setIsOpen] = useState(false);
  const [driverNeeded, setDriverNeeded] = useState("no");
  const [specialNote, setSpecialNote] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const isAvailable = availabilityStatus === "Available";

  const totalDays =
    startDate && endDate
      ? Math.ceil(
          (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24),
        )
      : 0;

  const totalPrice = totalDays * dailyPrice;

  const handleConfirm = async () => {
    const bookingData = {
      carId: _id,
      carName,
      imageUrl,
      dailyPrice,
      totalDays,
      totalPrice,
      startDate,
      endDate,
      pickupLocation,
      driverNeeded,
      specialNote,
      userId: session?.user?.id,
      userName: session?.user?.name,
      userImage: session?.user?.image,
      status: "pending",
      createdAt: new Date(),
    };

    const { data: tokenData } = await authClient.token();

    const res = await fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();
    if (data.insertedId) {
      alert("Booking confirmed!");
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        disabled={!isAvailable}
        className="bg-neutral-500 hover:bg-neutral-700 text-white px-8 py-3 rounded-xl font-medium"
      >
        {isAvailable ? "Book Now" : "Not Available"}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6 space-y-5 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Confirm Booking
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* Daily Rate */}
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
              {/* Start Date */}
              <div className="space-y-1">
                <label className="text-sm text-gray-500">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              {/* End Date */}
              <div className="space-y-1">
                <label className="text-sm text-gray-500">End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate || new Date().toISOString().split("T")[0]}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              {/* Total Price */}
              {totalDays > 0 && (
                <div className="bg-gray-50 rounded-xl p-4 space-y-1">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Duration</span>
                    <span>
                      {totalDays} day{totalDays > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-900">
                    <span>Total Price</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>
              )}

              {/* Driver Needed */}
              <div className="space-y-1">
                <label className="text-sm text-gray-500">Driver Needed?</label>
                <div className="flex gap-3">
                  {["yes", "no"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setDriverNeeded(option)}
                      className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-colors ${
                        driverNeeded === option
                          ? "bg-neutral-700 text-white border-gray-900"
                          : "bg-neutral-200 text-black border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {option === "yes" ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Note */}
              <div className="space-y-1">
                <label className="text-sm text-gray-500">Special Note</label>
                <textarea
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  placeholder="Any special request..."
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>

            {/* Confirm Button */}
            <Button
              onClick={handleConfirm}
              disabled={!startDate || !endDate || totalDays <= 0}
              className="w-full bg-neutral-500 hover:bg-neutral-700 text-white py-3 rounded-xl font-medium"
            >
              Confirm Booking — ${totalPrice}
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
