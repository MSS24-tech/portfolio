import { motion } from "framer-motion";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-5 max-w-3xl text-gray-400"
        >
          A selection of cloud, web, and mobile applications
          built using modern technologies.
        </motion.p>

        <ProjectGrid />
      </div>
    </section>
  );
}