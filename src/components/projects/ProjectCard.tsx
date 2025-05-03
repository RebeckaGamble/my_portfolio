import { Button } from "../ui/button";
import { Project } from "./Projects";
import github from "../../../public/tech/github1.png";
import vercel from "../../../public/tech/vercel.png";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div className="green-pink-gradient rounded-2xl p-[1px] w-full max-w-[450px] sm:w-[340px]">
      <div className="relative bg-tertiary p-5 rounded-2xl h-full text-white">
        <div className="relative overflow-hidden rounded-t-2xl group">
          <div className="h-[230px]">
            <img
              src={`/projects/${project.image}`}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              variant="secondary"
              size="sm"
              onClick={onClick}
              className="transform text-white bg-gray-800 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              View Details
            </Button>
          </div>
          <div className="inset-0 justify-start flex flex-row gap-x-2 m-2 card-img_hover absolute">
            <div
              onClick={() => window.open(project.github, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            {project.demo && (
              <div
                onClick={() => window.open(project.demo, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={vercel}
                  alt="vercel demo"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-2xl tracking-wider font-bold mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {project.description}
          </p>
        </div>
        <div className="mt-auto pt-4 w-[80%] flex flex-wrap gap-x-2">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className={`${tech.color}`}>
              {tech.name.trim()}
            </span>
          ))}
        </div>
        <div className="absolute bottom-2 right-2">
          <Button
            variant="link"
            className="text-gray-600 dark:text-gray-300"
            onClick={onClick}
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
