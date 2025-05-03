import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Experience from "../components/Experience";
import Contact from "../components/contact/Contact";
import { Button } from "../components/ui/button";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";


const Index = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <div
        className="bg-cover bg-no-repeat bg-center bg-white dark:bg-[url('/herobg.png')]"
        // style={{ backgroundImage: 'url("./herobg.png")' }}
      >
        <Navbar active={active} setActive={setActive} />
        <Hero />
      </div>
      <main className="flex-grow">
        <About />
        <Experience />
        <Projects />´
        <Contact />
        <div className="flex justify-center">
          <Button
            onClick={() => {
              window.scrollTo(0, 0);
              setActive("");
            }}
            aria-label="Go to top of the page"
            className="rounded-full p-4 cursor-pointer shadow-sm border shadow-gray-400 hover:scale-110 ease-in duraton-300"
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
