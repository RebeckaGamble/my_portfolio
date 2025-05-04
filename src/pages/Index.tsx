import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Experience from "../components/experience/Experience";
import Contact from "../components/contact/Contact";
import { Button } from "../components/ui/button";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Skills from "../components/skills/Skills";

// dark:bg-[#050816]
// bg-[#151030]

const Index = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-cover bg-no-repeat bg-center bg-white dark:bg-[url('/herobg.png')]">
        <Navbar active={active} setActive={setActive} />
        <Hero />
      </div>
      <main className="flex-grow">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <div className="flex justify-center bg-purple-50 dark:bg-[#050816] pb-10">
          <Button
            onClick={() => {
              window.scrollTo(0, 0);
              setActive("");
            }}
            aria-label="Go to top of the page"
            className="rounded-full cursor-pointer bg-white p-1 py-2 shadow-md hover:bg-white border hover:scale-105 ease-in duraton-300"
          >
            <HiOutlineChevronDoubleUp
              size={30}
              className="text-[#9E2DA8] rounded-full"
            />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
