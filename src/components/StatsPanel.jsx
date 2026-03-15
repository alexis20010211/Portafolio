import { motion } from "framer-motion";

export default function StatsPanel({ likes, visitors, comments }) {
  return (
    <div className="flex gap-8 items-center mt-6 justify-center lg:justify-start">
      
      {/* Likes */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md"
      >
        <span>👍</span>
        <span className="font-bold">{likes}</span>
      </motion.div>

      {/* Comentarios */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md"
      >
        <span>💬</span>
        <span className="font-bold">{comments}</span>
      </motion.div>

      {/* Visitantes */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-2 bg-indigo-400 text-white px-4 py-2 rounded-lg shadow-md"
      >
        <span>👁️</span>
        <span className="font-bold">{visitors}</span>
      </motion.div>
    </div>
  );
}
