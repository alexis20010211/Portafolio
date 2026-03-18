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

        {/* FOTO + NOMBRE */}
        <div className="flex items-center gap-3">
          <img
            src="profile.png"
            alt="Foto de perfil"
            className="w-9 h-9 rounded-full object-cover border-2 border-indigo-400 cursor-pointer"
            onClick={() => scrollToSection("#hero")}
          />
          <h1
            className="text-lg font-bold text-indigo-400 cursor-pointer"
            onClick={() => scrollToSection("#hero")}
          >
            Bryan Alexis Ramos Borjas
          </h1>
        </div>

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
            Sobre Mi
          </li>

          <li
            className="hover:text-indigo-400 cursor-pointer"
            onClick={() => scrollToSection("#skills")}
          >
            Habilidades
          </li>

          <li
            className="hover:text-indigo-400 cursor-pointer"
            onClick={() => scrollToSection("#projects")}
          >
            Proyectos
          </li>

          <li
            className="hover:text-indigo-400 cursor-pointer"
            onClick={() => scrollToSection("#contact")}
          >
            Contacto
          </li>
        </ul>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm">
            <li
              className="hover:text-indigo-400 cursor-pointer"
              onClick={() => scrollToSection("#hero")}
            >
              Inicio
            </li>

            <li
              className="hover:text-indigo-400 cursor-pointer"
              onClick={() => scrollToSection("#about")}
            >
              Sobre Mi
            </li>

            <li
              className="hover:text-indigo-400 cursor-pointer"
              onClick={() => scrollToSection("#skills")}
            >
              Habilidades
            </li>

            <li
              className="hover:text-indigo-400 cursor-pointer"
              onClick={() => scrollToSection("#projects")}
            >
              Proyectos
            </li>

            <li
              className="hover:text-indigo-400 cursor-pointer"
              onClick={() => scrollToSection("#contact")}
            >
              Contacto
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;