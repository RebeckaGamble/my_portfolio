import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useIntersectionObserver";
import { sectionstyle as styles } from "../../assets/styles";
import AboutCode from "./AboutCode";

const About = () => {
  const { t } = useTranslation();

  const [sectionRef, inView] = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [imageRef, imageInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section bg:slate-50 dark:bg-darkbg/50">
      <div
        className="container max-w-[90rem] mx-auto px-4 2xl:px-0"
        ref={sectionRef}
      >
        <h2 className={styles.sectionHeadText}>{t("about.title")}</h2>
        <h3 className={styles.sectionSubText}>{t("about.subtitle")}</h3>
        <div className="h-[400px]"> 

        <AboutCode />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div
            className={`relative ${
              imageInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            ref={imageRef}
          >
            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-purple-300 to-pink-200 aspect-square w-full max-w-md mx-auto flex items-center justify-center">
                  <span className="text-white text-9xl font-display">RG</span>
                </div>
              </div>
            </div>
            {/* Decor el */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl bg-pink-400/30 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl bg-purple-400/30 -z-10"></div>
          </div>
          {/* Text */}
          <div>
            <div
              className={`space-y-4 ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-lg">{t("about.p1")}</p>
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
                  ].map((tech, index) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/10 dark:bg-purple-500/20 text-sm rounded-full"
                      style={{
                        animationDelay: `${0.1 * index + 0.5}s`,
                        animation: inView
                          ? "fade-in-up 0.5s ease-out forwards"
                          : "none",
                        opacity: 0,
                      }}
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
    </section>
  );
};

export default About;
