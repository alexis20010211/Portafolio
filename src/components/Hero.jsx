import { motion } from "framer-motion"

function Hero(){

return(

<section className="min-h-screen flex items-center justify-between max-w-6xl mx-auto">

  <div>

    <p className="text-indigo-400 mb-3">
      Hola mundo, Soy
    </p>

    <h1 className="text-5xl font-bold mb-4">
      Bryan Ramos Borjas
    </h1>

    <h2 className="text-3xl text-indigo-400 mb-6">
      Full Stack Developer
    </h2>

    <p className="text-gray-400 max-w-md mb-12 text-justify">
      Apasionado por construir aplicaciones web escalables y experiencias digitales modernas, disfruto combinando creatividad y lógica para desarrollar soluciones que realmente impacten a los usuarios. Me motiva aprender continuamente nuevas tecnologías y aplicar buenas prácticas de desarrollo, desde la optimización del rendimiento hasta la seguridad y la accesibilidad.  
      Tengo experiencia trabajando tanto en el frontend como en el backend, creando interfaces intuitivas, sistemas robustos y aplicaciones completas que integran funcionalidades complejas de manera eficiente.  
      Además, me gusta colaborar en proyectos que requieren trabajo en equipo, donde puedo aportar ideas, resolver problemas y mejorar procesos, siempre buscando entregar un producto de calidad y con un enfoque práctico. Actualmente me encuentro cursando el <strong>5to ciclo en IDAT</strong>, lo que me permite complementar mi experiencia práctica con conocimientos académicos actualizados. Mi objetivo es seguir creciendo como desarrollador, enfrentar retos cada vez más interesantes y generar experiencias digitales que marquen la diferencia.
    </p>

    <button className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600">
      Download CV
    </button>

  </div>

  <div className="relative">

    <img
      src="/profile.png"
      className="w-56 h-56 rounded-full border-4 border-indigo-500"
    />

    <motion.div
      className="absolute inset-0 border border-indigo-400 rounded-full"
      animate={{rotate:360}}
      transition={{repeat:Infinity,duration:10,ease:"linear"}}
    />

    <motion.div
      className="absolute inset-6 border border-blue-400 rounded-full"
      animate={{rotate:-360}}
      transition={{repeat:Infinity,duration:15,ease:"linear"}}
    />

  </div>

</section>

)

}

export default Hero;