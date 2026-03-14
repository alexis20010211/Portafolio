const projects = [
  {
    name: "Sistema de Soporte Técnico",
    description: "Gestión de tickets de soporte técnico con registro de incidencias y seguimiento de solicitudes.",
    tech: "Java • Spring Boot • MySQL",
    github: "https://github.com/alexis20010211/Gestion-de-soporte-tecnico",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFD90cfPhML87KtMbsRMTwVAfmFT_fZn3Phw&s" // imagen de ejemplo
  },
  {
    name: "Sistema Financiero SERF FINANCORP",
    description: "Sistema financiero para la gestión de operaciones y administración de clientes.",
    tech: "Java • Spring Boot • MySQL",
    github: "https://github.com/alexis20010211/Sistema-financiero-SERF-FINANCORP-",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeCLrORd8Gq3QF8ZNy2XtQVQcX8UR5ymlkw&s"
  },
  {
    name: "Veterinaria Patitas Felices",
    description: "Sistema para gestión de mascotas, citas veterinarias e historial clínico.",
    tech: "TypeScript • Node • Database",
    github: "https://github.com/alexis20010211/Veterinaria-patitas-felices",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SFDnM2q5qS1VuO7rCpInBk2YDSLwFvq5gw&s"
  },
  {
    name: "Gestión App con Patrones de Diseño",
    description: "Aplicación para PYMES implementando patrones de diseño como Adapter, Proxy, Observer y Strategy.",
    tech: "Java • OOP • Design Patterns",
    github: "https://github.com/alexis20010211/gestion-app-",
    image: "https://img.itmastersmag.com/wp-content/uploads/2023/10/29095039/Captura-de-pantalla-2024-11-29-a-las-9.49.50-1-1920x960.jpg"
  }
];

function Projects() {
  return (
    <section id="projects" className="section max-w-6xl mx-auto py-24">
      <h2 className="title text-center mb-12 text-white">Proyectos</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded-xl hover:-translate-y-2 transition transform shadow-lg"
          >
            {/* Imagen */}
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover rounded mb-4"
            />

            <h3 className="text-xl font-bold mb-2 text-indigo-400">{p.name}</h3>
            <p className="text-gray-400 mb-2">{p.description}</p>

            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 text-sm block mb-2 hover:underline"
              >
                Ver en GitHub
              </a>
            )}

            <span className="text-indigo-400 text-sm">{p.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;