import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";
import { fadeUp, subtleFloat } from "./animationHelpers";
import profile from "../assets/profile.jpeg";

// Typing animation component
const TypingText = ({ texts = ["AI/ML Developer", "Full-Stack Developer", "Generative AI Enthusiast", "Aspiring Data Scientist", "Software Engineer", "Problem Solver", "Innovator"] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = texts[currentTextIndex];
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(current.substring(0, currentText.length - 1));
        setTypingSpeed(100);
      } else {
        // Typing text
        setCurrentText(current.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      // If text is fully typed
      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      }

      // If text is deleted
      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setTypingSpeed(500);
        return;
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <span className="text-sky-200 text-base sm:text-lg font-medium">
      {currentText}
      <motion.span 
        className="inline-block w-2 h-6 bg-sky-400 ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  // Handle mouse move for tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 8; // Max 8 degrees
    const rotateX = ((centerY - y) / centerY) * 8; // Max 8 degrees
    
    setMousePosition({ x: rotateX, y: rotateY });
    setIsHovering(true);
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/15 to-indigo-900/25"
    >
      {/* Enhanced Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-sky-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500/20 via-pink-500/20 to-blue-500/20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-purple-500/20 blur-3xl animate-pulse delay-500" />
        {/* Additional floating orbs */}
        <div className="absolute top-1/3 left-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl animate-pulse delay-700" />
        <div className="absolute top-2/3 right-1/3 h-56 w-56 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl animate-pulse delay-1200" />
        <div className="absolute top-1/4 right-1/4 h-40 w-40 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl animate-pulse delay-900" />
      </div>

      {/* Enhanced Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
            }}
            animate={{
              y: [0, Math.random() > 0.5 ? -(Math.random() * 30 + 10) : (Math.random() * 30 + 10), 0],
              x: [0, Math.random() > 0.5 ? -(Math.random() * 30 + 10) : (Math.random() * 30 + 10), 0],
              opacity: [0.1, Math.random() * 0.3 + 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Subtle floating star particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              backgroundColor: i % 3 === 0 ? 'white' : i % 3 === 1 ? '#38bdf8' : '#60a5fa',
              opacity: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              y: [0, Math.random() > 0.5 ? -15 : 15, 0],
              x: [0, Math.random() > 0.5 ? 15 : -15, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content with enhanced typography */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div 
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-r from-gray-900/80 to-blue-900/20 px-4 py-2 text-[12px] text-sky-200 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.9)]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              className="h-2 w-2 rounded-full bg-emerald-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="uppercase tracking-[0.3em] font-medium">
              Open to Internships & Entry-Level Opportunities
            </span>
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-white">
              Hi, I&apos;m{' '}
              <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.4)] animate-pulse">
                Taha Contractor
              </span>
            </h1>
            
            {/* Typing animation */}
            <div className="h-8">
              <TypingText />
            </div>
            
            <p className="text-base sm:text-lg text-sky-100/90 max-w-2xl leading-relaxed font-light">
              I build intelligent and scalable applications using AI/ML, Generative AI and modern full-stack technologies — turning ideas into practical, real-world solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 items-center">
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_25px_50px_rgba(56,189,248,0.5)] hover:shadow-[0_30px_60px_rgba(56,189,248,0.7)] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let&apos;s Connect</span>
              <FiArrowUpRight className="text-xl transition-transform group-hover:rotate-45" />
            </motion.a>

            <motion.a
              href="/Taha_Contractor_Resume.pdf"
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/30 bg-gradient-to-r from-gray-800/50 to-blue-900/20 px-7 py-4 text-base font-bold text-slate-100 hover:border-sky-400/80 hover:text-sky-100 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="text-lg" />
              <span>Download Resume</span>
            </motion.a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-2.5 text-left sm:text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs text-slate-300 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-200">
              <span className="font-bold text-cyan-300">4+</span>
              <span>Projects</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs text-slate-300 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-200">
              <span className="font-bold text-cyan-300">6+</span>
              <span>Certifications</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs text-slate-300 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-200">
              <span className="font-bold text-cyan-300">1+</span>
              <span>Hackathons</span>
            </span>
          </div>
        </motion.div>

        {/* Right: enhanced profile card with tilt effect */}
        <motion.div
          variants={subtleFloat}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: isHovering 
                ? `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg)` 
                : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
              transition: 'transform 0.1s ease-out'
            }}
            animate={{
              y: [0, -15, 0],
              boxShadow: [
                "0 30px 70px rgba(15,23,42,0.9)",
                "0 40px 100px rgba(56,189,248,0.6)",
                "0 30px 70px rgba(15,23,42,0.9)",
              ],
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative rounded-[3rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-[3px]"
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 120 }
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-sky-500/30 via-cyan-500/30 to-blue-500/30 blur-xl opacity-70 animate-pulse" />
            
            <div className="relative h-full w-full rounded-[3rem] bg-gradient-to-br from-gray-800/95 via-blue-900/50 to-indigo-900/60 border border-white/30 overflow-hidden backdrop-blur-xl">
              {/* Inner glow */}
              <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-500/50 via-cyan-400/40 to-purple-500/30 blur-3xl" />
              
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-white/20 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 backdrop-blur-sm animate-pulse" />
              <div className="absolute bottom-12 left-8 w-16 h-16 rounded-full border border-white/20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-4 w-20 h-20 rounded-full border border-white/20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm animate-pulse delay-700" />

              <div className="relative flex flex-col items-center px-6 sm:px-8 pt-8 sm:pt-10 pb-8 min-h-[420px] sm:min-h-[500px] lg:min-h-[620px]">
                <motion.img
                  src={profile}
                  alt="Taha"
                  className="h-[320px] sm:h-[400px] lg:h-[520px] object-contain rounded-3xl drop-shadow-[0_20px_50px_rgba(15,23,42,0.8)] lg:drop-shadow-[0_35px_70px_rgba(15,23,42,0.9)] brightness-110 contrast-105"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="mt-6 text-center space-y-2">
                  <motion.p 
                    className="text-xl font-bold text-slate-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Taha Contractor
                  </motion.p>
                  <motion.p 
                    className="text-xs uppercase tracking-[0.3em] text-sky-400/90 mt-2 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Learning • Building • Innovating
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;