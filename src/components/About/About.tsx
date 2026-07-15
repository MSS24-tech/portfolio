import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import Stats from "./Stats";
import Expertise from "./Expertise";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full text-gray-400 text-lg leading-9 space-y-6"
        >
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
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-20 mt-20">
          <ProfileCard />

          <div>
            <Stats />

            <div className="mt-16">
              <Expertise />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
