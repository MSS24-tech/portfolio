import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import profileImage from "../../images/A3.webp";

const FloatingCards = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.img
      src={profileImage}
      alt="M S Sharath"
      width={850}
      height={850}
      loading="eager"
      decoding="async"
      fetchPriority="high"
      draggable={false}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1, scale: 1 }
          : {
              opacity: 1,
              scale: 1,
              y: [0, -5, 0],
            }
      }
      transition={{
        opacity: {
          duration: 0.4,
        },
        scale: {
          duration: 0.4,
        },
        y: {
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
      className="
        w-[420px]
        md:w-[520px]
        lg:w-[650px]
        xl:w-[760px]
        2xl:w-[850px]
        h-auto
        object-contain
        select-none
        will-change-transform
      "
    />
  );
};

export default memo(FloatingCards);
