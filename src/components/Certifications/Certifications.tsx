import { motion } from "framer-motion";
import CertificationCard from "./CertificationCard";
import { certifications } from "./certifications.data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-black"
        >
          Certifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-center leading-8 text-gray-400"
        >
          Professional certifications that demonstrate my
          expertise in cloud technologies, frontend engineering,
          mobile development, and modern software practices.
        </motion.p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((item, index) => (
            <CertificationCard
              key={item.id}
              certification={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}