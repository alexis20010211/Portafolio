import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackgroundMusic from "./components/BackgroundMusic";
import AquariusBackground from "./components/AquariusBackground";

// ✅ Imagen desde assets (1920x1080)
import bg from "./assets/bg-night.jpg";

function App() {
  return (
    <div className="relative min-h-screen text-[#e2e8f0] overflow-x-hidden">

      {/* 🌌 FONDO ULTRA ADAPTATIVO */}
      <div className="fixed inset-0 -z-10">

        {/* 🖼️ IMAGEN RESPONSIVE */}
        <div
          className="
            absolute inset-0
            bg-center       /* centra la imagen */
            bg-no-repeat
            bg-cover        /* siempre llena el contenedor */
            brightness-110
            contrast-110
          "
          style={{
            backgroundImage: `url(${bg})`
          }}
        />

        {/* 🌑 OVERLAY RESPONSIVE */}
        <div className="absolute inset-0 bg-[#020617]/40 md:bg-[#020617]/50 lg:bg-[#020617]/60" />

        {/* ✨ EFECTOS SUAVES */}
        <div className="absolute inset-0 opacity-10 md:opacity-15">
          <AquariusBackground />
        </div>

        {/* 🌫️ GRADIENTE PROFUNDIDAD */}
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