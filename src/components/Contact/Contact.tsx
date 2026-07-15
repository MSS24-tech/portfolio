import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import { contactItems } from "./contact.data";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="text-5xl font-bold"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          className="mt-5 max-w-3xl text-gray-400"
        >
          Interested in working together or discussing a new opportunity? Feel
          free to reach out through any of the channels below.
        </motion.p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => (
            <ContactCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
