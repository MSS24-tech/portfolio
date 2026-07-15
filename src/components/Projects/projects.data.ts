import bloodImage from "../../images/blood.png";
import medImage from "../../images/Aushadha.png";
import sanchaya from "../../images/Sanchaya.png";

export type ProjectCategory =
  | "Cloud"
  | "Web"
  | "Mobile"
  | "Healthcare"
  | "Education"
  | "Other";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  technologies: string[];

  duration?: string;
  organization?: string;
  highlights?: string[];

  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Life Saver+",
    category: "Healthcare",
    description:
      "A Blood Bank and Donor Management System developed to streamline blood inventory, donor records, and administrative operations through a centralized web platform.",

    image: bloodImage,

    technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap", "MySQL"],

    duration: "Apr 2021 - Jul 2021",

    organization: "St Joseph Engineering College, Mangaluru",

    highlights: [
      "Developed a centralized Blood Bank and Donor Management System.",
      "Implemented blood stock and inventory monitoring.",
      "Managed donor registration, donor history, and blood group records.",
      "Created an administrator dashboard for secure data management.",
      "Reduced manual paperwork through digital record management.",
      "Improved operational efficiency and accessibility of blood bank data.",
    ],

    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Aushada",
    category: "Healthcare",
    description:
      "A web-based Online Pharmacy Distribution System developed to streamline pharmacy operations, inventory management, prescription verification, employee management, and secure medicine ordering through a centralized platform.",

    image: medImage,

    technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap", "MySQL"],

    duration: "Nov 2020 - Jan 2021",

    organization: "St Joseph Engineering College, Mangaluru",

    highlights: [
      "Developed a complete Online Pharmacy Distribution System.",
      "Implemented medicine inventory and stock management.",
      "Built customer order processing and prescription verification modules.",
      "Developed employee management and workflow tracking features.",
      "Integrated secure user authentication and role-based access control.",
      "Improved pharmacy operations through digital record management and automated workflows.",
    ],

    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Sanchaya",
    category: "Education",
    description:
      "A comprehensive College Management System developed to automate academic and administrative operations, including admissions, fee management, attendance, timetables, staff management, and student performance tracking through a centralized web platform.",

    image: sanchaya,

    technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap", "MySQL"],

    duration: "Oct 2019 - Mar 2020",

    organization: "Shree Bharathi College, Mangaluru",

    highlights: [
      "Developed a centralized College Management System for academic and administrative operations.",
      "Implemented online admission, student enrollment, and course registration modules.",
      "Built fee management with payment tracking and receipt generation.",
      "Developed attendance, timetable, and scheduling modules for students and faculty.",
      "Implemented result management and academic performance tracking.",
      "Created department, staff, and library management modules with role-based access control.",
    ],

    liveUrl: "",
    githubUrl: "",
  },
];
