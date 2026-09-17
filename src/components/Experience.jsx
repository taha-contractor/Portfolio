import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { fadeUp } from "./animationHelpers";

const experiences = [
  {
    role: "Artificial Intelligence & Machine Learning Intern",
    company: "IT Mines Technologies Pvt. Ltd.",
    duration: "Dec 2025 - May 2026 (6 Months)",
    location: "Mumbai, India",
    description: [
      "Worked on an AI-driven document automation project focused on intelligent PDF form filling and data extraction.",
      "Contributed to automated workflows using Optical Character Recognition (OCR), Natural Language Processing (NLP), and Large Language Models (LLMs) to interpret and process structured and unstructured documents.",
      "Designed robust document processing pipelines, developed intelligent form-mapping workflows, and assisted with prompt engineering and LLM integrations.",
      "Optimized automation workflows to improve extraction accuracy and reduce manual document preprocessing efforts."
    ],
    tech: ["Python", "OCR", "NLP", "LLMs (Generative AI)", "Prompt Engineering", "Workflow Automation"]
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    duration: "2024 - Present",
    location: "Mumbai, India",
    description: [
      "Designed and deployed a responsive QR-based Digital Menu Ordering System for restaurants with real-time staff/admin panels.",
      "Engineered secure Firebase role-based authentication rules, database structures, and responsive layouts using Tailwind CSS.",
      "Integrated CSV reporting, tax configurations, and instant notification systems, helping restaurants reduce ordering wait times by 30%."
    ],
    tech: ["ReactJS", "Tailwind CSS", "Framer Motion", "Firebase Firestore", "Firebase Authentication"]
  },
  {
    role: "Open Source Contributor & Developer",
    company: "Tech Community",
    duration: "2023 - Present",
    location: "Mumbai, India",
    description: [
      "Participated in collaborative university coding challenges, college hackathons (SIH prep), and technical presentations.",
      "Designed, developed, and maintained 4+ featured repositories spanning desktop applications, Pygame 2D modules, and APIs.",
      "Contributed to testing, code refactoring, and comprehensive user documentation for team-based academic project modules."
    ],
    tech: ["Python", "Java Swing", "MySQL", "Git", "GitHub Pages"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-24 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="pointer-events-none absolute left-[-4rem] top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] bottom-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            My Professional & Building Journey
          </h2>
        </motion.div>

        {/* Full-Width Cards Stack */}
        <div className="space-y-6 mt-10 w-full">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp(idx * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full group"
            >
              {/* Card Container */}
              <div className="bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-5 sm:p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm relative w-full">
                {/* Accent glow on top header */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-t-2xl pointer-events-none" />

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-sky-100 group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400/90 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="text-cyan-400" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="text-cyan-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Descriptions */}
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-300 mb-5 leading-relaxed">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="hover:text-white transition-colors duration-200">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech Badge Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs md:text-sm text-slate-300 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:text-white transition-all duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
