// src/components/Hero.jsx
import BackgroundMusic from "./BackgroundMusic";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center lg:items-start justify-center max-w-6xl mx-auto px-6 py-20 gap-16 bg-[#020617] text-[#e2e8f0] relative">
      
      {/* Música de fondo */}
      <BackgroundMusic />

      {/* Texto */}
      <div className="text-center lg:text-left lg:w-1/2">
        <p className="text-indigo-400 mb-3">Hola mundo, Soy</p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Bryan Ramos Borjas
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-indigo-400 mb-6">
          Full Stack Developer
        </h2>

        <p className="text-gray-400 max-w-md mx-auto lg:mx-0 mb-6 text-justify text-sm md:text-base">
          Apasionado por construir aplicaciones web escalables y experiencias digitales modernas, disfruto combinando creatividad y lógica para desarrollar soluciones que realmente impacten a los usuarios. Me motiva aprender continuamente nuevas tecnologías y aplicar buenas prácticas de desarrollo, desde la optimización del rendimiento hasta la seguridad y la accesibilidad.  
          Tengo experiencia trabajando tanto en el frontend como en el backend, creando interfaces intuitivas, sistemas robustos y aplicaciones completas que integran funcionalidades complejas de manera eficiente.  
          Además, me gusta colaborar en proyectos que requieren trabajo en equipo, donde puedo aportar ideas, resolver problemas y mejorar procesos, siempre buscando entregar un producto de calidad y con un enfoque práctico. Actualmente me encuentro estudiando <strong>en IDAT</strong>, lo que me permite complementar mi experiencia práctica con conocimientos académicos actualizados.
        </p>

        <button className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600 transition shadow-md">
          Download CV
        </button>
      </div>

      {/* Imagen */}
      <div className="relative flex justify-center items-center lg:w-1/2 lg:mt-10">

        <img
          src="/profile.png"
          className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.6)]"
        />

        <motion.div
          className="absolute inset-0 border border-indigo-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />

        <motion.div
          className="absolute inset-6 border border-blue-400 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        />

      </div>
    </section>
  );
}

export default Hero;