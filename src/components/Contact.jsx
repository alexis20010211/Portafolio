import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "Email", icon: <FaEnvelope />, href: "mailto:bryanramosborjas2001@gmail.com", color: "from-red-400 via-pink-500 to-red-600" },
  { name: "GitHub", icon: <FaGithub />, href: "https://github.com/alexis20010211", color: "from-gray-600 via-gray-700 to-gray-900" },
  { name: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/bryan-alexis-ramos-borjas-56491a33a", color: "from-blue-400 via-blue-500 to-blue-700" },
  { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com/alexis_borjas_11", color: "from-pink-500 via-purple-500 to-purple-600" },
  { name: "WhatsApp", icon: <FaWhatsapp />, href: "https://wa.me/51942853987", color: "from-green-400 via-green-500 to-green-700" }
];

function ContactCards() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-24 md:py-32 px-6 text-center"
    >
      {/* 🌌 Fondo tipo aurora boreal */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 w-[200%] h-[200%] blur-[160px] rounded-full
          bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,150,0.2)_0%,transparent_40%),
              radial-gradient(circle_at_70%_60%,rgba(50,200,255,0.15)_0%,transparent_40%),
              radial-gradient(circle_at_50%_10%,rgba(150,0,255,0.1)_0%,transparent_40%)]
          animate-[auroraMove_60s_ease-in-out_infinite]" />
      </div>

      {/* Glow decorativo */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[160px] rounded-full bottom-[-120px] right-[-120px]" />

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-16 text-white relative z-10"
      >
        Contacto 📬
      </motion.h2>

      {/* CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
          >
            {/* Borde animado */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 blur-[8px] transition-all`} />

            {/* Contenido */}
            <div className="relative flex flex-col items-center justify-center gap-3 p-6 rounded-3xl bg-[#0b0c1a]/80 border border-white/10 group-hover:border-white/20 transition-all shadow-lg shadow-indigo-500/20">
              {/* Icono */}
              <div className="text-4xl md:text-5xl text-white group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              {/* Texto */}
              <p className="font-semibold text-base md:text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                {link.name}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <p className="text-gray-400 mt-20 text-sm relative z-10">
        © 2026 Bryan Ramos Borjas. All rights reserved.
      </p>

      {/* Animación aurora personalizada */}
      <style jsx>{`
        @keyframes auroraMove {
          0% { transform: translate(0,0) rotate(0deg) scale(1); }
          25% { transform: translate(-1%,1%) rotate(5deg) scale(1.05); }
          50% { transform: translate(-2%,2%) rotate(10deg) scale(1.1); }
          75% { transform: translate(-1%,1%) rotate(5deg) scale(1.05); }
          100% { transform: translate(0,0) rotate(0deg) scale(1); }
        }
      `}</style>
    </section>
  );
}

export default ContactCards;