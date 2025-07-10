type AboutCardProps = {
  title: string;
  icon: string;
};

const AboutCard = ({ title, icon }: AboutCardProps) => {
  return (
    <div className="xs:w-[250px] group rounded-[20px] max-w-[250px] w-full">
      <div className="w-full card-gradient p-[1px] rounded-[20px] dark:shadow-card shadow-2xl">
        <div className="bg-card/85 dark:bg-card rounded-[20px] py-4 px-4 min-h-[280px] flex flex-col items-center justify-evenly shadow-sm shadow-violet-400">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain group-hover:animate-spin"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
