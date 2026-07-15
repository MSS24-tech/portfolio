import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import FloatingCards from "./FloatingCards";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroContent() {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-0">
      <div className="grid min-h-[calc(100vh-80px)] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* LEFT */}
        <div className="order-1">
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.35 }}
            className="text-xs uppercase tracking-[4px] text-cyan-400 sm:text-sm sm:tracking-[6px]"
          >
            Welcome to my Portfolio
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mt-3 text-4xl font-black leading-tight sm:mt-5 sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            M S <span className="text-cyan-400">Sharath</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.35, delay: 0.16 }}
            className="mt-5 h-10 text-xl font-semibold text-violet-300 sm:mt-6 sm:h-12 sm:text-3xl"
          >
            <TypeAnimation
              sequence={[
                500,
                "Cloud Engineer",
                2000,
                "React Developer",
                2000,
                "Flutter Developer",
                2000,
                "Module Lead",
                2000,
              ]}
              speed={65}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.4, delay: 0.24 }}
            className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:mt-8 sm:text-lg"
          >
            I believe technology should solve real-world problems through
            thoughtful design and robust engineering. My passion lies in
            crafting scalable cloud solutions, developing modern web and mobile
            applications, and delivering seamless user experiences. Leveraging
            React, Flutter, TypeScript, JavaScript, and Google Cloud Platform, I
            build secure, performant, and maintainable applications that make a
            meaningful impact.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.4, delay: 0.32 }}
            className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row"
          >
            <a
              href="#projects"
              className="rounded-full bg-cyan-500 px-8 py-4 text-center font-semibold text-white transition-colors duration-200 hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="/resume/MSSharath_Frontend_Lead_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
            </a>

            <a
              href="https://mssharath.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-8 py-4 font-semibold text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white"
            >
              Personal Blog
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.2,
          }}
          className="order-2 flex justify-center lg:justify-end"
        >
          <FloatingCards />
        </motion.div>
      </div>
    </section>
  );
}
