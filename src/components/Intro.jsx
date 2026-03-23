import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FULL_TEXT = "Bienvenido a mi portafolio";
const TYPING_SPEED = 40;
const PAUSE_AFTER_TYPING = 1200;
const EXIT_DELAY = FULL_TEXT.length * TYPING_SPEED + PAUSE_AFTER_TYPING;

export default function Intro({ onFinish }) {
  const [text, setText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const prefersReduced = useReducedMotion();

  const canvasRef = useRef(null);
  const onFinishRef = useRef(onFinish);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  // ✨ Typing
  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      i++;
      setText(FULL_TEXT.slice(0, i));

      if (i >= FULL_TEXT.length) clearInterval(typing);
    }, prefersReduced ? 0 : TYPING_SPEED);

    return () => clearInterval(typing);
  }, [prefersReduced]);

  // ⏱️ salida
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onFinishRef.current?.(), 800);
    }, prefersReduced ? 500 : EXIT_DELAY);

    return () => clearTimeout(timer);
  }, [prefersReduced]);

  // ⚛️ Partículas tipo átomo
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 80 + Math.random() * 120,
        speed: 0.01 + Math.random() * 0.02,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      particles.forEach((p) => {
        p.angle += p.speed;

        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius;

        // 🔥 glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#3b82f6";

        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#3b82f6";
        ctx.fill();

        // ⚛️ órbitas
        ctx.beginPath();
        ctx.arc(cx, cy, p.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(59,130,246,0.15)";
        ctx.stroke();
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{
        opacity: fadeOut ? 0 : 1,
        scale: fadeOut ? 1.1 : 1,
        filter: fadeOut ? "blur(10px)" : "blur(0px)"
      }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617] overflow-hidden"
    >

      {/* ⚛️ Canvas partículas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* 🌌 Glow fondo */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative text-center px-6">

        {/* ✨ Texto */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-6xl font-bold mb-6 tracking-wide"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {text}
          </span>
          <span className="animate-pulse text-blue-400">|</span>
        </motion.h1>

        {/* 💻 Subtexto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 text-lg tracking-widest"
        >
          Full Stack Developer | Building modern web applications
        </motion.p>

        {/* ⚡ Barra */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: prefersReduced ? 0 : EXIT_DELAY / 1000,
            ease: "easeInOut"
          }}
          className="mt-8 h-[2px] w-48 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto origin-left"
        />

      </div>
    </motion.div>
  );
}