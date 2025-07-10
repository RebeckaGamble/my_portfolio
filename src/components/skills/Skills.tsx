import { useState } from "react";
import SkillsCard from "./SkillsCard";
import { useTranslation } from "react-i18next";
import { sectionstyle as styles } from "../../assets/styles";
import { skillsData } from "./SkillsData";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useIntersectionObserver";
import { getFadeInUpMotion } from "../../utils/motion";
import { SkillCategory } from "../../types/skillTypes";

const Skills = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const [skillRef, inView] = useInView<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sortedSkillsData = skillsData.sort((a, b) =>
    a.alt.localeCompare(b.alt)
  );

  const handleCategoryClick = (category: SkillCategory) => {
    setActiveCategory(category);
  };

  const filteredSkills =
    activeCategory === "All"
      ? sortedSkillsData
      : sortedSkillsData.filter((skill) => skill.id === activeCategory);

  const categories: SkillCategory[] = ["All", "Backend", "Frontend", "Tools"];

  return (
    <section id="skills" className="py-20 second-gradient">
      <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0">
        <motion.div
          ref={skillRef}
          {...getFadeInUpMotion(inView)}
          className="flex flex-col items-start mb-12"
        >
          <h2 className={styles.sectionHeadText}>{t("skills.title")}</h2>
          <h3 className={styles.sectionSubText}>{t("skills.subtitle")}</h3>
        </motion.div>
        <div className="w-full px-4 md:px-10 lg:px-20 xl:px-[100px] py-4 md:py-6 rounded-lg bg-card/85 dark:bg-card text-primary-foreground text-[18px] sm:shadow-md mb-12">
          <ul className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-wrap md:justify-evenly gap-4 lg:gap-6 xl:gap-10 font-semibold justify-center">
            {categories.map((category) => (
              <li
                key={category}
                className={`text-center md:px-6 py-2 rounded-lg border-none text-[16px] cursor-pointer ${
                  activeCategory === category
                    ? styles.tableBtn
                    : styles.tableBtnNotActive
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {t(`skills.${category.toLowerCase()}`)}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-center items-baseline mx-auto min-h-[148px] gap-4">
          {filteredSkills.map((skill, index) => (
            <SkillsCard
              key={index}
              src={skill.src}
              alt={skill.alt}
              title={skill.alt}
            />
          ))}
        </div>{" "}
      </div>
    </section>
  );
};

export default Skills;
