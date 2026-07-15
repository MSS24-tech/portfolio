import { motion } from "framer-motion";
import profileImage from "../../images/A4.jpeg";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10"
    >
      <div className="w-40 h-40 mx-auto rounded-full bg-white overflow-hidden flex items-center justify-center">
        <img
          src={profileImage}
          alt="M S Sharath"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>

      <h3 className="text-3xl font-bold text-center mt-8">M S Sharath</h3>

      <p className="text-center text-cyan-400 mt-3">Cloud Engineer</p>

      <div className="mt-10 space-y-5 text-gray-300">
        <p>✔ 4+ Years Experience</p>

        <p>✔ Enterprise Applications</p>

        <p>✔ Google Cloud Platform</p>

        <p>✔ React & Flutter</p>

        <p>✔ Module Lead</p>

        <p>✔ Founder – Sumukha Tech Solutions</p>
      </div>
    </motion.div>
  );
}
