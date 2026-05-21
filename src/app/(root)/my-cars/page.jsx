import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import CarCard from "@/components/CarCard";

const MyAddedCarsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const userId = session?.user?.id;

  if (!userId) {
    return <p className="text-center py-20">Please login to see your cars.</p>;
  }

  const res = await fetch(`http://localhost:5000/car/user/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const myCars = await res.json();

  return (
    <div className="container mx-auto my-5 p-2">
      <h1 className="my-5 font-bold text-2xl">My Added Cars</h1>

      {myCars.length === 0 ? (
        <p className="text-center text-gray-400 py-20">
          You have not added any cars yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {myCars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedCarsPage;
