import { motion } from "framer-motion";
import { useState } from "react";

/* 🌌 Generar estrellas en % para que sea responsive */
const generateStars = (count = 50) => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1.5 + Math.random() * 3,
    duration: 3 + Math.random() * 5,
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

      {/* 🌈 Aurora boreal con radial gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 w-full h-full blur-[140px]">
          <div className="absolute w-[150%] h-[150%] rounded-full
            bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,150,0.25)_0%,transparent_40%),
                 radial-gradient(circle_at_70%_60%,rgba(50,200,255,0.2)_0%,transparent_40%),
                 radial-gradient(circle_at_50%_10%,rgba(150,0,255,0.15)_0%,transparent_40%)] 
            animate-[auroraMove_50s_ease-in-out_infinite]" />
        </div>
      </div>

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
              boxShadow: `0 0 ${star.size * 4}px rgba(96,165,250,0.8)`
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

      {/* 🔗 Constelación de Acuario con glow */}
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

      {/* 🔧 Animación aurora personalizada */}
      <style jsx>{`
        @keyframes auroraMove {
          0% { transform: translate(0,0) rotate(0deg) scale(1); }
          25% { transform: translate(-1%,1%) rotate(5deg) scale(1.05); }
          50% { transform: translate(-2%,2%) rotate(10deg) scale(1.1); }
          75% { transform: translate(-1%,1%) rotate(5deg) scale(1.05); }
          100% { transform: translate(0,0) rotate(0deg) scale(1); }
        }
      `}</style>
    </div>
  );
}