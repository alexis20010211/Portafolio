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
    <div className="relative text-[#e2e8f0] overflow-hidden">

      {/* ♒ CONSTELACIÓN (ENCIMA DEL FONDO CSS) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AquariusBackground />
      </div>

      {/* 🎵 Música */}
      <BackgroundMusic />

      {/* CONTENIDO */}
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