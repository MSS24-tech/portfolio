import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import type { Project } from "./projects.data";

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onOpen,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
      onClick={() => onOpen(project)}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full bg-cyan-500/90 px-3 py-1 text-xs font-semibold text-white">
          {project.category}
        </div>

        <div className="absolute right-5 top-5 text-3xl font-black text-white/20">
          {String(project.id).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 line-clamp-3 text-gray-400 leading-7">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8 flex flex-wrap gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen(project);
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-white transition hover:bg-cyan-400"
          >
            <Eye size={18} />
            View Details
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}