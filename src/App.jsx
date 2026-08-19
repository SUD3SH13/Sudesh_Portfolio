import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import ProjectCard from "./components/Project-card";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <section id="contact">
        <Contact/>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
}

export default App;