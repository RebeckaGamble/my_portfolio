import { motion } from "framer-motion";
import React from "react";

type ExperienceItem = {
  type: string;
  title: string;
  company: string;
  period: string;
  description: string;
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
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-300 dark:bg-cyan-400 text-white ">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
  }

  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-400 dark:bg-purple text-white">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
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
};

const ExperienceCard: React.FC<{ item: ExperienceItem; isLast: boolean }> = ({
  item,
  isLast,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative pl-12 pb-8 last:pb-0"
    >
      {!isLast && (
        <div className="absolute left-5 top-5 -translate-x-1/2 h-full w-0.5 purple-gradient" />
      )}

      <div className="absolute left-0 top-0">{getIcon(item.type)}</div>

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
    </motion.div>
  );
};

export default ExperienceCard;
