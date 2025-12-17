import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { me } from "../assets";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen py-20 flex items-center">
      <div className="max-w-[90rem] mx-auto px-4 2xl:px-2 sm:mb-[84px]">
        <div className="black-gradient w-[250px] h-[250px] mb-6 lg:hidden mx-auto p-1 rounded-full">
          <div className="bg-primary w-full h-auto p-1 rounded-full">
            <img
              src={me}
              alt="Rebecka"
              className="w-full h-auto rounded-full object-remain object-center"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1100px] mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center lg:items-center text-center lg:text-left"
          >
            {/* Line & Dot */}
            <div className="hidden lg:flex flex-col justify-center items-center mr-6">
              <div className="w-5 h-5 rounded-full bg-slate-400 purple-gradient" />
              <div className="w-[3px] lg:h-100 xl:h-90 bg-gray-400 rounded-b-full" />
            </div>
            {/* Text Block */}
            <div className="">
              <h1 className="text-4xl md:text-5xl gap-x-2 font-bold text-primary-foreground mb-2">
                {t("hero.greeting")}
                <span className="purple-text-gradient">{t("hero.name")}</span>
              </h1>

              <h2 className="text-2xl mb-2 text-secondary-foreground md:text-3xl font-medium ">
                {t("hero.greeting2")}
                <span className="animate-pulse"> {t("hero.title")}</span>
              </h2>

              <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                {t("hero.greeting3")}
              </h3>
              <p className="text-lg md:text-xl text-secondary-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                {t("hero.description")}
              </p>
              <div className="flex w-full justify-center items-center lg:justify-start ">
                <Button
                  asChild
                  size="lg"
                  aria-label="Go to projects"
                  className="border border-purple shadow-xl bg-gradient-to-bl from-[#6a11cb] via-[#9b51e0] to-[#6a11cb] hover:bg-gradient-to-tl text-white tracking-wider w-fit text-md px-6 py-3.5 rounded-full"
                >
                  <a href="#projects">{t("hero.cta")}</a>
                </Button>
              </div>
            </div>
          </motion.div>
          <div className="hidden lg:flex justify-center self-center">
            <div className="relative group">
              <div className="black-gradient group-hover:secondary-gradient p-0.5 rounded-full">
                <div className="bg-primary group-hover:bg-transparent p-1 rounded-full">
                  <img
                    src={me}
                    alt="Rebecka"
                    className="w-[350px] h-[350px] rounded-full object-cover group-hover:opacity-0"
                  />
                </div>
              </div>
              {/* Change on hover */}
              <div className="absolute bg-primary p-1 inset-0 rounded-full flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-3000">
                <div className="bg-transparent rounded-full">
                  <img
                    src="./pro.png"
                    alt="Stockholm"
                    className="w-[350px] h-[350px] rounded-full object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
