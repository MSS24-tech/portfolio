export interface Blog {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Building Scalable Cloud Applications with GCP",
    description:
      "Learn how to architect scalable cloud-native applications using Google Cloud Platform.",
    category: "Cloud",
    date: "July 2026",
    readTime: "6 min read",
    image: "/images/blog-gcp.jpg",
    url: "#"
  },
  {
    id: 2,
    title: "Creating High-Performance React Applications",
    description:
      "Best practices for building fast, maintainable, and scalable React applications.",
    category: "React",
    date: "June 2026",
    readTime: "5 min read",
    image: "/images/blog-react.jpg",
    url: "#"
  },
  {
    id: 3,
    title: "Flutter Tips for Cross-Platform Apps",
    description:
      "Improve performance and maintainability in Flutter applications.",
    category: "Flutter",
    date: "May 2026",
    readTime: "4 min read",
    image: "/images/blog-flutter.jpg",
    url: "#"
  }
];