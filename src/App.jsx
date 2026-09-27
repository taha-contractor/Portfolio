import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ProjectDetailModal from "./components/ProjectDetailModal";
import { FiArrowUp, FiArrowRight } from "react-icons/fi";
import { FaCoffee } from "react-icons/fa";

// Set this to your live Buy Me a Coffee profile
const BUY_ME_A_COFFEE_URL = "https://buymeacoffee.com/iamtahasc";

// ========= APP ROOT WITH SCROLL SPY & SCROLL-TO-TOP =========
export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "experience",
      "education",
      "skills",
      "projects",
      "achievements",
      "contact",
    ];

    // Scroll spy based on actual section scroll threshold
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const totalDocHeight = document.documentElement.scrollHeight;

      // Special case: if scrolled to the very bottom of page, activate contact
      if (windowHeight + scrollPosition >= totalDocHeight - 40) {
        setActiveSection("contact");
        setShowScrollTop(true);
        return;
      }

      // Offset threshold set to ~35% of viewport height (~280px) so navbar active link 
      // transitions smoothly when bringing the next section into view (~80% section scroll).
      const offsetThreshold = Math.min(280, windowHeight * 0.35);

      let currentSection = "home";
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offsetThreshold) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
      setShowScrollTop(scrollPosition > 300);
    };

    // Throttle the scroll handler for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScrollSpy();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    // Initial check
    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Custom smooth scroll with easing
      const startY = window.pageYOffset;
      const targetY = el.getBoundingClientRect().top + startY - 80; // Offset for navbar
      const distance = targetY - startY;
      const duration = 800; // ms
      let startTime = null;
      
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Ease-out cubic function for smooth deceleration
        const ease = 1 - Math.pow(1 - progress, 3);
        
        window.scrollTo(0, startY + distance * ease);
        
        if (progress < 1) {
          window.requestAnimationFrame(animation);
        }
      };
      
      window.requestAnimationFrame(animation);
    }
    setActiveSection(id);
  };

  const handleScrollTop = () => {
    // Custom smooth scroll to top with easing
    const startY = window.pageYOffset;
    const distance = -startY;
    const duration = 800; // ms
    let startTime = null;
    
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Ease-out cubic function for smooth deceleration
      const ease = 1 - Math.pow(1 - progress, 3);
      
      window.scrollTo(0, startY + distance * ease);
      
      if (progress < 1) {
        window.requestAnimationFrame(animation);
      }
    };
    
    window.requestAnimationFrame(animation);
  };

  return (
    <div className="min-h-screen bg-black text-slate-50 font-sans">
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <Hero />
      <Quote />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects onOpenProject={setActiveProject} />
      <Achievements />
      <Contact />
      <footer className="w-full backdrop-blur-sm bg-white/5">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-sky-900/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col items-center gap-3 text-center">
          <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-sky-400/90">
            Support My Work
          </h4>

          <p className="max-w-sm text-xs sm:text-sm text-slate-400 leading-relaxed">
            If you find my work useful, consider supporting my journey.
          </p>

          <a
            href="https://buymeacoffee.com/taha.contractor"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-1 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/[0.06] px-4 py-2 text-xs sm:text-sm font-medium text-amber-200/80 transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-100 hover:shadow-[0_0_20px_rgba(251,191,36,0.12)]"
          >
            <FaCoffee className="text-base" />
            <span>Buy Me a Coffee</span>
            <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          <div className="w-full border-t border-white/5 pt-4">
            <p className="text-xs text-slate-500 hover:text-slate-400 transition duration-300">
              © {new Date().getFullYear()} Taha Contractor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {showScrollTop && (
        <motion.button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-[70] rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 p-3 shadow-[0_18px_40px_rgba(56,189,248,0.7)] hover:scale-110 active:scale-95 transition-transform"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <FiArrowUp />
        </motion.button>
      )}
    </div>
  );
}