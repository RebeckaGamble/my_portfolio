import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useIntersectionObserver";
import { getFadeInUpMotion } from "../../utils/motion";
import { sectionstyle as styles } from "../../assets/styles";
import ExperienceCard from "./ExperienceCard";
import { ExperienceItem } from "../../types/experienceTypes";

const Experience = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const experienceItems = t("experience.items", {
    returnObjects: true,
  }) as ExperienceItem[];

  const [experienceRef, inView] = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredItems = experienceItems.filter(
    (item) => filter === "all" || item.type === filter
  );

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="mx-auto max-w-[90rem] px-4 2xl:px-0">
        <motion.div
          ref={experienceRef}
          {...getFadeInUpMotion(inView)}
          className="flex flex-col items-start mb-12"
        >
          <h2 className={styles.sectionHeadText}>{t("experience.title")}</h2>
          <h3 className={styles.sectionSubText}>{t("experience.subtitle")}</h3>
        </motion.div>

        <div className="w-full px-4 md:px-10 lg:px-20 xl:px-[100px] py-4 md:py-6 rounded-lg bg-card/85 dark:bg-card text-[18px]dark:shadow-md mb-20">
          <ul className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-wrap md:justify-evenly gap-4 lg:gap-6 xl:gap-10 font-semibold justify-center">
            {Object.entries(
              t("experience.filters", { returnObjects: true })
            ).map(([key, value]) => (
              <li key={key} onClick={() => setFilter(key)}>
                <button
                  className={`border-none w-full md:px-6 py-2 rounded-lg bg-inherit text-slate-90 cursor-pointer text-[16px] ${
                    filter === key ? styles.tableBtn : styles.tableBtnNotActive
                  }`}
                >
                  {value}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-3xl mx-auto">
          {filteredItems.map((item, index) => (
            <ExperienceCard
              key={index}
              item={item}
              isLast={index === filteredItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
