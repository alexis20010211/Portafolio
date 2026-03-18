import { motion } from "framer-motion";
import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaJava, FaAngular, FaPython, FaVuejs, FaDatabase, FaMicrosoft, FaCode } from "react-icons/fa";
import { 
  SiJavascript, SiMongodb, SiMysql, SiTypescript, SiAnaconda, SiJupyter, SiPostman, SiVite, SiSwagger
} from "react-icons/si";
import { DiDotnet } from "react-icons/di";

// 🔥 skills con nivel agregado
const categories = [
  {
    name: "Frontend",
    skills: [
      { name:"HTML", level:90, icon:<FaHtml5 className="text-orange-500"/>, description:"Estructura del contenido web." },
      { name:"CSS", level:85, icon:<FaCss3Alt className="text-blue-500"/>, description:"Diseño y estilos modernos." },
      { name:"JavaScript", level:88, icon:<SiJavascript className="text-yellow-400"/>, description:"Interactividad web." },
      { name:"React", level:85, icon:<FaReact className="text-cyan-400"/>, description:"Interfaces dinámicas." },
      { name:"Angular", level:70, icon:<FaAngular className="text-red-600"/>, description:"SPA robustas." },
      { name:"Vue", level:65, icon:<FaVuejs className="text-green-500"/>, description:"Framework progresivo." },
      { name:"TypeScript", level:80, icon:<SiTypescript className="text-blue-500"/>, description:"JS tipado." }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name:"Node.js", level:85, icon:<FaNodeJs className="text-green-500"/>, description:"Backend con JS." },
      { name:"Java", level:90, icon:<FaJava className="text-red-500"/>, description:"POO robusto." },
      { name:"C#", level:75, icon:<DiDotnet className="text-purple-500"/>, description:"Ecosistema .NET." },
      { name:"Python", level:70, icon:<FaPython className="text-yellow-500"/>, description:"Versátil." }
    ]
  },
  {
    name: "Bases de Datos",
    skills: [
      { name:"MongoDB", level:80, icon:<SiMongodb className="text-green-600"/>, description:"NoSQL." },
      { name:"MySQL", level:85, icon:<SiMysql className="text-blue-400"/>, description:"Relacional." },
      { name:"Oracle", level:70, icon:<FaDatabase className="text-red-500"/>, description:"Empresarial." }
    ]
  },
  {
    name: "Herramientas",
    skills: [
      { name:"Git", level:90, icon:<FaGitAlt className="text-orange-600"/>, description:"Versionado." },
      { name:"Postman", level:85, icon:<SiPostman className="text-orange-600"/>, description:"Testing API." },
      { name:"Vite", level:80, icon:<SiVite className="text-purple-500"/>, description:"Build tool." },
      { name:"Swagger", level:75, icon:<SiSwagger className="text-green-500"/>, description:"Docs API." },
      { name:"Anaconda", level:65, icon:<SiAnaconda className="text-green-600"/>, description:"Data tools." },
      { name:"Jupyter", level:70, icon:<SiJupyter className="text-orange-500"/>, description:"Notebooks." },
      { name:"VS Code", level:95, icon:<FaCode className="text-blue-500"/>, description:"Editor." }
    ]
  },
  {
    name: "Ofimática",
    skills: [
      { name:"Word", level:90, icon:<FaMicrosoft className="text-blue-600"/>, description:"Documentos." },
      { name:"Excel", level:85, icon:<FaMicrosoft className="text-green-500"/>, description:"Datos." },
      { name:"PowerPoint", level:88, icon:<FaMicrosoft className="text-red-500"/>, description:"Presentaciones." }
    ]
  }
];

function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="skills" className="max-w-7xl mx-auto py-24 px-4 text-center text-white">

      <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
        Habilidades Técnicas
      </h2>

      {categories.map((category, catIndex) => (
        <div key={catIndex} className="mb-14">

          <h3 className="text-2xl font-semibold mb-8 text-indigo-400 tracking-wide">
            {category.name}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">

            {category.skills.map((skill, i) => {
              const key = `${catIndex}-${i}`;

              return (
                <motion.div
                  key={key}
                  onClick={() => setActiveIndex(activeIndex === key ? null : key)}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group bg-slate-800/80 backdrop-blur-md px-4 py-4 rounded-xl border border-slate-700 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 flex flex-col items-center gap-3 cursor-pointer w-full max-w-[140px]"
                >

                  {/* ICONO */}
                  <div className="text-4xl transition-transform duration-300 group-hover:scale-125">
                    {skill.icon}
                  </div>

                  {/* NOMBRE */}
                  <p className="text-sm font-medium">{skill.name}</p>

                  {/* 🔥 BARRA DE NIVEL */}
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-indigo-500"
                    />
                  </div>

                  <span className="text-xs text-gray-400">
                    {skill.level}%
                  </span>

                  {/* DESCRIPCIÓN */}
                  {activeIndex === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-gray-300 text-center bg-slate-900/80 p-2 rounded-md border border-slate-700"
                    >
                      {skill.description}
                    </motion.div>
                  )}

                </motion.div>
              );
            })}

          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;