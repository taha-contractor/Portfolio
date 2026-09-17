import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { fadeUp } from "./animationHelpers";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute right-[-4rem] top-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="pointer-events-none absolute left-[-4rem] bottom-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Turning Concepts Into Scalable, Real-World Products
          </h2>

          <div className="bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-cyan-400">
              Passionate IT Student & Full-Stack Developer
            </h3>

            <div className="space-y-4 text-sm md:text-base text-slate-300 leading-relaxed">
              <p>
                I am currently pursuing my Bachelor's in Information Technology from Konkan Gyanpeeth College of Engineering (Mumbai University). I enjoy understanding systems end-to-end — from designing intuitive user interfaces to building efficient backend logic, managing databases, and handling basic deployment.
              </p>

              <p>
                My core interests include <span className="text-cyan-300 font-medium">web development</span>, <span className="text-cyan-300 font-medium">AI/ML</span>, <span className="text-cyan-300 font-medium">cybersecurity</span>, and <span className="text-cyan-300 font-medium">cloud technologies</span>. I enjoy experimenting, building purposeful <span className="text-cyan-300 font-medium">side projects</span>, and participating in <span className="text-cyan-300 font-medium">hackathons</span> or technical challenges that push me beyond my comfort zone.
              </p>

              <p>
                I am currently seeking opportunities where I can contribute meaningfully, learn from experienced engineers, and grow into a well-rounded, impactful software developer.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
              <motion.a
                href="/Taha_Contractor_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(56,189,248,0.4)] hover:shadow-[0_25px_50px_rgba(56,189,248,0.6)] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="text-base" />
                <span>Download Resume</span>
              </motion.a>

              <div className="flex flex-wrap gap-2.5">
                {["Problem Solver", "Quick Learner", "Team Player"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs md:text-sm text-slate-300 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:text-white transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;