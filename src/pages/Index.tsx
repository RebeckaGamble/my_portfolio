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
import StarsCanvas from "../components/canvas/Stars";

const Index = () => {
  const [active, setActive] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative">
        {/* Background image layer */}
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/lighthero.png')] opacity-20 dark:opacity-100 dark:bg-[url('/herobg.png')] z-0" />
        <Navbar active={active} setActive={setActive} />
        <Hero />
      </div>
      <main className="flex-grow">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <div className="relative z-0 second-gradient">
          <Contact />
          <div className="hidden dark:block">
            <StarsCanvas />
          </div>
        </div>
        {showScrollTop && (
          <div className="fixed right-0 bottom-20 ">
            <Button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActive("");
              }}
              aria-label="Go to top of page"
              className="cursor-pointer rounded-r-none bg-black/50 dark:bg-black/90 px-1.5"
            >
              <HiOutlineChevronDoubleUp size={14} className="text-white " />
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
