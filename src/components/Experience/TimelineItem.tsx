import { memo } from "react";
import { motion } from "framer-motion";
import type { ExperienceItem } from "./experience.data";

interface Props {
  item: ExperienceItem;
}

const TimelineItem = ({ item }: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
        transition: {
          duration: 0.2,
        },
      }}
      className="relative pb-10 pl-10 sm:pb-12 sm:pl-14"
    >
      {/* Timeline Line */}
      <div className="absolute left-3 top-0 h-full w-[2px] bg-white/10 sm:left-4" />

      {/* Timeline Dot */}
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-1 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 shadow-md shadow-cyan-500/20 sm:h-8 sm:w-8"
      />

      {/* Card */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/10 sm:rounded-3xl sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">{item.role}</h3>

            <p className="mt-1 text-sm text-cyan-400 sm:text-base">
              {item.company}
            </p>
          </div>

          <div className="text-left text-sm text-gray-400 sm:text-right sm:text-base">
            <p>{item.duration}</p>
            <p>{item.location}</p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-gray-300 sm:mt-6 sm:text-base sm:leading-8">
          {item.description}
        </p>

        <div className="mt-6 sm:mt-8">
          <h4 className="mb-3 text-base font-semibold sm:mb-4 sm:text-lg">
            Key Achievements
          </h4>

          <ul className="space-y-2 text-sm leading-7 text-gray-300 sm:space-y-3 sm:text-base">
            {item.achievements.map((achievement) => (
              <li key={achievement} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
          {item.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.15 }}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-300 sm:px-4 sm:py-2 sm:text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default memo(TimelineItem);
