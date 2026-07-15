import { motion } from "framer-motion";
import type { Certification } from "./certifications.data";

interface Props {
  certification: Certification;
  index: number;
}

export default function CertificationCard({
  certification,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-6 text-5xl">
          {certification.badge}
        </div>

        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
          {certification.status}
        </span>

        <h3 className="mt-5 text-2xl font-bold">
          {certification.title}
        </h3>

        <p className="mt-2 text-cyan-400">
          {certification.issuer}
        </p>

        <p className="mt-5 leading-7 text-gray-400">
          {certification.description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-gray-500">
            {certification.year}
          </span>

          {/* <span className="font-semibold text-cyan-400">
            View Credential →
          </span> */}
        </div>
      </div>
    </motion.div>
  );
}