export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud",
    skills: [
      { name: "Google Cloud Platform", level: 95 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "CI/CD", level: 90 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "SCSS", level: 90 },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 88 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 92 },
      { name: "JIRA", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "Figma", level: 80 },
    ],
  },
];