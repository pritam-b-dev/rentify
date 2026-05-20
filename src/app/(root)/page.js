import Image from "next/image";
import Banner from "../../components/Banner";
import AvailableCars from "../../components/AvailableCars";

export default function Home() {
  return (
    <div>
      <Banner />
      <AvailableCars />
    </div>
  );
}
