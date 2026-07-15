import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { blogs } from "./blog.data";

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-black"
        >
          Latest Insights
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-3xl text-center text-gray-400 leading-8"
        >
          Sharing practical insights, tutorials, and experiences
          in cloud computing, frontend engineering, mobile
          development, and modern software architecture.
        </motion.p>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}