import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { fadeUp } from "./animationHelpers";

const About = () => {
  return (
    <section id="about" className="py-8 md:py-10 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden">
      {/* Decorative Orbs matching Experience */}
      <div className="pointer-events-none absolute left-[-4rem] top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] bottom-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading motion block matching Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Curious by Nature. Driven to Build.
          </h2>

          <p className="text-base md:text-lg text-sky-400/80 font-medium mb-6">
            AI/ML &amp; Full-Stack Developer
          </p>
        </motion.div>

        {/* Content motion */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <div className="space-y-4 text-sm md:text-base text-slate-300 leading-relaxed w-full">
            <p>
              I&apos;m a developer who enjoys understanding how things work beneath the surface and turning ideas into practical, real-world solutions. I love experimenting with new technologies, building projects, and constantly pushing myself beyond what I already know.
            </p>

            <p>
              My interests span <span className="text-cyan-300 font-medium">AI/ML</span>, <span className="text-cyan-300 font-medium">Generative AI</span>, <span className="text-cyan-300 font-medium">full-stack development</span>, <span className="text-cyan-300 font-medium">cybersecurity</span>, and <span className="text-cyan-300 font-medium">cloud technologies</span>. I&apos;m currently pursuing my Bachelor&apos;s in Information Technology at Konkan Gyanpeeth College of Engineering, Mumbai University, while building projects that turn concepts into working products.
            </p>

            <p>
              I&apos;m looking for opportunities where I can contribute, learn from experienced engineers, solve meaningful problems, and grow as a developer.
            </p>
          </div>

          <div className="pt-8 flex flex-col gap-3">
            <motion.a
              href="/Taha_Contractor_Resume.pdf"
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(56,189,248,0.4)] hover:shadow-[0_25px_50px_rgba(56,189,248,0.6)] transition-all duration-300 w-fit"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="text-base" />
              <span>Download Resume</span>
            </motion.a>

            <p className="text-sm text-slate-400 font-medium tracking-wide">
              AI/ML &nbsp;·&nbsp; Full-Stack &nbsp;·&nbsp; Generative AI
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;