import { getExperienceIcon } from "./ExperienceIcon";
import { ExperienceItem } from "../../types/experienceTypes";

interface IExperienceCardProps {
  item: ExperienceItem;
  isLast: boolean;
}

const ExperienceCard = ({ item, isLast }: IExperienceCardProps) => {
  return (
    <div className="relative pl-12 pb-8 last:pb-0">
      {!isLast && (
        <div className="absolute left-5 top-5 -translate-x-1/2 h-full w-0.5 purple-gradient" />
      )}

      <div className="absolute left-0 top-0">
        {getExperienceIcon(item.type)}
      </div>
      <div className="card-gradient rounded-lg p-0.5 group hover:p-1">
        <div className="bg-primary text-secondary-foreground rounded-lg shadow-xl p-6 group-hover dark:card-shadow dark:hover:shadow-none transition-shadow duration-300 ease-in-out hover:p-5.5 hover:shadow-2xl">
          <h3 className="text-xl text-primary-foreground font-bold mb-1">
            {item.title}
          </h3>
          <p className="font-medium text-lg mb-3">{item.company}</p>
          <p className="text-sm mb-4">{item.period}</p>
          <p className="">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
