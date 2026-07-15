import { lazy, Suspense } from "react";

import MainLayout from "./components/Layout/MainLayout";
import Hero from "./components/Hero/Hero";

const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Certifications = lazy(
  () => import("./components/Certifications/Certifications")
);
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));
// const Blog = lazy(() => import("./components/Blog/Blog"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <MainLayout>
      <Hero />

      <Suspense fallback={<SectionLoader />}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </Suspense>
    </MainLayout>
  );
}

export default App;