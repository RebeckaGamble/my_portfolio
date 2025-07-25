import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { sectionstyle as styles } from "../../assets/styles";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { projectImages } from "../../assets/projects";
import { useInView } from "../../hooks/useIntersectionObserver";
import { getFadeInUpMotion } from "../../utils/motion";
import { Project } from "../../types/projectTypes";

const INITIAL_COUNT = 4;

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const projects = t("projects.items", { returnObjects: true }) as Project[];

  const [projectRef, inView] = useInView<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const filteredProjects = projects.filter((project) => {
    return filter === "all" || project.category.includes(filter);
  });

  const toggleVisible = () => {
    if (visibleCount >= filteredProjects.length) {
      setVisibleCount(INITIAL_COUNT);
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, filteredProjects.length));
    }
  };

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="w-full mx-auto px-4 max-w-[90rem] 2xl:px-0">
        <motion.div
          ref={projectRef}
          {...getFadeInUpMotion(inView)}
          className="flex flex-col items-start"
        >
          <h2 className={styles.sectionHeadText}>{t("projects.title")}</h2>
          <h3 className={styles.sectionSubText}>{t("projects.subtitle")}</h3>
        </motion.div>
        <div className="flex flex-col mt-10 mb-12 text-primary-foreground text-[17px] max-w-3xl leading-[28px]">
          <p> {t("projects.text")}</p>
          <p> {t("projects.text2")}</p>
          <p> {t("projects.text3")}</p>
          <p> {t("projects.text4")}</p>
        </div>
        {/* Tech panel */}
        <div className="w-full px-4 md:px-10 lg:px-20 xl:px-[100px] py-4 md:py-6 rounded-lg bg-card/85 dark:bg-card text-[18px] shadow-md my-10">
          <ul className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-wrap md:justify-evenly gap-4 lg:gap-6 xl:gap-10 font-semibold justify-center">
            {Object.entries(t("projects.filters", { returnObjects: true })).map(
              ([key, value]) => (
                <li key={key} onClick={() => setFilter(key)}>
                  <button
                    className={`border-none w-full md:px-6 py-2 rounded-lg bg-inherit cursor-pointer  ${
                      filter === key
                        ? styles.tableBtn
                        : styles.tableBtnNotActive
                    }`}
                  >
                    {value}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 items-stretch">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden justify-center flex transition-all duration-300 hover:-translate-y-1"
            >
              <ProjectCard
                onClick={() => handleCardClick(project)}
                project={project}
              />
            </div>
          ))}
        </div>
        {/* Project details window */}
        {selectedProject && (
          <Dialog
            open={!!selectedProject}
            onOpenChange={() => setSelectedProject(null)}
          >
            <DialogContent className="max-w-[800px] w-full mx-auto max-h-[880px] bg-primary text-primary-foreground overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl text-start">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="space-x-2 text-start">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech.name} className={` ${tech.color}`}>
                      {tech.name.trim()}
                    </span>
                  ))}
                </DialogDescription>
              </DialogHeader>
              <div className="h-full flex flex-col justify-between">
                <div className="h-auto min-h-[200px] max-h-[500px] mb-4 rounded-lg border-y border-slate-200">
                  <img
                    src={
                      projectImages[
                        `${selectedProject.image.replace(".png", "-800.png")}`
                      ]
                    }
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-lg mb-6"
                  />
                </div>
                {selectedProject.fullDescription && (
                  <p className="mb-6 text-foreground/90 dark:text-slate-200">
                    {selectedProject.fullDescription ||
                      selectedProject.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    variant="link"
                    className="bg-slate-900 border text-white hover:animate-pulse transition-all duration-300 ease-in-out rounded-md flex justify-center items-center cursor-pointer"
                  >
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>{" "}
                      {t("projects.viewCodeBtn")}
                    </a>
                  </Button>
                  {selectedProject.demo && (
                    <Button
                      asChild
                      size="lg"
                      variant="link"
                      onClick={() =>
                        window.open(selectedProject.demo, "_blank")
                      }
                      className="bg-pink-500 text-white rounded-md hover:animate-pulse transition-all ease-in-out duration-300 flex justify-center items-center cursor-pointer"
                    >
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-6 w-6" />{" "}
                        {t("projects.liveDemoBtn")}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
        {filteredProjects.length > INITIAL_COUNT && (
          <div className="mt-12 sm:mt-20 w-full justify-center flex">
            <Button
              size="lg"
              variant="default"
              className="bg-card/85 dark:bg-card rounded-full text-white hover:bg-card dark:hover:bg-card/65"
              onClick={toggleVisible}
              aria-label="Load more projects"
            >
              {visibleCount >= filteredProjects.length
                ? t("projects.showLessBtn")
                : t("projects.loadMoreBtn")}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
