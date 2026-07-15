export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Niveus Solutions (NTT DATA)",
    role: "Cloud Engineer",
    duration: "2021 - Present",
    location: "Bengaluru, India",
    description:
      "Designing and delivering scalable cloud-native applications and enterprise solutions while collaborating across cross-functional teams.",

    achievements: [
      "Led delivery of enterprise applications",
      "Acted as Module Lead for Agile projects",
      "Performed code reviews and mentoring",
      "Built CI/CD deployment pipelines",
      "Collaborated with global teams",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Google Cloud",
      "Flutter",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    company: "Kakunje Software Pvt. Ltd.",
    role: "PHP Developer",
    duration: "Mar 2021 - Nov 2021",
    location: "Mangalore, India",
    description:
      "Built and maintained web applications using core PHP while ensuring reliable performance, database efficiency, and seamless user experiences.",

    achievements: [
      "Developed responsive web application modules",
      "Created and maintained MySQL databases",
      "Implemented CRUD operations and business logic",
      "Resolved bugs and optimized application performance",
      "Collaborated with the development team to deliver projects on time",
    ],

    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "jQuery",
      "Git",
    ],
  },
];
