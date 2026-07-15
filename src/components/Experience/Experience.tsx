import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold"
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-5 max-w-3xl text-gray-400"
        >
          Crafting scalable cloud solutions, engineering modern digital
          experiences, and delivering enterprise-grade software with precision,
          innovation, and impact.
        </motion.p>

        <Timeline />
      </div>
    </section>
  );
}
