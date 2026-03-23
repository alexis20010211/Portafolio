import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{
        y: -80,
        opacity: 0,
        scale: 0.98,
        rotateX: 8,
        filter: "blur(6px)"
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)"
      }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 16,
        mass: 0.9
      }}
      style={{
        transformPerspective: 1200,
        transformOrigin: "top center"
      }}
    >
      {/* 🔥 sombra sutil para profundidad */}
      <div className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        {children}
      </div>
    </motion.div>
  );
}