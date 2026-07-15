import TimelineItem from "./TimelineItem";
import { experiences } from "./experience.data";

export default function Timeline() {
  return (
    <div className="mt-16">
      {experiences.map((item) => (
        <TimelineItem
          key={`${item.company}-${item.duration}`}
          item={item}
        />
      ))}
    </div>
  );
}