import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="w-7 h-12 border rounded-full border-white/30 flex justify-center">
        <div className="w-1 h-3 rounded-full bg-cyan-400 mt-2" />
      </div>
    </motion.div>
  );
}