import { motion } from "framer-motion";

const stats = [
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
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
          whileHover={{
            scale: 1.05,
            y: -8,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
        >
          <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            {item.number}
          </h2>

          <p className="mt-4 text-gray-400 text-lg">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}