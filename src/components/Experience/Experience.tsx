import { motion } from "framer-motion";
import Timeline from "./Timeline";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 15,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="text-5xl font-bold"
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.3,
            delay: 0.08,
          }}
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