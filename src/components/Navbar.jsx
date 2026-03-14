function Navbar() {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg font-bold text-indigo-400">
          Bryan Alexis Ramos Borjas
        </h1>

        <ul className="flex gap-6 text-sm">
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
    </nav>
  );
}

export default Navbar;