import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow pt-16">
        main content coming
        <p className="text-foreground ">Some testing text</p>
      </main>
    </div>
  );
};

export default Index;
