import { lazy, memo, Suspense } from "react";
import type { SkillCategory as SkillCategoryType } from "./skills.data";

const SkillCard = lazy(() => import("./SkillCard"));

interface Props {
  category: SkillCategoryType;
}

const SkillCategory = ({ category }: Props) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors duration-300 hover:border-cyan-400/20">
      <h3 className="mb-6 text-2xl font-bold">{category.title}</h3>

      <div className="space-y-5">
        {category.skills.map((skill) => (
          <Suspense key={skill.name} fallback={null}>
            <SkillCard name={skill.name} level={skill.level} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default memo(SkillCategory);
