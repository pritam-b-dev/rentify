import { FaSearch, FaCalendarAlt, FaCreditCard, FaKey } from "react-icons/fa";

const steps = [
  {
    num: "01",
    icon: <FaSearch />,
    title: "Browse Cars",
    desc: "Search and filter by car type, location, and availability.",
  },
  {
    num: "02",
    icon: <FaCalendarAlt />,
    title: "Choose Dates",
    desc: "Select your rental start and end dates to see total pricing.",
  },
  {
    num: "03",
    icon: <FaCreditCard />,
    title: "Confirm Booking",
    desc: "Review your order and confirm with a single click.",
  },
  {
    num: "04",
    icon: <FaKey />,
    title: "Hit the Road",
    desc: "Pick up your car at the location and enjoy your journey.",
  },
];

const HowItWorks = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <p className="text-sm md:text-2xl lg:text-4xl text-center text-gray-400 uppercase tracking-widest mb-2">
        How it works
      </p>
      <h2 className="text-lg md:text-2xl text-center lg:text-3xl font-semibold text-gray-900 mb-8">
        Rent a car in 4 simple steps
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl p-5"
          >
            <p className="text-xs text-gray-400 mb-3">{s.num}</p>
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-3 text-gray-500">
              {s.icon}
            </div>
            <h3 className="font-medium text-gray-900 mb-1">{s.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
