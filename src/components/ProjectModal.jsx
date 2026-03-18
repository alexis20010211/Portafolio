import { motion } from "framer-motion";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 px-4">

      {/* Fondo click para cerrar */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-[#0f172a] max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl border border-slate-700 z-10"
      >

        {/* Imagen */}
        <img
          src={project.image}
          className="w-full h-56 object-cover"
        />

        {/* Contenido */}
        <div className="p-6">

          <h2 className="text-2xl font-bold text-indigo-400 mb-3">
            {project.name}
          </h2>

          <p className="text-gray-400 mb-4">
            {project.description}
          </p>

          <p className="text-sm text-indigo-300 mb-6">
            {project.tech}
          </p>

          {/* Botones */}
          <div className="flex gap-4">

            <a
              href={project.github}
              target="_blank"
              className="bg-indigo-500 px-5 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Ver GitHub
            </a>

            <button
              onClick={onClose}
              className="border border-gray-500 px-5 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Cerrar
            </button>

          </div>

        </div>

      </motion.div>
    </div>
  );
}

export default ProjectModal;