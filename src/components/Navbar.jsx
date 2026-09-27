import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiUser, FiBook, FiCode, FiAward, FiMail, FiStar, FiBriefcase, FiGithub, FiLinkedin } from "react-icons/fi";
import { smoothSlideIn } from "./animationHelpers";

const Navbar = ({ activeSection, onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: <FiHome /> },
    { id: "about", label: "About", icon: <FiUser /> },
    { id: "experience", label: "Experience", icon: <FiBriefcase /> },
    { id: "education", label: "Education", icon: <FiBook /> },
    { id: "skills", label: "Skills", icon: <FiCode /> },
    { id: "projects", label: "Projects", icon: <FiAward /> },
    { id: "achievements", label: "Achievements", icon: <FiStar /> },
    { id: "contact", label: "Contact", icon: <FiMail /> },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${isScrolled ? "py-2 bg-gray-950 md:bg-gray-900/90 md:backdrop-blur-3xl border-b border-cyan-500/20" : "py-3 bg-gray-950 md:bg-transparent"}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavClick("home");
            }}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              <span className="text-white font-bold text-lg">TC</span>
            </div>
            <span className="text-xl font-bold text-white">
              Taha <span className="text-cyan-400">Contractor</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.id);
                  setIsMenuOpen(false);
                }}
                className={`group relative flex items-center gap-1.5 px-2.5 lg:px-3.5 py-2 transition-all ${
                  activeSection === item.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                <span className="text-base hidden xl:inline-block">{item.icon}</span>
                <span className="relative z-10 text-[13px] lg:text-sm font-medium">{item.label}</span>

                {/* Underline: base (invisible) */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute left-0 -bottom-1 h-[3px] rounded-full transition-all duration-300
                    ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                  style={{
                    // gradient + subtle blur glow
                    background:
                      activeSection === item.id
                        ? "linear-gradient(90deg, rgba(14,165,233,1), rgba(56,189,248,1), rgba(99,102,241,1))"
                        : "linear-gradient(90deg, rgba(14,165,233,0.0), rgba(56,189,248,0.0), rgba(99,102,241,0.0))",
                    boxShadow:
                      activeSection === item.id
                        ? "0 6px 18px rgba(56,189,248,0.18), 0 2px 6px rgba(99,102,241,0.06)"
                        : "none",
                  }}
                />

                {/* Glow overlay (soft, blurred) */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 -bottom-3 h-1 rounded-full pointer-events-none transition-opacity duration-300 ${
                    activeSection === item.id ? "opacity-80" : "opacity-0 group-hover:opacity-60"
                  }`}
                  style={{
                    width: activeSection === item.id ? "100%" : "100%",
                    background: "radial-gradient(ellipse at center, rgba(56,189,248,0.14), rgba(99,102,241,0.02))",
                    filter: "blur(10px)",
                  }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-gray-950/[0.92] backdrop-blur-xl md:hidden"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 max-w-[80vw] bg-gray-950 border-l border-cyan-500/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col p-6 md:hidden"
            >
              {/* Very subtle surface tint - sits behind the content so the panel stays opaque */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/[0.07] via-transparent to-blue-900/[0.09]"
              />
              <div className="flex min-h-0 flex-1 flex-col">
                {/* Header Row */}
                <div className="flex flex-shrink-0 items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                      <span className="text-white font-bold text-sm">TC</span>
                    </div>
                    <span className="font-bold text-white text-base">
                      Taha <span className="text-cyan-400">Contractor</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50"
                    aria-label="Close menu"
                  >
                    <FiX className="text-[22px]" />
                  </button>
                </div>

                {/* Vertical Links Stack */}
                <nav className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain pt-7">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavClick(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`group relative mr-4 flex h-11 items-center gap-3 rounded-xl pl-3 pr-4 transition-all ${
                        activeSection === item.id
                          ? "text-cyan-400 bg-gradient-to-r from-cyan-500/10 via-cyan-500/5 to-transparent border-l-4 border-cyan-400"
                          : "text-gray-300 hover:text-white hover:bg-white/5 border-l-4 border-transparent"
                      }`}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      aria-current={activeSection === item.id ? "page" : undefined}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-semibold">{item.label}</span>
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer Socials */}
              <div className="flex-shrink-0 border-t border-white/10 pt-4 flex flex-col gap-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                  Connect With Me
                </p>
                <div className="flex items-center gap-4 text-gray-400 text-lg">
                  <a
                    href="https://linkedin.com/in/iamtahasc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <FiLinkedin />
                  </a>
                  <a
                    href="https://github.com/iamtahasc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="mailto:tasaif265@gmail.com"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <FiMail />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;