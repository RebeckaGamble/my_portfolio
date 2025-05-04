import { SkillCategory } from "./Skills";

export type Skill = {
    id?: Exclude<SkillCategory, "All">;
    src: string;
    alt: string;
    title?: string;
}

export default function SkillsCard({ src, alt, title }:Skill) {
  return (
    <div className="p-4 flex w-[160px] shadow-sm shadow-violet-300 font-medium tracking-wider bg-white dark:bg-[#edebf5] text-slate-800 sm:w-[180px] rounded-xl hover:scale-105 ease-in duration-300">
      <div className="flex flex-row gap-4 justify-center items-center">
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
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
