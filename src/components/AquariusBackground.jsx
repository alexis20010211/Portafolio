import { useState } from "react";
import { motion } from "framer-motion";

const generateStars = (count = 40) => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2,
    delay: Math.random() * 5
  }));
};

const constellation = [
  { x: 20, y: 30 },
  { x: 30, y: 35 },
  { x: 40, y: 33 },
  { x: 50, y: 38 },
  { x: 60, y: 34 },
  { x: 70, y: 42 },
  { x: 75, y: 55 },
  { x: 72, y: 68 }
];

export default function AquariusBackground() {
  const [stars] = useState(() => generateStars(40));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* 🌈 Aurora ULTRA SUAVE */}
      <motion.div
        className="absolute inset-0 blur-[60px] opacity-40"
        animate={{
          rotate: [0, 5, -5, 0],
          translateX: [0, -2, 2, 0],
          translateY: [0, 2, -2, 0]
        }}
        transition={{ duration: 80, repeat: Infinity }}
        style={{
          background:
            "linear-gradient(135deg, rgba(0,255,150,0.08), rgba(0,128,255,0.06), rgba(128,0,255,0.05))"
        }}
      />

      {/* ✨ Estrellas */}
      {stars.map((star, i) => {
        const target = constellation[i % constellation.length];
        return (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 3}px rgba(255,255,255,0.5)`
            }}
            initial={{ left: `${star.x}%`, top: `${star.y}%` }}
            animate={{
              left: [`${star.x}%`, `${target.x}%`, `${star.x}%`],
              top: [`${star.y}%`, `${target.y}%`, `${star.y}%`],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: star.delay
            }}
          />
        );
      })}
    </div>
  );
}