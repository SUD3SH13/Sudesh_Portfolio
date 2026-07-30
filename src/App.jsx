import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import ProjectCard from "./components/Project-card";
import Projects from "./components/Projects"
function App() {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  return (
    <>
      <Navbar/>
      <Hero id="home"/>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}

export default App;