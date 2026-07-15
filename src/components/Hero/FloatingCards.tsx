import { motion } from "framer-motion";
import profileImage from "../../images/A3.png";

export default function FloatingCards() {
  return (
    <motion.img
      src={profileImage}
      alt="M S Sharath"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 },
        y: {
          duration: 5,
          repeat: Infinity,
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
      "
      draggable={false}
    />
  );
}