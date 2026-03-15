import { motion } from "framer-motion";
import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaJava, FaAngular, FaPython, FaVuejs, FaDatabase, FaMicrosoft, FaCode } from "react-icons/fa";
import { 
  SiJavascript, SiMongodb, SiMysql, SiTypescript, SiAnaconda, SiJupyter, SiPostman, SiVite, SiSwagger
} from "react-icons/si";
import { DiDotnet } from "react-icons/di";

// Categorías con habilidades
const categories = [
  {
    name: "Frontend",
    skills: [
      { name:"HTML", icon:<FaHtml5 className="text-orange-500"/>, description:"Lenguaje de marcado que estructura el contenido web." },
      { name:"CSS", icon:<FaCss3Alt className="text-blue-500"/>, description:"Lenguaje de estilos para dar diseño y formato a los elementos web." },
      { name:"JavaScript", icon:<SiJavascript className="text-yellow-400"/>, description:"Lenguaje que permite interactividad en la web." },
      { name:"React", icon:<FaReact className="text-cyan-400"/>, description:"Librería para construir interfaces reactivas y componibles." },
      { name:"Angular", icon:<FaAngular className="text-red-600"/>, description:"Framework para aplicaciones web SPA." },
      { name:"Vue", icon:<FaVuejs className="text-green-500"/>, description:"Framework progresivo para interfaces interactivas." },
      { name:"TypeScript", icon:<SiTypescript className="text-blue-500"/>, description:"Superset de JavaScript con tipado estático." }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name:"Node.js", icon:<FaNodeJs className="text-green-500"/>, description:"Entorno de ejecución de JavaScript en el servidor." },
      { name:"Java", icon:<FaJava className="text-red-500"/>, description:"Lenguaje orientado a objetos, robusto y multiplataforma." },
      { name:"C#", icon:<DiDotnet className="text-purple-500"/>, description:"Lenguaje de programación orientado a objetos de Microsoft." },
      { name:"Python", icon:<FaPython className="text-yellow-500"/>, description:"Lenguaje multipropósito, versátil y fácil de leer." }
    ]
  },
  {
    name: "Bases de Datos",
    skills: [
      { name:"MongoDB", icon:<SiMongodb className="text-green-600"/>, description:"Base de datos NoSQL orientada a documentos." },
      { name:"MySQL", icon:<SiMysql className="text-blue-400"/>, description:"Sistema de gestión de bases de datos relacional." },
      { name:"Oracle", icon:<FaDatabase className="text-red-500"/>, description:"Base de datos relacional robusta y confiable." }
    ]
  },
  {
    name: "Herramientas",
    skills: [
      { name:"Git", icon:<FaGitAlt className="text-orange-600"/>, description:"Control de versiones distribuido para proyectos de código." },
      { name:"Postman", icon:<SiPostman className="text-orange-600"/>, description:"Herramienta para probar y documentar APIs." },
      { name:"Vite", icon:<SiVite className="text-purple-500"/>, description:"Herramienta moderna para construir proyectos web rápido." },
      { name:"Swagger", icon:<SiSwagger className="text-green-500"/>, description:"Framework para documentar y probar APIs RESTful." },
      { name:"Anaconda", icon:<SiAnaconda className="text-green-600"/>, description:"Distribución de Python para ciencia de datos." },
      { name:"Jupyter Notebook", icon:<SiJupyter className="text-orange-500"/>, description:"Entorno interactivo para programar y documentar Python." },
      { name:"VS Code", icon:<FaCode className="text-blue-500"/>, description:"Editor de código moderno, ligero y extensible." }
    ]
  },
  {
    name: "Ofimática",
    skills: [
      { name:"Microsoft Word", icon:<FaMicrosoft className="text-blue-600"/>, description:"Procesador de textos profesional para documentos." },
      { name:"Microsoft Excel", icon:<FaMicrosoft className="text-green-500"/>, description:"Hoja de cálculo para análisis y gestión de datos." },
      { name:"Microsoft PowerPoint", icon:<FaMicrosoft className="text-red-500"/>, description:"Aplicación para presentaciones y exposiciones visuales." }
    ]
  }
];

function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSkill = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="skills" className="max-w-7xl mx-auto py-24 px-4 text-center">
      <h2 className="text-4xl font-bold mb-12 text-white">Habilidades Técnicas</h2>

      {categories.map((category, catIndex) => (
        <div key={catIndex} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-400">{category.name}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {category.skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-800 px-6 py-4 rounded-lg hover:bg-indigo-500 transition flex flex-col items-center gap-2 cursor-pointer w-full max-w-[120px]"
                onClick={() => toggleSkill(`${catIndex}-${i}`)}
              >
                <div className="text-4xl">{skill.icon}</div>
                <p className="text-white text-sm md:text-base">{skill.name}</p>

                {activeIndex === `${catIndex}-${i}` && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="mt-0 text-xs text-gray-300 text-justify leading-snug"
                  >
                    {skill.description}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
