import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackgroundMusic from "./components/BackgroundMusic";
import AquariusBackground from "./components/AquariusBackground";

// ✅ imagen desde assets
import bg from "./assets/bg-night.jpg";

function App() {
  return (
    <div className="relative min-h-screen text-[#e2e8f0] overflow-x-hidden">

      {/* 🌌 FONDO PRO */}
      <div className="fixed inset-0 -z-10">

        {/* 🖼️ IMAGEN BASE (VISIBLE SIEMPRE) */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${bg})`
          }}
        />

        {/* 🌑 OVERLAY SUAVE (NO LO MATA) */}
        <div className="absolute inset-0 bg-[#020617]/50" />

        {/* ✨ EFECTOS SUAVES (NO TAPAN) */}
        <div className="absolute inset-0 opacity-15">
          <AquariusBackground />
        </div>

        {/* 🌫️ GRADIENTE PROFUNDIDAD (TOP DESIGN) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/30 to-[#020617]/80" />

      </div>

      {/* 🎵 Música */}
      <BackgroundMusic />

      {/* 🌟 CONTENIDO */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;