import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackgroundMusic from "./components/BackgroundMusic"; // <-- Importamos el componente

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BackgroundMusic /> {/* <-- Música de fondo */}
    </>
  );
}

export default App;
