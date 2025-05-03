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

export type Project = {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  technologies: {
    name: string;
    color: string;
  }[];
  github?: string;
  demo?: string;
  featured?: boolean;
  category: string;
};

const Projects = () => {
  const { t } = useTranslation();
  // const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const projects = t("projects.items", { returnObjects: true }) as Project[];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "all" || project.category === filter;

    const matchesTech = selectedTech
      ? // ? project.technologies.includes(selectedTech)
        project.technologies.some(
          (tech) =>
            tech.name.trim().toLowerCase() === selectedTech.toLowerCase()
        )
      : true;

    return matchesCategory && matchesTech;
  });

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 min-h-[500px] bg-slate-900">
      <div className="container mx-auto px-4 max-w-[90rem] 2xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-12"
        >
          <h2 className={styles.sectionHeadText}>{t("projects.title")}</h2>
          <h3 className={styles.sectionSubText}>{t("projects.subtitle")}</h3>
          <p className="mt-10 text-slate-800 dark:text-white text-[17px] max-w-3xl leading-[30px]">
            {t("projects.text")}
          </p>
        </motion.div>

        {/* Tech panel */}
        <div className="flex bg-tertiary py-2.5 px-10 w-fit mx-auto justify-center items-center mb-6 ">
          <div className="flex flex-wrap justify-center gap-2 xs:gap-3.5">
            {Object.entries(t("projects.filters", { returnObjects: true })).map(
              ([key, value]) => (
                <Button
                  key={key}
                  variant={filter === key ? "default" : "outline"}
                  onClick={() => setFilter(key)}
                  className={
                    filter === key
                      ? "bg-gradient-to-r from-purple-400 to-pink-500 text-white"
                      : ""
                  }
                >
                  {value}
                </Button>
              )
            )}
          </div>
        </div>
        {/* Project Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="rounded-lg overflow-hidden transition-all duration-300"
            >
              <ProjectCard
                onClick={() => handleCardClick(project)}
                project={project}
              />
            </motion.div>
          ))}
        </motion.div>
        {/* Project details window */}
        {selectedProject && (
          <Dialog
            open={!!selectedProject}
            onOpenChange={() => setSelectedProject(null)}
          >
            <DialogContent className="xs:max-w-[600px] w-[98vw] mx-auto max-h-[680px] bg-white dark:bg-slate-900 text-black dark:text-white overflow-y-auto">
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
                <div className="h-auto max-h-[300px] mb-4">
                  <img
                    src={`/projects/${selectedProject.image}`}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-md mb-6"
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
                    variant="outline"
                    className="bg-gray-800 text-white hover:animate-pulse rounded-md flex justify-center items-center cursor-pointer"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        // class="lucide lucide-github-icon lucide-github"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>{" "}
                      View Code
                    </a>
                  </Button>
                  {selectedProject.demo && (
                    <Button
                      asChild
                      variant="outline"
                      onClick={() =>
                        window.open(selectedProject.demo, "_blank")
                      }
                      className="bg-pink-600 text-white rounded-md hover:animate-pulse flex justify-center items-center cursor-pointer"
                    >
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
        {visibleCount < filteredProjects.length && (
          <div className="mt-12 text-black dark:Text-white text-center">
            <Button className="bg-gray-500 text-white" onClick={loadMore}>Load More Projects</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
