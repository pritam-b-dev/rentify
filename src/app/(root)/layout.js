import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Rentify",
  description: "Car Rental Platform",
};

export default function RootLayout({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      <NavBar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
