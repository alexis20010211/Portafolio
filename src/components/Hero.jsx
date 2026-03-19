import { motion } from "framer-motion";
import BackgroundMusic from "./BackgroundMusic";

function HeroFullWidth() {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-12 lg:px-32 py-32 gap-16 text-[#e2e8f0] overflow-hidden">

      {/* 🌌 Efectos (sin fondo oscuro) */}
      <div className="absolute inset-0 -z-20">
        {/* Glow Orbs */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 60, repeat: Infinity }}
          className="absolute w-[800px] h-[800px] bg-indigo-500/20 blur-[200px] rounded-full top-[-200px] left-[-200px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 80, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] bg-blue-400/20 blur-[180px] rounded-full bottom-[-150px] right-[-150px]"
        />

        {/* Overlay SUAVE (sin negro) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/40 to-transparent" />
      </div>

      <BackgroundMusic />

      {/* 🧠 TEXTO */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center lg:text-left lg:flex-1"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-indigo-400 mb-3 text-xs uppercase tracking-[0.3em]"
        >
          Hola, soy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent"
        >
          Bryan Ramos
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl lg:text-3xl text-indigo-300 mb-6 font-semibold"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-gray-400 max-w-md mx-auto lg:mx-0 mb-8 text-sm md:text-base leading-relaxed"
        >
          Construyo experiencias digitales modernas con alto rendimiento,
          diseño atractivo y arquitectura escalable.
        </motion.p>

        {/* 🎯 BOTONES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <button className="relative px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/30 overflow-hidden group">
            <span className="relative z-10">Download CV</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700" />
          </button>

          <button
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              projectsSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-500/10 transition backdrop-blur-md"
          >
            Ver Proyectos
          </button>
        </motion.div>
      </motion.div>

      {/* 🧬 IMAGEN */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="relative flex justify-center items-center lg:flex-1 z-10 mt-12 lg:mt-0"
      >
        <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden">

          {/* Halo */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-indigo-500/30 blur-3xl"
          />

          {/* Imagen */}
          <motion.img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt="profile"
            whileHover={{ scale: 1.05 }}
            className="absolute inset-0 w-full h-full object-cover object-[40%_20%] rounded-full z-10"
          />

          {/* Anillos */}
          <motion.div
            className="absolute inset-0 border border-indigo-400/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-8 border border-blue-400/30 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />

          {/* Dots */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-2 h-2 bg-indigo-400 rounded-full top-2 left-1/2"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute w-2 h-2 bg-blue-400 rounded-full bottom-2 right-1/2"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroFullWidth;