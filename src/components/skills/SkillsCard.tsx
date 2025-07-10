import { Skill } from "../../types/skillTypes";

export default function SkillsCard({ src, alt, title }: Skill) {
  return (
    <div className="p-3 sm:p-4 flex w-full xs:min-w-[150px] xs:max-w-[150px] sm:w-[190px] sm:max-w-[190px] shadow-md font-medium tracking-wider bg-white text-slate-900 rounded-xl hover:scale-105 ease-in duration-300">
      <div className="flex flex-row gap-4 xs:gap-2 sm:gap-4 mx-auto xs:justify-center items-center">
        <div className="m-auto w-[34px] h-[34px]">
          <img
            src={src}
            width={34}
            height={34}
            alt={alt}
            className="object-cover w-auto h-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <h3 className="text-[16px]">{title}</h3>
        </div>
      </div>
    </div>
  );
}
