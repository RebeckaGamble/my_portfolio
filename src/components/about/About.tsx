import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useIntersectionObserver";
import { motion } from "framer-motion";
import { getFadeInUpMotion } from "../../utils/motion";
import { sectionstyle as styles } from "../../assets/styles";
import { icon1, icon2, icon3, icon4 } from "../../assets";
import AboutCode from "./AboutCode";
import AboutCard from "./AboutCard";

const About = () => {
  const { t } = useTranslation();

  const [aboutRef, inView] = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const softSkills = [
    {
      title: t("softSkills.collaboration"),
      icon: icon1,
    },
    {
      title: t("softSkills.detailOriented"),
      icon: icon2,
    },
    {
      title: t("softSkills.flexible"),
      icon: icon3,
    },
    {
      title: t("softSkills.continuousLearner"),
      icon: icon4,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 secondary-gradient text-primary-foreground"
    >
      <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0 ">
        <motion.div
          ref={aboutRef}
          {...getFadeInUpMotion(inView)}
          className="flex flex-col items-start mb-12"
        >
          <h2 className={styles.sectionHeadText}>{t("about.title")}</h2>
          <h3 className={styles.sectionSubText}>{t("about.subtitle")}</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center">
          <div className="h-[368px]">
            <AboutCode />
          </div>
          {/* Text */}
          <div>
            <div className="space-y-4">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p>{t("about.p4")}</p>

              {/* Tech */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  {t("about.tech-title")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Node.js",
                    "Tailwind CSS",
                    "Responsive Design",
                    "Git",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary dark:bg-tertiary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-6 xl:gap-10">
        {softSkills.map((skill) => (
          <AboutCard key={skill.title} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default About;
