import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import FloatingCards from "./FloatingCards";

export default function HeroContent() {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-0">
      <div className="grid min-h-[calc(100vh-80px)] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* LEFT */}
        <div className="order-1">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-[4px] text-cyan-400 sm:text-sm sm:tracking-[6px]"
          >
            Welcome to my Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-4xl font-black leading-tight sm:mt-5 sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            M S <span className="text-cyan-400">Sharath</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-5 h-10 text-xl font-semibold text-violet-300 sm:mt-6 sm:h-12 sm:text-3xl"
          >
            <TypeAnimation
              sequence={[
                "Cloud Engineer",
                2000,
                "React Developer",
                2000,
                "Flutter Developer",
                2000,
                "Module Lead",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row"
          >
            <a
              href="#projects"
              className="rounded-full bg-cyan-500 px-8 py-4 text-center font-semibold text-white transition hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="src/assets/MSSharath_Frontend_Lead_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="order-2 flex justify-center lg:justify-end"
        >
          <FloatingCards />
        </motion.div>
      </div>
    </section>
  );
}
