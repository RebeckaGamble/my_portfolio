export type SkillCategory = "All" | "Frontend" | "Backend" | "Tools";

export type Skill = {
  id?: Exclude<SkillCategory, "All">;
  src: string;
  alt: string;
  title?: string;
};