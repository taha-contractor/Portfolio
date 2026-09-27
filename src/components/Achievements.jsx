import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiX, FiChevronDown, FiExternalLink } from "react-icons/fi";
import { fadeUp, smoothScale } from "./animationHelpers";

// A card only gets a "View Credential" action when it has a real, non-empty URL.
const hasCredentialUrl = (url) => typeof url === "string" && url.trim().length > 0;

// credentialUrl is optional - paste the issuer's verification link where available,
// leave it empty to hide the action on that card.
const certificates = [
  {
    src: "/certificates/OCI_GenAI.png",
    title: "OCI Generative AI Professional",
    learn: "Deep understanding of Oracle Cloud Infrastructure and Generative AI services, including deploying, managing, and optimizing AI models in enterprise cloud environments.",
    issuer: "Oracle University",
    year: "2025",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=24F2950656C16BB9978706553410229067478E9941A99E6E8E2575C593A2F442"
  },
  {
    src: "/certificates/JPMorgan.png",
    title: "Software Engineering Job Simulation",
    learn: "Hands-on experience in setting up backend systems, integrating Kafka and H2 databases, and building REST APIs and controllers following real industry workflows.",
    issuer: "JPMorgan Chase & Co. (Forage)",
    year: "2025",
    credentialUrl: ""
  },
  {
    src: "/certificates/NxtWave_Completion.png",
    title: "GenAI Model Building Hands-on Project",
    learn: "Practical skills in designing and building a simple generative AI model, understanding core AI concepts, and applying them through a guided hands-on workshop.",
    issuer: "NxtWave",
    year: "2025",
    credentialUrl: ""
  },
  {
    src: "/certificates/PythonQuiz.jpg",
    title: "National Level Python Programming Quiz",
    learn: "Gained strong understanding of Python fundamentals and problem-solving concepts by successfully completing a national-level competitive quiz.",
    issuer: "Sigma Institute of Engineering, Vadodara",
    year: "2023",
    credentialUrl: ""
  },
  {
    src: "/certificates/PasswordSecurity.png",
    title: "Password Security - National Cyber Security Awareness",
    learn: "Gained strong understanding of secure password practices, threats, and protection techniques essential for maintaining digital safety.",
    issuer: "Ministry of Electronics and Information Technology (Govt of India)",
    year: "2021",
    credentialUrl: "https://infosecawareness.in/validate-certificate?certid=ISEA/NCSAM/PWDSEC/32404"
  },
  {
    src: "/certificates/WhatsappSecurity.png",
    title: "WhatsApp Security - National Cyber Security Awareness",
    learn: "Learned key principles of WhatsApp privacy, message security, and how to prevent common cyber-attacks targeting social messaging platforms.",
    issuer: "Ministry of Electronics and Information Technology (Govt of India)",
    year: "2021",
    credentialUrl: "https://infosecawareness.in/validate-certificate?certid=ISEA/NCSAM/WHASEC/34785"
  }
];

// Each achievement is its own card - year is optional and hides itself when unknown.
const achievements = [
  {
    event: "Smart India Hackathon 2026",
    title: "Smart State Transport System",
    desc: "Worked on a smart public transportation solution using IoT sensors and cameras on public transport buses for improved monitoring, safety, and real-time data collection.",
    year: "2026",
    status: "National Level"
  },

  {
    event: "Smart India Hackathon 2025",
    title: "AI-Powered Career Guidance System",
    desc: "Participated in the Smart India Hackathon college-level competition, developing an AI-powered career guidance system to help students explore career paths and receive personalized guidance.",
    year: "2025",
    status: "College Level"
  },

  {
    event: "Ideathon 2025",
    title: "RAG-Based Study Assistance System",
    desc: "Developed a Retrieval-Augmented Generation (RAG) system designed to help college students study by retrieving relevant academic information and generating contextual responses.",
    year: "2025",
    status: "Ideathon"
  },

  {
    event: "National Level Python Programming Quiz",
    title: "Python Programming Quiz",
    desc: "Competed in a national-level programming quiz, strengthening fundamentals in Python syntax, logic building, and problem solving under timed conditions.",
    year: "2023",
    status: "National Level"
  }
];

const Achievements = () => {
  const [certOpen, setCertOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);
  const [showAllCerts, setShowAllCerts] = useState(false);

  const openCertLightbox = (cert) => {
    setActiveCert(cert);
    setCertOpen(true);
  };

  const closeCertLightbox = () => {
    setCertOpen(false);
    setActiveCert(null);
  };

  return (
    <>
      <section
        id="achievements"
        className="py-8 md:py-10 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden"
      >
        <div className="pointer-events-none absolute right-[-5rem] top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute left-[-5rem] bottom-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
              Achievements
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Certifications & Recognitions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(showAllCerts ? certificates : certificates.slice(0, 4)).map((cert, i) => (
              <motion.div
                key={cert.src}
                variants={fadeUp(i * 0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6, scale: 1.02 }}
                layout
                transition={{ layout: { type: "spring", stiffness: 300, damping: 30 } }}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-5 sm:p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm flex flex-col justify-between"
              >
                {/* Top accent glow line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-t-2xl pointer-events-none group-hover:via-cyan-400/60 transition-all duration-300" />

                <div>
                  {/* Certificate Preview - click to expand */}
                  <div
                    onClick={() => openCertLightbox(cert)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openCertLightbox(cert);
                      }
                    }}
                    aria-label={`View certificate: ${cert.title}`}
                    className="group/thumb relative cursor-pointer rounded-xl overflow-hidden border border-white/10 h-72 md:h-80 flex items-center justify-center bg-black/30"
                  >
                    <img
                      src={cert.src}
                      alt={cert.title}
                      className="max-h-full max-w-full object-contain rounded-xl transition-transform duration-300 group-hover/thumb:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-full bg-slate-950/80 text-cyan-300 text-xs font-medium border border-cyan-400/40 shadow-lg">
                        Click to expand
                      </span>
                    </div>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-sky-100 group-hover:text-cyan-300 transition-colors duration-300 mt-5 text-center leading-snug">
                    {cert.title}
                  </h3>

                  {/* What I Learned */}
                  <p className="text-sm text-slate-300 mt-2 text-center leading-relaxed group-hover:text-slate-200 transition-colors duration-200">
                    {cert.learn}
                  </p>
                </div>

                {/* Footer - issuer/year centered when no credential link, split row when one exists */}
                {hasCredentialUrl(cert.credentialUrl) ? (
                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                    <p className="text-xs text-cyan-400/90 font-medium text-center sm:text-left">
                      Issued by: {cert.issuer} {cert.year && `• ${cert.year}`}
                    </p>
                    <a
                      href={cert.credentialUrl.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white/[0.03] border border-cyan-400/25 px-4 py-2 text-xs font-medium text-slate-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white transition-all duration-200"
                    >
                      <span>View Credential</span>
                      <FiExternalLink className="text-sm" />
                    </a>
                  </div>
                ) : (
                  <p className="text-xs text-cyan-400/90 mt-4 text-center font-medium pt-3 border-t border-white/10">
                    Issued by: {cert.issuer} {cert.year && `• ${cert.year}`}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* View All Toggle - one-way, hidden once expanded */}
          {!showAllCerts && certificates.length > 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mt-8"
            >
              <motion.button
                onClick={() => setShowAllCerts(true)}
                className="group inline-flex items-center gap-2 rounded-xl bg-white/[0.03] border border-cyan-400/25 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>View All Certificates</span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-y-0.5">
                  <FiChevronDown />
                </span>
              </motion.button>
            </motion.div>
          )}

          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Achievements & Responsibilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp(i * 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative flex h-full flex-col overflow-hidden bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-5 sm:p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm"
                >
                  {/* Top accent glow line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-t-2xl pointer-events-none group-hover:via-cyan-400/60 transition-all duration-300" />

                  <div className="flex-1">
                    {/* Event name */}
                    <p className="text-[11px] tracking-[0.25em] text-sky-400/90 uppercase font-medium">
                      {item.event}
                    </p>

                    {/* Achievement title */}
                    <h4 className="text-lg sm:text-xl font-bold text-sky-100 group-hover:text-cyan-300 transition-colors duration-300 mt-2.5 leading-snug">
                      {item.title}
                    </h4>

                    {/* Short description */}
                    <p className="text-sm text-slate-300 mt-2.5 leading-relaxed group-hover:text-slate-200 transition-colors duration-200">
                      {item.desc}
                    </p>
                  </div>

                  {/* Year + level footer */}
                  <p className="mt-5 pt-3 border-t border-white/10 text-xs font-medium text-slate-400">
                    {item.year ? `${item.year} · ${item.status}` : item.status}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <CertificateLightbox
        image={activeCert?.src}
        title={activeCert?.title}
        isOpen={certOpen}
        onClose={closeCertLightbox}
      />
    </>);
};

function CertificateLightbox({ image, title, isOpen, onClose }) {
  const dialogRef = useRef(null);

  // ESC to close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Click outside to close
  useEffect(() => {
    const handleClick = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        onClose();
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog" aria-modal="true">

      <motion.div
        ref={dialogRef}
        variants={smoothScale(0)}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="relative max-w-[95vw] w-full flex flex-col items-center justify-center"
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-black/40 p-2 rounded-full text-white"
          aria-label="Close"
        >
          <FiX className="text-2xl" />
        </button>

        {/* Main Image */}
        <img
          src={image}
          alt={title}
          className="object-contain max-w-full max-h-[85vh] rounded-lg shadow-lg"
        />

        {/* Caption (optional) */}
        {title && (
          <p className="mt-4 text-sm text-slate-300 text-center">{title}</p>
        )}
      </motion.div>
    </div>
  );
}

export default Achievements;