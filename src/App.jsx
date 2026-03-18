import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackgroundMusic from "./components/BackgroundMusic";
import AquariusBackground from "./components/AquariusBackground";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0c1a] text-[#e2e8f0] overflow-x-hidden overflow-y-auto">

      {/* 🌌 Fondo animado: Aurora boreal + Estrellas + Glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <AquariusBackground />

        {/* Extra glow suave para mejorar el efecto de aurora */}
        <div className="absolute inset-0 w-[200%] h-[200%] -z-20 blur-[140px] animate-[auroraMove_60s_ease-in-out_infinite]"
             style={{
               background: "radial-gradient(circle at 20% 30%, rgba(0,255,150,0.15), transparent 50%), radial-gradient(circle at 50% 50%, rgba(0,128,255,0.1), transparent 60%), radial-gradient(circle at 80% 70%, rgba(128,0,255,0.08), transparent 50%)"
             }}
        />
      </div>

      {/* 🎵 Música de fondo */}
      <BackgroundMusic />

      {/* 🌟 Contenido principal */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* 🔧 Keyframes de aurora */}
      <style jsx>{`
        @keyframes auroraMove {
          0% { transform: translate(0,0) rotate(0deg); }
          50% { transform: translate(-5%,3%) rotate(15deg); }
          100% { transform: translate(0,0) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}

export default App;