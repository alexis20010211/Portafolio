import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import BackgroundEffects from "./components/BackgroundEffects";
import Intro from "./components/Intro";
import PageWrapper from "./components/PageWrapper"; // ✅ nuevo

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative min-h-screen text-[#e2e8f0] overflow-x-hidden">

      {/* 🎬 INTRO */}
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

      {/* 🌌 FONDO */}
      <BackgroundEffects />

      {/* 🌟 CONTENIDO CON EFECTO GRAVEDAD */}
      {!showIntro && ( // 🔥 clave: solo aparece después del intro
        <PageWrapper>
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </PageWrapper>
      )}

    </div>
  );
}

export default App;