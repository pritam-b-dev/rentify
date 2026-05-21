import Image from "next/image";
import Banner from "../../components/Banner";
import AvailableCars from "../../components/AvailableCars";
import WhyChooseUs from "../../components/WhyChooseUs";
import HowItWorks from "../../components/HowItWorks";

export default function Home() {
  return (
    <div>
      <Banner />
      <AvailableCars />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  );
}
