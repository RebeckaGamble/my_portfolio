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
import Credit from "../components/footer/Credit";

const Index = () => {
  const [active, setActive] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
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
      {/* Background image layer */}
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/lighthero.png')] opacity-20 dark:opacity-100 dark:bg-[url('/herobg.png')] z-0" />
      <div className="relative">
        <Navbar active={active} setActive={setActive} />
        <Hero />
      </div>
      <main className="flex-grow">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <div className="relative z-0 bg-slate-700 dark:bg-primary">
          <Contact />
          <StarsCanvas />
        </div>
        {showScrollTop && (
        <div className="2xl:hidden fixed right-0 bottom-20 ">
           <Button
            onClick={() => {
              window.scrollTo({top:0, behavior: "smooth"});
              setActive("");
            }}
            aria-label="Go to top of page"
            className="cursor-pointer bg-black/50 px-2"
          >
            <HiOutlineChevronDoubleUp
              size={16}
              className="text-white "
            />
          </Button>
        </div>
        )}
        <div className="hidden 2xl:flex justify-center bg-slate-700 dark:bg-primary pb-10">
          <Button
            onClick={() => {
              window.scrollTo(0,0);
              setActive("");
            }}
            aria-label="Go to top of the page"
            className="rounded-full cursor-pointer bg-white p-1 py-2 shadow-md border hover:scale-105 transition-all ease-in-out duraton-300"
          >
            <HiOutlineChevronDoubleUp
              size={30}
              className="text-purple rounded-full"
            />
          </Button>
        </div>
      </main>
      <Credit />
    </div>
  );
};

export default Index;
