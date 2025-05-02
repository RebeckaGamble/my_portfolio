import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useIntersectionObserver";
import { Button } from "./ui/button";
import { sectionstyle as styles } from "../assets/styles";

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
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const getIcon = (type: string) => {
    if (type === "work") {
      return (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      );
    } else {
      return (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </div>
      );
    }
  };

  return (
    <section id="experience" className="py-20">
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

        <div className="flex flex-wrap justify-center mb-10 gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={
              filter === "all"
                ? "bg-gradient-to-r from-purple to-pink hover:opacity-90"
                : ""
            }
          >
            {t("experience.filters.all")}
          </Button>
          <Button
            variant={filter === "work" ? "default" : "outline"}
            onClick={() => setFilter("work")}
            className={
              filter === "work"
                ? "bg-gradient-to-r from-purple to-pink hover:opacity-90"
                : ""
            }
          >
            {t("experience.filters.work")}
          </Button>
          <Button
            variant={filter === "education" ? "default" : "outline"}
            onClick={() => setFilter("education")}
            className={
              filter === "education"
                ? "bg-gradient-to-r from-purple to-pink hover:opacity-90"
                : ""
            }
          >
            {t("experience.filters.education")}
          </Button>
        </div>
        <motion.div
            ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-12 pb-8"
            >
              {/* Timeline line */}
              {index < filteredItems.length - 1 && (
                <div className="absolute left-5 top-5 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-300 to-pink-300 dark:from-purple-800 dark:to-pink-800"></div>
              )}

              {/* Icon */}
              <div className="absolute left-0 top-0">{getIcon(item.type)}</div>

              {/* Content */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {item.company}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {item.period}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
