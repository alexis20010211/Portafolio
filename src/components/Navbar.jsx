import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-lg font-bold text-indigo-400">
          Bryan Alexis Ramos Borjas
        </h1>

        {/* BOTON HAMBURGUESA */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-6 text-sm">

          <li
            className="hover:text-indigo-400 cursor-pointer"
            onClick={() => scrollToSection("#about")}
          >
            About
          </li>

          <li
            className="hover:text-indigo-400 cursor-pointer"
            onClick={() => scrollToSection("#skills")}
          >
            Skills
          </li>

          <li
            className="hover:text-indigo-400 cursor-pointer"
            onClick={() => scrollToSection("#projects")}
          >
            Projects
          </li>

          <li
            className="hover:text-indigo-400 cursor-pointer"
            onClick={() => scrollToSection("#contact")}
          >
            Contact
          </li>

        </ul>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm">

            <li
              className="hover:text-indigo-400 cursor-pointer"
              onClick={() => scrollToSection("#about")}
            >
              About
            </li>

            <li
              className="hover:text-indigo-400 cursor-pointer"
              onClick={() => scrollToSection("#skills")}
            >
              Skills
            </li>

            <li
              className="hover:text-indigo-400 cursor-pointer"
              onClick={() => scrollToSection("#projects")}
            >
              Projects
            </li>

            <li
              className="hover:text-indigo-400 cursor-pointer"
              onClick={() => scrollToSection("#contact")}
            >
              Contact
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;