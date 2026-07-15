import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProfileCard = lazy(() => import("./ProfileCard"));
const Stats = lazy(() => import("./Stats"));
const Expertise = lazy(() => import("./Expertise"));

function Loader() {
  return (
    <div className="h-80 flex items-center justify-center">
      <div className="h-8 w-8 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "300px",
  });

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="text-5xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        {/* Description (No animation for better performance) */}
        <div className="w-full text-gray-400 text-lg leading-9 space-y-6">
          <p>
            I'm <span className="text-white font-semibold">M S Sharath</span>, a
            Cloud Engineer with over{" "}
            <span className="text-cyan-400">5+ years of experience</span> in
            designing and delivering enterprise-grade cloud solutions, modern
            web applications, and cross-platform mobile applications. My
            expertise lies in building scalable, secure, and high-performance
            software that solves real-world business challenges while delivering
            seamless user experiences.
          </p>

          <p>
            Throughout my career, I have worked across the complete software
            development lifecycle—from understanding business requirements and
            designing scalable architectures to development, deployment, and
            continuous optimization. I enjoy transforming complex ideas into
            reliable digital products by leveraging technologies such as
            <span className="text-white">
              {" "}
              Google Cloud Platform (GCP), React, Flutter, TypeScript,
              JavaScript, HTML, CSS,
            </span>{" "}
            and REST APIs while following clean architecture principles,
            industry best practices, and performance-driven development.
          </p>

          <p>
            Beyond writing code, I have experience leading development modules,
            collaborating with cross-functional teams, participating in Agile
            delivery processes, mentoring developers, and ensuring the
            successful delivery of high-quality software solutions. I strongly
            believe that exceptional software is built through technical
            excellence, continuous learning, effective collaboration, and a deep
            understanding of user needs.
          </p>

          <p>
            I am passionate about exploring emerging technologies, optimizing
            application performance, and creating scalable digital experiences
            that are both intuitive and impactful. Whether it's architecting
            cloud-native solutions, developing responsive web applications, or
            building cross-platform mobile apps, my goal is to deliver
            innovative, future-ready solutions that create lasting value for
            businesses and their users.
          </p>
        </div>

        {/* Cards */}
        {inView && (
          <div className="grid lg:grid-cols-2 gap-20 mt-20">
            <Suspense fallback={<Loader />}>
              <ProfileCard />
            </Suspense>

            <div>
              <Suspense fallback={<Loader />}>
                <Stats />
              </Suspense>

              <div className="mt-16">
                <Suspense fallback={<Loader />}>
                  <Expertise />
                </Suspense>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}