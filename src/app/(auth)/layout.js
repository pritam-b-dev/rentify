export default function AuthLayout({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      <main className="grow">{children}</main>
    </div>
  );
}
