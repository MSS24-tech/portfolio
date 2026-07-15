import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "./projects.data";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#08111f] shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="sticky top-4 float-right mr-4 mt-4 z-30 rounded-full bg-black/50 p-2 text-white transition hover:bg-cyan-500"
            >
              <X size={20} />
            </button>

            {/* Hero Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover sm:h-64 lg:h-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
                <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white sm:px-4 sm:py-2 sm:text-sm">
                  {project.category}
                </span>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="grid gap-10 p-5 sm:p-8 lg:grid-cols-[2fr_1fr]">
              {/* Left Side */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  About Project
                </h3>

                <p className="text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
                  {project.description}
                </p>

                {project.highlights && (
                  <>
                    <h3 className="mb-4 mt-10 text-xl font-semibold text-white">
                      Highlights
                    </h3>

                    <ul className="space-y-4">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-gray-300 sm:text-base"
                        >
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Right Side */}
              <div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg sm:p-6">
                  <h3 className="mb-6 text-xl font-semibold text-white">
                    Project Info
                  </h3>

                  {project.duration && (
                    <div className="mb-5">
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="mt-1 text-white">{project.duration}</p>
                    </div>
                  )}

                  {project.organization && (
                    <div className="mb-5">
                      <p className="text-sm text-gray-400">Organization</p>
                      <p className="mt-1 text-white">{project.organization}</p>
                    </div>
                  )}

                  <div>
                    <p className="mb-3 text-sm text-gray-400">Technologies</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
