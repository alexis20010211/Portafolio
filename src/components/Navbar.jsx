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
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt="Foto de perfil"
            className="w-9 h-9 rounded-full object-cover object-center border-2 border-indigo-400 cursor-pointer"
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
          <li onClick={() => scrollToSection("#about")} className="hover:text-indigo-400 cursor-pointer">Sobre Mi</li>
          <li onClick={() => scrollToSection("#skills")} className="hover:text-indigo-400 cursor-pointer">Habilidades</li>
          <li onClick={() => scrollToSection("#projects")} className="hover:text-indigo-400 cursor-pointer">Proyectos</li>
          <li onClick={() => scrollToSection("#contact")} className="hover:text-indigo-400 cursor-pointer">Contacto</li>
        </ul>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm">
            <li onClick={() => scrollToSection("#hero")} className="hover:text-indigo-400 cursor-pointer">Inicio</li>
            <li onClick={() => scrollToSection("#about")} className="hover:text-indigo-400 cursor-pointer">Sobre Mi</li>
            <li onClick={() => scrollToSection("#skills")} className="hover:text-indigo-400 cursor-pointer">Habilidades</li>
            <li onClick={() => scrollToSection("#projects")} className="hover:text-indigo-400 cursor-pointer">Proyectos</li>
            <li onClick={() => scrollToSection("#contact")} className="hover:text-indigo-400 cursor-pointer">Contacto</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;