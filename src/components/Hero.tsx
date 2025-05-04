import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { jag400 } from "../assets";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container max-w-[90rem] mx-auto px-4 mb-[84px]">
        <div className="bg-gradient-to-r from-purple-500 to-pink-300 w-[250px] mb-6 h-[250px] lg:hidden mx-auto p-1 rounded-full">
          <div className="bg-white w-auto h-full dark:bg-black/95 p-1 rounded-full">
            <img
              src={jag400}
              alt="Rebecka"
              className="w-auto h-full rounded-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left"
          >
            {/* Line & Dot */}
            <div className="hidden lg:flex flex-col justify-center items-center mr-6 ">
              <div className="w-5 h-5 rounded-full bg-white" />
              <div className="w-1 sm:h-80 lg:h-100 h-60 violet-gradient" />
            </div>
            {/* Text Block */}
            <div>
              <h1 className="text-xl md:text-2xl font-medium text-purple-600 dark:text-purple-400 mb-2">
                {t("hero.greeting")}
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="purple-text-gradient">{t("hero.name")}</span>
              </h2>
              <div className="h-12 mb-6">
                <h3 className="text-2xl dark:text-gray-200 md:text-3xl font-medium animate-pulse">
                  {t("hero.title")}
                </h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                {t("hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  asChild
                  aria-label="Go to projects"
                  className="bg-[#6a11cb] hover:bg-[#6a11cb]/90 text-white tracking-wider text-md px-6 py-3 rounded-md"
                >
                  <a href="#projects">{t("hero.cta")}</a>
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center self-start"
          >
            <div className="relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-300 rounded-full blur-2xl opacity-20 hover:animate-none animate-pulse"></div> */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-200 p-1 rounded-full">
                <div className="bg-white dark:bg-gray-900 p-1 rounded-full">
                  <img
                    src={jag400}
                    alt="Rebecka"
                    className="w-[350px] h-[350px] rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
