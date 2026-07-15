export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  status: "Completed" | "In Progress";
  badge: string;
  description: string;
}

export const certifications: ReadonlyArray<Certification> = Object.freeze([
  {
    id: 1,
    title: "GenAI Academy: Yellow Belt Level 2 for Developers",
    issuer: "NTT DATA, Inc.",
    year: "2026",
    status: "Completed",
    badge: "🤖",
    description:
      "Completed the GenAI Academy Yellow Belt Level 2 program, gaining practical knowledge of Generative AI concepts, prompt engineering, AI-assisted development, and enterprise AI applications.",
  },
  {
    id: 2,
    title: "Java Tutorial for Complete Beginners",
    issuer: "Udemy",
    year: "2026",
    status: "Completed",
    badge: "☕",
    description:
      "Learned Java programming fundamentals including object-oriented programming, collections, exception handling, file operations, and core Java concepts through hands-on exercises.",
  },
  {
    id: 3,
    title: "Create Media Search and Media Recommendation Applications with AI",
    issuer: "Google",
    year: "2025",
    status: "Completed",
    badge: "🧠",
    description:
      "Built AI-powered media search and recommendation applications using Google AI technologies, focusing on machine learning concepts, semantic search, and intelligent recommendation systems.",
  },
  {
    id: 4,
    title: "Introduction to Advanced Gen AI Tools",
    issuer: "Simplilearn",
    year: "2025",
    status: "Completed",
    badge: "✨",
    description:
      "Successfully completed training on advanced Generative AI tools, gaining practical knowledge of AI-powered productivity, prompt engineering, large language models, and modern AI applications.",
  },
  {
    id: 5,
    title: "Python for Beginners",
    issuer: "Udemy",
    year: "2020",
    status: "Completed",
    badge: "🐍",
    description:
      "Completed foundational Python programming training covering variables, data types, control structures, functions, object-oriented programming, file handling, and problem-solving techniques.",
  },
  {
    id: 6,
    title: "Google Cloud: Big Data and Machine Learning",
    issuer: "Coursera",
    year: "2020",
    status: "Completed",
    badge: "☁️",
    description:
      "Learned the fundamentals of Google Cloud Big Data and Machine Learning services, including data processing, analytics, cloud storage, and machine learning workflows on Google Cloud Platform.",
  },
  {
    id: 7,
    title: "Google Analytics for Beginners",
    issuer: "Google",
    year: "2020",
    status: "Completed",
    badge: "📊",
    description:
      "Completed foundational training in Google Analytics, learning website traffic analysis, user behavior tracking, audience insights, conversion measurement, and performance reporting.",
  },
  {
    id: 8,
    title: "Java for Complete Beginners",
    issuer: "Udemy",
    year: "2020",
    status: "Completed",
    badge: "☕",
    description:
      "Completed comprehensive Java programming training covering core Java, object-oriented programming, collections, exception handling, file operations, and application development fundamentals.",
  },
]);
