import { memo } from "react";

const expertise = Object.freeze([
  "Cloud Architecture",
  "React Development",
  "Flutter Apps",
  "Google Cloud Platform",
  "CI/CD Pipelines",
  "Docker",
  "Kubernetes",
  "REST APIs",
]);

const Expertise = () => {
  return (
    <section aria-labelledby="core-expertise">
      <h3
        id="core-expertise"
        className="text-3xl font-bold mb-8"
      >
        Core Expertise
      </h3>

      <div className="flex flex-wrap gap-4">
        {expertise.map((skill) => (
          <span
            key={skill}
            className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default memo(Expertise);