import { lazy, Suspense } from "react";
import { experiences } from "./experience.data";

const TimelineItem = lazy(() => import("./TimelineItem"));

export default function Timeline() {
  return (
    <div className="mt-16">
      <Suspense fallback={null}>
        {experiences.map((item) => (
          <TimelineItem
            key={`${item.company}-${item.duration}`}
            item={item}
          />
        ))}
      </Suspense>
    </div>
  );
}