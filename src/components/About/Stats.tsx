import { memo } from "react";
import { motion } from "framer-motion";

const stats = Object.freeze([
  {
    number: "4+",
    title: "Years Experience",
  },
  {
    number: "20+",
    title: "Projects Delivered",
  },
  {
    number: "15+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Commitment",
  },
]);

const Stats = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((item) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
        >
          <h2 className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-5xl font-black text-transparent">
            {item.number}
          </h2>

          <p className="mt-4 text-lg text-gray-400">{item.title}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default memo(Stats);
