import { motion } from "framer-motion";

interface Props {
  name: string;
  level: number;
}

export default function SkillCard({ name, level }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -6,
      }}
      className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5"
    >
      <div className="flex justify-between mb-3">
        <span className="font-medium">{name}</span>
        <span className="text-cyan-400">{level}%</span>
      </div>

      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
        />
      </div>
    </motion.div>
  );
}