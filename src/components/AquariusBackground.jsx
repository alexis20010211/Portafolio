import { useState } from "react";
import { motion } from "framer-motion";

/* 🌌 Generar estrellas en % */
const generateStars = (count = 50) => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1.5 + Math.random() * 3,
    delay: Math.random() * 5
  }));
};

/* ♒ Constelación de Acuario en % */
const constellation = [
  { x: 20, y: 30 },
  { x: 30, y: 35 },
  { x: 40, y: 33 },
  { x: 50, y: 38 },
  { x: 60, y: 34 },
  { x: 70, y: 42 },
  { x: 75, y: 55 },
  { x: 72, y: 68 },
  { x: 65, y: 62 },
  { x: 58, y: 50 },
  { x: 48, y: 46 },
  { x: 38, y: 42 },
  { x: 28, y: 38 }
];

/* 🔗 Líneas de la constelación */
const lines = [
  "20,30 30,35 40,33 50,38 60,34",
  "50,38 58,50 65,62 72,68",
  "40,33 48,46 58,50",
  "30,35 38,42 48,46"
];

export default function AquariusBackground() {
  const [stars] = useState(() => generateStars(50));

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* 🌈 Aurora boreal animada */}
      <motion.div
        className="absolute inset-0 w-[200%] h-[200%] blur-[140px] -z-10"
        animate={{
          rotate: [0, 10, -10, 0],
          translateX: [0, -5, 5, 0],
          translateY: [0, 5, -5, 0]
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(135deg, rgba(0,255,128,0.25), rgba(0,128,255,0.2), rgba(128,0,255,0.15))"
        }}
      />

      {/* ✨ Estrellas animadas */}
      {stars.map((star, i) => {
        const target = constellation[i % constellation.length];
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 4}px rgba(255,255,255,0.7)`
            }}
            initial={{ left: `${star.x}%`, top: `${star.y}%` }}
            animate={{
              left: [`${star.x}%`, `${target.x}%`, `${star.x}%`],
              top: [`${star.y}%`, `${target.y}%`, `${star.y}%`],
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.5, 0.8]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay
            }}
          />
        );
      })}

      {/* 🔗 Líneas de la constelación con glow */}
      <svg className="absolute w-full h-full">
        {lines.map((line, i) => (
          <motion.polyline
            key={i}
            points={line}
            fill="none"
            stroke="rgba(96,165,250,0.9)"
            strokeWidth="2"
            strokeDasharray="4 6"
            style={{ filter: "drop-shadow(0 0 6px rgba(96,165,250,0.8))" }}
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </svg>
    </div>
  );
}