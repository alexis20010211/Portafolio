import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "Email", icon: <FaEnvelope />, href: "mailto:bryanramosborjas2001@gmail.com", color: "bg-red-500" },
  { name: "GitHub", icon: <FaGithub />, href: "https://github.com/alexis20010211", color: "bg-gray-800" },
  { name: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/bryan-alexis-ramos-borjas-56491a33a", color: "bg-blue-500" },
  { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com/alexis_borjas_11", color: "bg-pink-500" },
  { name: "WhatsApp", icon: <FaWhatsapp />, href: "https://wa.me/51942853987", color: "bg-green-500" }
];

function ContactCards() {
  return (
    <section id="contact" className="section max-w-6xl mx-auto py-24 px-4">
      <h2 className="title text-4xl mb-12 text-center text-white">Contacto 📬</h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center justify-center gap-2 p-6 rounded-xl shadow-lg text-white ${link.color} hover:brightness-110 transition`}
          >
            <div className="text-4xl">{link.icon}</div>
            <p className="font-bold">{link.name}</p>
          </motion.a>
        ))}
      </div>

      <p className="text-gray-500 mt-12 text-center text-sm">
        © 2026 Bryan Ramos Borjas. All rights reserved.
      </p>
    </section>
  )
}

export default ContactCards;