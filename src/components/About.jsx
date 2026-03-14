import { FaUser, FaBullseye, FaCogs } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-32 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        SOBRE MÍ
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition transform shadow-lg flex flex-col items-center gap-4">
          <FaUser className="text-indigo-400 text-5xl" />
          <h3 className="font-bold mb-3 text-indigo-400">Quién Soy</h3>
          <p className="text-gray-400 text-justify">
            Soy Full Stack Developer con pasión por crear aplicaciones web modernas y funcionales. Disfruto del proceso completo de desarrollo, desde diseñar interfaces intuitivas hasta construir APIs robustas y eficientes. Me encanta enfrentar desafíos que me permitan aprender y mejorar constantemente.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition transform shadow-lg flex flex-col items-center gap-4">
          <FaBullseye className="text-indigo-400 text-5xl" />
          <h3 className="font-bold mb-3 text-indigo-400">Mi Objetivo</h3>
          <p className="text-gray-400 text-justify">
            Mi objetivo es desarrollar soluciones escalables y eficientes que resuelvan problemas del mundo real. Busco implementar buenas prácticas de desarrollo, optimizar el rendimiento y garantizar que cada proyecto cumpla con altos estándares de calidad y seguridad.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition transform shadow-lg flex flex-col items-center gap-4">
          <FaCogs className="text-indigo-400 text-5xl" />
          <h3 className="font-bold mb-3 text-indigo-400">Mi Perfil</h3>
          <p className="text-gray-400 text-justify">
            Apasionado por la tecnología, el código limpio y las arquitecturas modernas. Me interesa colaborar en proyectos que requieran creatividad, resolución de problemas y aprendizaje continuo, aportando siempre ideas prácticas y soluciones eficientes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;