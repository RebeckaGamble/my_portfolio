import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Experience from "../components/Experience";

const Index = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: 'url("./herobg.png")' }}
      >
        <Navbar active={active} setActive={setActive} />
        <Hero />
      </div>
      <main className="flex-grow pt-16">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
};

export default Index;
