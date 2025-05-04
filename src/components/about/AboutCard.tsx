type About = {
  title: string;
  icon: string;
};

const AboutCard = ({ title, icon }: About) => {
  return (
    <div className="xs:w-[250px] rounded-[20px] max-w-[250px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          //   options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-4 px-4 min-h-[280px] flex flex-col items-center justify-evenly shadow-sm shadow-violet-400"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain hover:animate-spin"
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
