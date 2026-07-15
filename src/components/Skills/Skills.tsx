import { motion } from "framer-motion";
import SkillCategory from "./SkillCategory";
import { skillCategories } from "./skills.data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-5 max-w-3xl"
        >
          Modern technologies I use to build scalable cloud,
          web, and mobile applications.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}