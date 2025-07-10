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
  category: string[];
};