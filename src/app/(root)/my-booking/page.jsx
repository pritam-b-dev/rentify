import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("session:", session);
  console.log("userId:", session?.user?.id);
  const userId = session?.user?.id;

  const res = await fetch(`http://localhost:5000/bookings/${userId}`);
  const bookings = await res.json();

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500 text-center py-20">No bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row overflow-hidden"
            >
              <div className="relative w-full sm:w-48 h-40 shrink-0">
                <Image
                  src={booking.imageUrl}
                  alt={booking.carName}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 p-5 flex flex-col justify-between">
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-gray-900">
                    {booking.carName}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>{booking.date}</span>
                    <span>{booking.pickupLocation}</span>
                    <span>
                      Driver: {booking.driverNeeded === "yes" ? "Yes" : "No"}
                    </span>
                  </div>
                  {booking.specialNote && (
                    <p className="text-sm text-gray-400 italic">
                      "{booking.specialNote}"
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-2xl font-bold text-gray-900">
                    ${booking.dailyPrice}
                    <span className="text-sm font-normal text-gray-400">
                      {" "}
                      / day
                    </span>
                  </p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
