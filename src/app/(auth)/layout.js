import NavBar from "../../components/NavBar";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      <NavBar />
      <main className="grow">{children}</main>
    </div>
  );
}
