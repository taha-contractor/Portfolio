import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaSchool } from "react-icons/fa";
import { fadeUp } from "./animationHelpers";

const Education = () => {
  const education = [
    {
      title: "Bachelor of Engineering – Information Technology",
      place: "Konkan Gyanpeeth College of Engineering (KGCE - Karjat), Mumbai University",
      year: "2023 – 2027 (Pursuing)",
      icon: <FaGraduationCap />,
    },
    {
      title: "Higher Secondary Education (HSC)",
      place: "St. Xavier's College, Mumbai",
      year: "2022 – 2023",
      icon: <FaBook />,
    },
    {
      title: "Secondary School Education (SSC)",
      place: "GSG High School, Karjat",
      year: "2020 – 2021",
      icon: <FaSchool />,
    },
  ];

  return (
    <section id="education" className="py-8 md:py-10 bg-gradient-to-br from-gray-900/90 via-indigo-900/20 to-purple-900/30 relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-6rem] top-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Academic Background
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-800/70 to-indigo-900/30 border border-white/15 rounded-2xl p-5 sm:p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.25)] backdrop-blur-sm overflow-hidden flex flex-col"
            >
              {/* Top accent glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-t-2xl pointer-events-none group-hover:via-cyan-400/60 transition-all duration-300" />

              <div className="flex items-center justify-between gap-4 mb-3">
                <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase font-medium">
                  {edu.year}
                </p>
                <div className="text-cyan-400/80 text-xl group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  {edu.icon}
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-sky-100 group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                {edu.title}
              </h3>

              <p className="mt-2.5 text-sm md:text-base text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-200">
                {edu.place}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;