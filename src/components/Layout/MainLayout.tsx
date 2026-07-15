import type { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import AnimatedBackground from "../Background/AnimatedBackground";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>{children}</main>
    </>
  );
}