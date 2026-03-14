import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaJava, FaAngular, FaPython, FaVuejs, FaDatabase } from "react-icons/fa";
import { 
  SiJavascript, 
  SiMongodb, 
  SiMysql, 
  SiTypescript, 
  SiAnaconda, 
  SiJupyter, 
  SiPostman,
  SiVite,
  SiSwagger
} from "react-icons/si";
import { DiDotnet } from "react-icons/di";

const skills = [
  { name:"HTML", icon:<FaHtml5 className="text-orange-500"/> },
  { name:"CSS", icon:<FaCss3Alt className="text-blue-500"/> },
  { name:"JavaScript", icon:<SiJavascript className="text-yellow-400"/> },
  { name:"React", icon:<FaReact className="text-cyan-400"/> },
  { name:"Node.js", icon:<FaNodeJs className="text-green-500"/> },
  { name:"MongoDB", icon:<SiMongodb className="text-green-600"/> },
  { name:"MySQL", icon:<SiMysql className="text-blue-400"/> },
  { name:"Git", icon:<FaGitAlt className="text-orange-600"/> },
  { name:"Java", icon:<FaJava className="text-red-500"/> },
  { name:"TypeScript", icon:<SiTypescript className="text-blue-500"/> },
  { name:"Angular", icon:<FaAngular className="text-red-600"/> },
  { name:"Python", icon:<FaPython className="text-yellow-500"/> },
  { name:"Vue", icon:<FaVuejs className="text-green-500"/> },
  { name:"Oracle", icon:<FaDatabase className="text-red-500"/> },
  { name:"C#", icon:<DiDotnet className="text-purple-500"/> },
  { name:"Anaconda", icon:<SiAnaconda className="text-green-600"/> },
  { name:"Jupyter Notebook", icon:<SiJupyter className="text-orange-500"/> },
  { name:"Postman", icon:<SiPostman className="text-orange-600"/> },
  { name:"Vite", icon:<SiVite className="text-purple-500"/> },
  { name:"Swagger", icon:<SiSwagger className="text-green-500"/> }
];

function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto py-24 px-4 text-center">
      <h2 className="text-4xl font-bold mb-12 text-white">Habilidades Técnicas</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-slate-800 px-6 py-4 rounded-lg hover:bg-indigo-500 transition flex flex-col items-center gap-2 cursor-pointer w-full max-w-[120px]"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-white text-sm md:text-base">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;