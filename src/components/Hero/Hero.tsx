import { lazy, Suspense } from "react";

const HeroContent = lazy(() => import("./HeroContent"));
const ScrollIndicator = lazy(() => import("./ScrollIndicator"));

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <Suspense fallback={<div className="min-h-[70vh]" />}>
          <HeroContent />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-8">
          <ScrollIndicator />
        </div>
      </Suspense>
    </section>
  );
}
