import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="relative z-10">
      <Navbar />
      {children}
    </div>
  );
}