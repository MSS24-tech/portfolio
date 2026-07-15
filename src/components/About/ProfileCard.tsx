import { memo } from "react";
import { motion } from "framer-motion";
import profileImage from "../../images/A4.webp";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="rounded-3xl bg-white/5 border border-white/10 p-10"
    >
      <div className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-white">
        <img
          src={profileImage}
          alt="M S Sharath"
          width={160}
          height={160}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="h-full w-full object-contain"
        />
      </div>

      <h3 className="mt-8 text-center text-3xl font-bold">M S Sharath</h3>

      <p className="mt-3 text-center text-cyan-400">Cloud Engineer</p>

      <ul className="mt-10 space-y-5 text-gray-300">
        <li>✔ 4+ Years Experience</li>
        <li>✔ Enterprise Applications</li>
        <li>✔ Google Cloud Platform</li>
        <li>✔ React & Flutter</li>
        <li>✔ Module Lead</li>
        <li>✔ Founder – Sumukha Tech Solutions</li>
      </ul>
    </motion.div>
  );
};

export default memo(ProfileCard);
