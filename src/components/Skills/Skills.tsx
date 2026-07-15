import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "./skills.data";

const SkillCategory = lazy(() => import("./SkillCategory"));

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="text-5xl font-bold"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.3,
            delay: 0.08,
          }}
          className="mt-5 max-w-3xl text-gray-400"
        >
          Modern technologies I use to build scalable cloud,
          web, and mobile applications.
        </motion.p>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <Suspense key={category.title} fallback={null}>
              <SkillCategory category={category} />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
}