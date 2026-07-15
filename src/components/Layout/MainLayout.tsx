import { lazy, Suspense } from "react";
import type { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

const AnimatedBackground = lazy(
  () => import("../Background/AnimatedBackground"),
);

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>

      <Navbar />

      <main>{children}</main>
    </>
  );
}
