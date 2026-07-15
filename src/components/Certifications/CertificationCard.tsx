import { memo } from "react";
import { motion } from "framer-motion";
import type { Certification } from "./certifications.data";

interface Props {
  certification: Certification;
}

const CertificationCard = ({ certification }: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      whileHover={{
        y: -3,
        transition: { duration: 0.2 },
      }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/10"
    >
      <div className="mb-6 text-5xl">{certification.badge}</div>

      <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
        {certification.status}
      </span>

      <h3 className="mt-5 text-2xl font-bold">{certification.title}</h3>

      <p className="mt-2 text-cyan-400">{certification.issuer}</p>

      <p className="mt-5 leading-7 text-gray-400">
        {certification.description}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-gray-500">{certification.year}</span>
      </div>
    </motion.article>
  );
};

export default memo(CertificationCard);
