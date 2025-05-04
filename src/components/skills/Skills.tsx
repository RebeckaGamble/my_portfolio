import { useState } from "react";
import { motion } from "framer-motion";
import SkillsCard, { Skill } from "./SkillsCard";
import { useTranslation } from "react-i18next";
import { sectionstyle as styles } from "../../assets/styles";
import {
  html,
  css,
  javascript,
  typescript,
  react,
  vue,
  nextjs,
  redux,
  tailwind,
  vite,
  github1,
  aws,
  express,
  node,
  mysql,
  firebase,
  cypress,
} from "../../assets";

export const skillsData: Skill[] = [
  { id: "Frontend", src: html, alt: "HTML" },
  { id: "Frontend", src: css, alt: "CSS" },
  { id: "Frontend", src: javascript, alt: "JavaScript" },
  { id: "Frontend", src: typescript, alt: "TypeScript" },
  { id: "Frontend", src: react, alt: "React" },
  { id: "Frontend", src: vue, alt: "Vue.js" },
  { id: "Frontend", src: nextjs, alt: "Next.js" },
  { id: "Frontend", src: redux, alt: "Redux" },
  { id: "Frontend", src: tailwind, alt: "Tailwind" },
  { id: "Frontend", src: vite, alt: "Vite" },
  { id: "Tools", src: github1, alt: "Github" },
  { id: "Tools", src: aws, alt: "AWS" },
  { id: "Backend", src: express, alt: "Express" },
  { id: "Backend", src: node, alt: "Node.js" },
  { id: "Tools", src: mysql, alt: "MySQL" },
  { id: "Tools", src: firebase, alt: "Firebase" },
  { id: "Tools", src: cypress, alt: "Cypress" },
];

export type SkillCategory =
  | "All"
  | "Frontend"
  | "Backend"
  | "Tools";

const Skills = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

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

  const categories: SkillCategory[] = [
    "All",
    "Backend",
    "Frontend",
    "Tools",
  ];

  return (
    <section id="skills" className="py-20 bg-purple-50 dark:bg-[#050816]">
      <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-12"
        >
          <h2 className={styles.sectionHeadText}>{t("skills.title")}</h2>
          <h3 className={styles.sectionSubText}>{t("skills.subtitle")}</h3>
        </motion.div>
        <div className="w-full px-4 md:px-10 lg:px-20 xl:px-[100px] py-6 rounded-lg bg-white dark:bg-[#1d1836] text-slate-900 dark:text-white text-[18px] shadow-md mb-12">
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 xl:gap-10 font-semibold sm:gap-4 justify-center">
            {categories.map((category) => (
              <li
                key={category}
                className={`text-center py-3 rounded-lg border-none text-[16px] cursor-pointer shadow-lg ${
                  activeCategory === category
                    ? "bg-[#6a11cb] text-white"
                    : "bg-purple-100 dark:bg-white dark:text-slate-900 hover:bg-primary/90 hover:text-white"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {t(`skills.${category.toLowerCase()}`)}{" "}
              </li>
            ))}
          </ul>
        </div>{" "}
        <div className="flex flex-wrap justify-center mx-auto gap-4">
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
