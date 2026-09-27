import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiCheckCircle, FiLayers, FiUserCheck, FiCpu } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { smoothScale } from "./animationHelpers";

const ProjectDetailModal = ({ project, onClose }) => {
  const modalContentRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Close on backdrop click outside modal content
  const handleBackdropClick = (e) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        ref={modalContentRef}
        variants={smoothScale(0)}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950/70 border border-white/20 rounded-2xl shadow-[0_25px_70px_rgba(15,23,42,0.95)] overflow-hidden"
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-2xl flex-shrink-0">
              {project.icon}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] sm:text-xs tracking-[0.25em] text-cyan-400/90 uppercase font-semibold">
                  Case Study &amp; Technical Breakdown
                </span>
                {project.status === "IN DEVELOPMENT" && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-semibold tracking-wider uppercase bg-amber-400/15 border border-amber-400/40 text-amber-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    In Development
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-transparent">
          {/* Detailed Overview */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sky-300 mb-2 flex items-center gap-2">
              <FiLayers className="text-cyan-400" />
              <span>Project Overview</span>
            </h3>
            <p className="text-slate-300 leading-relaxed bg-white/[0.02] border border-white/5 rounded-xl p-4">
              {project.longDesc}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sky-300 mb-3 flex items-center gap-2">
                <FiCheckCircle className="text-cyan-400" />
                <span>Key Features &amp; Capabilities</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 bg-white/[0.02] border border-white/5 rounded-xl p-3 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Role & Contributions */}
          {project.role && (
            <div>
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sky-300 mb-2 flex items-center gap-2">
                <FiUserCheck className="text-cyan-400" />
                <span>My Role &amp; Contribution</span>
              </h3>
              <p className="text-slate-300 leading-relaxed bg-white/[0.02] border border-white/5 rounded-xl p-4 text-xs sm:text-sm">
                {project.role}
              </p>
            </div>
          )}

          {/* Challenges & Learnings */}
          {project.challenges && (
            <div>
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sky-300 mb-2 flex items-center gap-2">
                <FiCpu className="text-cyan-400" />
                <span>Engineering Challenges &amp; Learnings</span>
              </h3>
              <p className="text-slate-300 leading-relaxed bg-white/[0.02] border border-white/5 rounded-xl p-4 text-xs sm:text-sm">
                {project.challenges}
              </p>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sky-300 mb-3">
              Technologies &amp; Tools Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs text-cyan-200 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-slate-950/50 flex flex-wrap items-center justify-end gap-3">
          {/* Live Demo Button (Conditional) */}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-[0_10px_25px_rgba(56,189,248,0.4)] hover:shadow-[0_15px_35px_rgba(56,189,248,0.6)] transition-all duration-300 flex items-center gap-2"
            >
              <span>Live Demo</span>
              <FiExternalLink className="text-sm" />
            </a>
          )}

          {/* GitHub Repository Button (Always shown) */}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 hover:border-cyan-400/60 hover:bg-cyan-400/10 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-2"
          >
            <FaGithub className="text-base" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailModal;