import { memo } from "react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  level: number;
}

const SkillCard = ({ name, level }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      whileHover={{
        y: -3,
        transition: {
          duration: 0.15,
        },
      }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/10"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-medium text-white">{name}</span>

        <span className="font-medium text-cyan-400">{level}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: level / 100 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.45,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            originX: 0,
          }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500"
        />
      </div>
    </motion.div>
  );
};

export default memo(SkillCard);
