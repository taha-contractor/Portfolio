import React from "react";
import { motion } from "framer-motion";
import { VscGraph} from "react-icons/vsc";
import { 
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaLinux,
  FaWindows,
  FaAws,
  FaDatabase,
  FaNetworkWired,
  FaBrain,
  FaDev,
  FaChartArea,
  FaFilter,
  FaServer,
} from "react-icons/fa";
import {
  SiNumpy,
  SiPandas, 
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiThealgorithms,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiDocker,
  SiCplusplus,
  SiLangchain,
  SiLanguagetool,
  SiOpencv,
} from "react-icons/si";
import { fadeUp } from "./animationHelpers";
import { MdEngineering, MdLanguage } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { PiOpenAiLogo } from "react-icons/pi";

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: [
        { icon: <FaPython />, label: "Python" },
        { icon: <FaJava />, label: "Java" },
        { icon: <SiCplusplus />, label: "C/C++" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { icon: <FaHtml5 />, label: "HTML" },
        { icon: <FaCss3Alt />, label: "CSS" },
        { icon: <SiTailwindcss />, label: "Tailwind CSS" },
        { icon: <SiJavascript />, label: "JavaScript" },
      ],
    },
    {
      title: "Frontend / Backend Frameworks",
      skills: [
        { icon: <FaReact />, label: "ReactJS" },
        { icon: <FaPython />, label: "Streamlit" },
        { icon: <SiNodedotjs />, label: "NodeJS" },
        { icon: <SiExpress />, label: "ExpressJS" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMysql />, label: "MySQL" },
        { icon: <SiMongodb />, label: "MongoDB" },
        { icon: <SiFirebase />, label: "Firebase" },
      ],
    },
    {
      title: "Machine Learning / Data Science",
      skills: [
        { icon: <SiNumpy />, label: "NumPy" },
        { icon: <SiPandas />, label: "Pandas" },
        { icon: <VscGraph />, label: "Matplotlib" },
        { icon: <VscGraph />, label: "Seaborn" },
        { icon: <FaBrain />, label: "Scikit-learn" },
        { icon: <FaChartArea />, label: "Exploratory Data Analysis (EDA)" },
        { icon: <FaFilter />, label: "Data Cleaning & Preprocessing" },
        { icon: <MdEngineering />, label: "Feature Extraction & Engineering" },
      ],
    },
    {
      title: "Artificial Intelligence",
      skills: [
        { icon: <GiArtificialIntelligence />, label: "Prompt Engineering" },
        { icon: <PiOpenAiLogo />, label: "Large Language Models (LLMs)" },
        { icon: <FaServer />, label: "Model Context Protocols (MCP)" },
        { icon: <SiLangchain />, label: "LangChain" },
        { icon: <MdLanguage />, label: "LangGraph" },
        { icon: <SiLanguagetool />, label: "Natural Language Processing (NLP)" },
        { icon: <SiOpencv />, label: "Optical Character Recognition (OCR)" },
      ],
    },
    {
      title: "Operating Systems",
      skills: [
        { icon: <FaLinux />, label: "Linux" },
        { icon: <FaWindows />, label: "Windows" },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { icon: <FaAws />, label: "AWS" },
        { icon: <FaGitAlt />, label: "Git" },
        { icon: <FaGithub />, label: "GitHub" },
        { icon: <SiDocker />, label: "Docker" },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { icon: <SiThealgorithms />, label: "Data Structures & Algorithms (DSA)" },
        { icon: <FaJava />, label: "OOPs Concepts" },
        { icon: <FaDatabase />, label: "DBMS" },
        { icon: <FaNetworkWired />, label: "Computer Networks" },
        { icon: <FaLinux />, label: "Operating Systems" },
        { icon: <FaDev />, label: "Software Engineering" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-24 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden">
      <div className="pointer-events-none absolute right-[-4rem] bottom-0 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="pointer-events-none absolute left-[-4rem] top-0 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
            Skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              variants={fadeUp(idx * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="relative bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)]"
            >
              <h3 className="text-sm sm:text-base font-semibold text-cyan-300 mb-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-cyan-400">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((s) => (
                  <motion.div
                    whileHover={{ y: -4, scale: 1.03 }}
                    key={s.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-sm md:text-base text-slate-300 leading-relaxed hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-200 group"
                  >
                    <span className="text-lg sm:text-xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                      {s.icon}
                    </span>
                    <span className="group-hover:text-white transition-colors duration-200">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;