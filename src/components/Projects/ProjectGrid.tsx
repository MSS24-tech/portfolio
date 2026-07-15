import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "./projects.data";

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <>
      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}