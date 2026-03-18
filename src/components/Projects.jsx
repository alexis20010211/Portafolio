import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    name: "Sistema de Soporte Técnico",
    description: "Gestión de tickets y seguimiento de incidencias.",
    tech: "Java • Spring Boot • MySQL",
    github: "https://github.com/alexis20010211/Gestion-de-soporte-tecnico",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFD90cfPhML87KtMbsRMTwVAfmFT_fZn3Phw&s"
  },
  {
    name: "Sistema Financiero SERF",
    description: "Gestión de operaciones y administración de clientes.",
    tech: "Java • Spring Boot • MySQL",
    github: "https://github.com/alexis20010211/Sistema-financiero-SERF-FINANCORP-",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeCLrORd8Gq3QF8ZNy2XtQVQcX8UR5ymlkw&s"
  },
  {
    name: "Veterinaria Patitas Felices",
    description: "Gestión de mascotas, citas e historial clínico.",
    tech: "TypeScript • Node • DB",
    github: "https://github.com/alexis20010211/Veterinaria-patitas-felices",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SFDnM2q5qS1VuO7rCpInBk2YDSLwFvq5gw&s"
  },
  {
    name: "Gestión con Patrones de Diseño",
    description: "Aplicación con patrones Adapter, Proxy, Observer y Strategy.",
    tech: "Java • OOP • Patterns",
    github: "https://github.com/alexis20010211/gestion-app-",
    image: "https://img.itmastersmag.com/wp-content/uploads/2023/10/29095039/Captura-de-pantalla-2024-11-29-a-las-9.49.50-1-1920x960.jpg"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-20 px-6 text-white"
    >
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Mis Proyectos
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((p, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedProject(p)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer relative bg-[#0f172a] rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:border-indigo-500 transition"
          >

            {/* Imagen */}
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center gap-4">

              <span className="bg-indigo-500 px-5 py-2 rounded-lg text-sm">
                Ver Proyecto
              </span>

            </div>

            {/* Contenido */}
            <div className="p-5">

              <h3 className="text-lg font-bold text-indigo-400 mb-2">
                {p.name}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                {p.description}
              </p>

              <span className="text-xs text-indigo-300">
                {p.tech}
              </span>

            </div>

          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}

export default Projects;