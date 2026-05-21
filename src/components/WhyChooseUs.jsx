import {
  FaShieldAlt,
  FaClock,
  FaDollarSign,
  FaMapMarkerAlt,
  FaCar,
  FaUserCheck,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Fully Insured",
    desc: "Every car comes with full insurance coverage for your peace of mind.",
    bg: "#E6F1FB",
    color: "#185FA5",
  },
  {
    icon: <FaClock />,
    title: "24/7 Support",
    desc: "Our team is available around the clock to assist you anytime.",
    bg: "#EAF3DE",
    color: "#3B6D11",
  },
  {
    icon: <FaDollarSign />,
    title: "Best Prices",
    desc: "Transparent pricing with no hidden fees. Pay only for what you use.",
    bg: "#FAEEDA",
    color: "#854F0B",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Multiple Locations",
    desc: "Pick up and drop off at convenient locations across the city.",
    bg: "#FBEAF0",
    color: "#993556",
  },
  {
    icon: <FaCar />,
    title: "Wide Selection",
    desc: "From sedans to SUVs — find the right car for every occasion.",
    bg: "#E1F5EE",
    color: "#0F6E56",
  },
  {
    icon: <FaUserCheck />,
    title: "Optional Driver",
    desc: "Need a driver? Add one to your booking with just one click.",
    bg: "#EEEDFE",
    color: "#534AB7",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <p className="text-sm md:text-2xl lg:text-4xl text-gray-400 uppercase tracking-widest mb-2 text-center">
        Why choose us
      </p>
      <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-8 text-center">
        Everything you need in one place
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl p-5"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              style={{ background: f.bg }}
            >
              <span style={{ color: f.color }}>{f.icon}</span>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">{f.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
