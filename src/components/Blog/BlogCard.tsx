import { motion } from "framer-motion";
import type { Blog } from "./blog.data";

interface Props {
  blog: Blog;
  index: number;
}

export default function BlogCard({ blog, index }: Props) {
  return (
    <motion.a
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="p-7">
        <div className="flex items-center justify-between text-sm text-cyan-400">
          <span>{blog.category}</span>
          <span>{blog.readTime}</span>
        </div>

        <h3 className="mt-5 text-2xl font-bold">
          {blog.title}
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          {blog.description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-gray-500">
            {blog.date}
          </span>

          <span className="font-semibold text-cyan-400">
            Read Article →
          </span>
        </div>
      </div>
    </motion.a>
  );
}