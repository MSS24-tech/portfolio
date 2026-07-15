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
              y: [0, 4, 0],
            }
      }
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="
  absolute
  bottom-0
  sm:bottom-2
  md:bottom-6
  lg:bottom-8
  left-1/2
  -translate-x-1/2
  z-20
  will-change-transform
  pointer-events-none
"
    >
      <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/30">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 8, 0],
                }
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="mt-2 h-3 w-1 rounded-full bg-cyan-400"
        />
      </div>
    </motion.div>
  );
};

export default memo(ScrollIndicator);
