import SkillCard from "./SkillCard";
import type { SkillCategory as SkillCategoryType } from "./skills.data";

interface Props {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h3 className="mb-6 text-2xl font-bold">
        {category.title}
      </h3>

      <div className="space-y-5">
        {category.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
}