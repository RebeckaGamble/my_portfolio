import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useIntersectionObserver";
import { Button } from "../ui/button";
import { sectionstyle as styles } from "../../assets/styles";
import ExperienceCard from "./ExperienceCard";

type ExperienceItem = {
  type: string;
  title: string;
  company: string;
  period: string;
  description: string;
};

const Experience = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const experienceItems = t("experience.items", {
    returnObjects: true,
  }) as ExperienceItem[];

  const filteredItems = experienceItems.filter(
    (item) => filter === "all" || item.type === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#050816]">
      <div className="container mx-auto max-w-[90rem] px-4 2xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-12"
        >
          <h2 className={styles.sectionHeadText}>{t("experience.title")}</h2>
          <h3 className={styles.sectionSubText}>{t("experience.subtitle")}</h3>
        </motion.div>

        {/* <div className="flex flex-wrap bg-yellow-500 justify-center mb-10 gap-2"> */}
        <div className="w-full px-4 md:px-10 lg:px-20 xl:px-[100px] py-6 rounded-lg bg-purple-100 dark:bg-[#1d1836] text-[18px] shadow-md mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-10 font-semibold tracking-wider justify-center">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size={"lg"}
              onClick={() => setFilter("all")}
              aria-label="Show work and education"
              className={` ${
                filter === "all"
                  ? "bg-[#6a11cb] text-white"
                  : "border-none hover:bg-primary/90 hover:text-white text-[16px] cursor-pointer"
              }`}
            >
              {t("experience.filters.all")}
            </Button>
            <Button
              variant={filter === "work" ? "default" : "outline"}
              size={"lg"}
              onClick={() => setFilter("work")}
              aria-label="Show work and internship"
              className={
                filter === "work"
                  ? "bg-[#6a11cb] text-white shadow-lg text-[16px]"
                  : "border-none hover:bg-primary/90 hover:text-white text-[16px] cursor-pointer"
              }
            >
              {t("experience.filters.work")}
            </Button>
            <Button
              variant={filter === "education" ? "default" : "outline"}
              size={"lg"}
              onClick={() => setFilter("education")}
              aria-label="Show education"
              className={
                filter === "education"
                  ? "bg-[#6a11cb] text-white shadow-lg text-[16px]"
                  : "border-none hover:bg-primary/90 hover:text-white text-[16px] cursor-pointer"
              }
            >
              {t("experience.filters.education")}
            </Button>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          {filteredItems.map((item, index) => (
            <ExperienceCard
              key={index}
              item={item}
              isLast={index === filteredItems.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
