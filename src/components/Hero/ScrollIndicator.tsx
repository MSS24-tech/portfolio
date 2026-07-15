import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ScrollIndicator = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [0, 6, 0],
            }
      }
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 will-change-transform"
    >
      <div className="flex h-12 w-7 justify-center rounded-full border border-white/30">
        <div className="mt-2 h-3 w-1 rounded-full bg-cyan-400" />
      </div>
    </motion.div>
  );
};

export default memo(ScrollIndicator);
