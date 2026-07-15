import { motion } from "framer-motion";

interface Props {
  icon: any;
  title: string;
  value: string;
  link: string;
}

export default function ContactCard({
  icon: Icon,
  title,
  value,
  link,
}: Props) {
  return (
    <motion.a
      href={link}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      whileHover={{ y: -6, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 block transition"
    >
      <Icon className="text-cyan-400 text-3xl mb-5" />

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-gray-400 break-all">
        {value}
      </p>
    </motion.a>
  );
}