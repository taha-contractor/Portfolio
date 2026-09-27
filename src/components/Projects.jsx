import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiEye, FiChevronDown } from "react-icons/fi";
import { FaGithub, FaUtensils, FaPlane, FaCar, FaImage, FaShieldAlt, FaFilePdf } from "react-icons/fa";
import { fadeUp } from "./animationHelpers";

// 16:9 Project Preview Area
const ProjectCardPreview = ({ screenshots = [], title, status, icon }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!screenshots || screenshots.length <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % screenshots.length);
    }, 3400);
    return () => clearInterval(interval);
  }, [screenshots, isHovered]);

  const isInDevelopment = status === "IN DEVELOPMENT";

  return (
    <div
      className="aspect-video w-full rounded-xl overflow-hidden relative bg-slate-950/90 border border-white/10 group/preview"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status Badge */}
      {isInDevelopment && (
        <div className="absolute top-3 right-3 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-amber-400/15 border border-amber-400/40 text-amber-300 backdrop-blur-md shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>In Development</span>
        </div>
      )}

      {/* Case 1: In Development / No screenshots */}
      {screenshots.length === 0 ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900/90 to-slate-950 relative overflow-hidden">
          {/* Subtle blueprint grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20" />

          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="p-3.5 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400/70 text-3xl">
              {icon}
            </div>
            <p className="text-xs font-semibold text-slate-300 tracking-wide">Project Preview</p>
            <p className="text-[11px] text-slate-500">Screenshots coming soon</p>
          </div>
        </div>
      ) : (
        /* Case 2: Screenshot Slideshow */
        <>
          {screenshots.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${i === currentIdx
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
              {/* Ambient blurred backdrop */}
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-125 pointer-events-none"
              />

              {/* Full un-cropped screenshot */}
              <img
                src={src}
                alt={`${title} preview ${i + 1}`}
                loading="lazy"
                className="relative z-10 max-w-full max-h-full object-contain p-1.5 sm:p-2 rounded-lg drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
              />
            </div>
          ))}

          {/* Ambient gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none z-10" />

          {/* Indicator dots for multiple screenshots */}
          {screenshots.length > 1 && (
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/15">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIdx(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIdx
                      ? "w-4 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

const Projects = ({ onOpenProject }) => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = [
    {
      id: "autonomous-pdf-form",
      title: "Autonomous PDF Form Filling System",
      status: "COMPLETED",
      shortDesc:
        "An AI-powered full-stack system that converts static, non-interactive PDF forms into smart, fillable PDFs with interactive fields, checkboxes, and radio buttons.",
      longDesc:
        "The Autonomous PDF Form Filling System automatically analyzes static PDF forms and transforms them into interactive, fillable documents without requiring manual form-field design. It parses the original document layout, detects potential input fields such as text areas, comb-boxes, checkboxes, and line fields, associates those fields with their corresponding labels, and generates a new fillable PDF while preserving the original document layout.",
      role:
        "Led the development of the system, implementing the PDF parsing, field detection, label-to-field association, fillable PDF generation, FastAPI backend, and React-based frontend for uploading documents and tracking conversion progress.",
      features: [
        "Advanced PDF layout parsing using PyMuPDF to extract text blocks, lines, circles, and bounding boxes",
        "Intelligent detection of text fields, comb-boxes, checkboxes, and line-based input fields",
        "Smart label-to-field association using distance, overlap, and directional positioning rules",
        "Automatic generation of interactive PDF form controls using ReportLab",
        "Preservation of the original PDF layout while adding interactive form fields",
        "React-based interface with file upload, real-time processing status, and progress tracking",
        "FastAPI backend with asynchronous upload, processing, status, and download APIs",
        "Automated test suite for field detection, label binding, overlaps, and layout accuracy"
      ],
      challenges:
        "The main challenge was reliably identifying form fields from static PDFs where no interactive field information exists. The system addresses this by analyzing document geometry, text positioning, overlaps, and spatial relationships between labels and potential input areas before generating interactive fields on the original layout.",
      tech: [
        "Python",
        "PyMuPDF",
        "ReportLab",
        "FastAPI",
        "ReactJS",
        "Vite",
        "Tailwind CSS",
        "Framer Motion"
      ],
      code: "https://github.com/taha-contractor/Autonomus-Form",
      liveDemo: "",
      screenshots: [],
      icon: <FaFilePdf />
    },
    {
      id: "digital-menu",
      title: "Digital Menu Ordering System",
      status: "COMPLETED",
      shortDesc:
        "A complete QR-based restaurant ordering platform enabling contactless customer ordering, real-time kitchen order tracking dashboards, and administrative sales reporting with Firebase Firestore.",
      longDesc:
        "The Digital Menu Ordering System is a full-fledged restaurant management platform designed to digitize and streamline the dining experience. Customers can instantly access the restaurant’s menu by scanning a table-specific QR code, explore dishes, customize quantities, and place orders directly from their smartphones in real-time.",
      role:
        "Architected and developed the complete end-to-end full-stack application, including the responsive React frontend, Firebase Firestore real-time synchronization, role-based authentication, and admin reporting dashboards.",
      features: [
        "QR code menu access with instant table-specific cart & order placement",
        "Real-time kitchen/staff dashboard with live audio/visual order status tracking (Pending, Preparing, Ready, Served)",
        "Admin management panel for menu catalog, pricing, tax rates, and staff permissions",
        "Sales analytics and daily financial report generation with instant CSV export",
        "Secure Firebase Authentication with role-based access control (Admin & Staff)"
      ],
      challenges:
        "Ensuring instant synchronization between simultaneous customer orders and kitchen staff displays with zero latency. Solved by designing optimized Firestore snapshot listeners and local state caching.",
      tech: [
        "ReactJS",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase Firestore",
        "Firebase Auth",
        "Firebase Hosting"
      ],
      code: "https://github.com/taha-contractor/Digital-Menu-Ordering-System",
      liveDemo: "",
      screenshots: [
        "/screenshots/DMOS/Admin.png",
        "/screenshots/DMOS/Staff.png",
        "/screenshots/DMOS/Customer.jpg",
        "/screenshots/DMOS/Cart.jpg",
        "/screenshots/DMOS/Order.jpg",
        "/screenshots/DMOS/Login.png",
        "/screenshots/DMOS/ALogin.png",
        "/screenshots/DMOS/SLogin.png",
        "/screenshots/DMOS/Menu.png",
        "/screenshots/DMOS/Settings.png",
        "/screenshots/DMOS/Report.png",
        "/screenshots/DMOS/Role.png",
        "/screenshots/DMOS/Bill.png"
      ],
      icon: <FaUtensils />
    },
    {
      id: "airline-ticketing",
      title: "Airline Ticketing System",
      status: "COMPLETED",
      shortDesc:
        "A Java-based desktop application that automates flight schedules, seat bookings, customer records, cancellations, and printable boarding passes using MySQL database connectivity.",
      longDesc:
        "The Airline Ticketing System is a complete administrative desktop application developed using Java Swing and MySQL. It streamlines airline operations by providing a secure graphical interface for passenger check-in, flight route management, automated ticketing, cancellation processing, and real-time database updates.",
      role:
        "Designed and built the Java application from scratch, including UI layouts, OOP data models, database schema design, and JDBC query integration.",
      features: [
        "Flight scheduling, seat availability lookup, and dynamic route search",
        "Passenger registration with automated ticket ID and boarding pass generator",
        "Ticket cancellation module with automatic seat inventory recovery and refund tracking",
        "Relational MySQL database schema with ACID-compliant transaction safety",
        "Interactive Java Swing UI with validation filters on all user input fields"
      ],
      challenges:
        "Managing relational database transactions across bookings and cancellations safely without concurrency conflicts or orphaned records. Implemented parameterized JDBC queries and structured error handling.",
      tech: ["Java", "Java Swing", "MySQL", "JDBC", "OOP Design"],
      code: "https://github.com/taha-contractor/Airline-Ticketing-System",
      liveDemo: "",
      screenshots: [
        "/screenshots/ATS/Homepage.png",
        "/screenshots/ATS/Login.png",
        "/screenshots/ATS/AddPassenger.png",
        "/screenshots/ATS/FlightDetails.png",
        "/screenshots/ATS/Book.png",
        "/screenshots/ATS/Cancellation.png",
        "/screenshots/ATS/BoardingPass.png"
      ],
      icon: <FaPlane />
    },
    {
      id: "fraudlens",
      title: "FraudLens – AI Fraud Detection System",
      status: "IN DEVELOPMENT",
      shortDesc:
        "An intelligent financial fraud detection engine that evaluates transactional risk in real time using ensemble machine learning models, anomaly detection, and explainable AI techniques.",
      longDesc:
        "FraudLens is an ongoing AI-powered fraud analytics and detection engine engineered to identify suspicious transaction patterns, unauthorized activities, and synthetic identity fraud in financial datasets. The system integrates automated data preprocessing, class-imbalance handling (SMOTE), feature extraction, and ensemble ML models (XGBoost, Isolation Forest, Random Forest) coupled with an API pipeline for real-time risk scoring.",
      role:
        "Designing and implementing the complete machine learning pipeline, dataset preprocessing, class imbalance remediation, model evaluation, and backend inference API integration.",
      features: [
        "Real-time transaction risk scoring using supervised ensemble classification algorithms",
        "Unsupervised anomaly detection pipeline with Isolation Forest for novel fraud patterns",
        "Handling extreme class imbalance using SMOTE and cost-sensitive loss functions",
        "Explainable AI (SHAP / feature attribution) to provide transparent reasoning for flagged risk",
        "High-performance REST API endpoints for low-latency transaction inference"
      ],
      challenges:
        "Mitigating high false-positive rates on highly skewed financial transaction datasets (where fraud accounts for <0.1% of total volume) while maintaining low inference latency. Solved by tuning precision-recall curves and threshold boundaries.",
      tech: [
        "Python",
        "Scikit-learn",
        "XGBoost",
        "FastAPI",
        "Pandas",
        "NumPy",
        "SHAP",
        "Machine Learning"
      ],
      code: "https://github.com/taha-contractor",
      liveDemo: "",
      screenshots: [],
      icon: <FaShieldAlt />
    },
    {
      id: "car-racing",
      title: "Collision Detection Car Racing Game",
      status: "COMPLETED",
      shortDesc:
        "A fast-paced 2D arcade racing game built with Python and Pygame featuring dynamic obstacle spawning, precision bounding-box collision detection, and score scaling.",
      longDesc:
        "A 2D arcade car-avoidance game built using Python and Pygame. Players steer their vehicle through traffic while evading dynamically spawning obstacle cars. The game features continuous collision detection, progressive speed scaling, background scrolling, custom sound effects, and score tracking.",
      role:
        "Developed the entire game engine logic, collision mechanics, sprite rendering pipelines, game-loop states, and UI score overlays in Python.",
      features: [
        "Continuous 60 FPS game loop with responsive keyboard controls (arrow keys & WASD)",
        "Precision rectangle-based bounding box collision detection engine",
        "Dynamic difficulty scaling with progressively increasing traffic speeds and spawn rates",
        "Real-time score tracking, high score persistence, and game-over restart screens"
      ],
      challenges:
        "Maintaining consistent 60 FPS frame timing and preventing collision glitches when obstacle vehicles spawn close together. Solved by implementing frame-independent movement deltas and lane-constrained pseudo-random spawning algorithms.",
      tech: ["Python", "Pygame", "Game Loop Architecture", "2D Collision Physics"],
      code: "https://github.com/taha-contractor/Collision-Detection-Car-Racing-Game",
      liveDemo: "",
      screenshots: [
        "/screenshots/CRG/Game.png",
        "/screenshots/CRG/Score.png"
      ],
      icon: <FaCar />
    },
    {
      id: "image-finder",
      title: "Image Finder App",
      status: "COMPLETED",
      shortDesc:
        "A responsive modern web app that enables high-resolution image discovery via the Unsplash REST API with live asynchronous search, pagination, and responsive grid layouts.",
      longDesc:
        "Image Finder App is a modern web application designed for fast, seamless image discovery and curation. Built with vanilla JavaScript, modern CSS, and HTML5, it connects to the Unsplash API to fetch and render photography based on user queries, featuring infinite loading, query debounce, and device-responsive masonry layouts.",
      role:
        "Built the complete frontend UI, integrated asynchronous REST API endpoints, handled query state management, and deployed the live application.",
      features: [
        "Real-time image keyword search powered by the Unsplash REST API",
        "Dynamic asynchronous pagination with seamless 'View More' image loading",
        "Adaptive responsive grid layout with fluid image aspect ratios and preview overlays",
        "Graceful API rate limit handling, empty state feedback, and network error fallbacks"
      ],
      challenges:
        "Handling asynchronous API requests and preventing redundant network calls during rapid user queries. Solved by optimizing fetch promises and caching search state.",
      tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "Unsplash REST API", "GitHub Pages"],
      code: "https://github.com/taha-contractor/Image-Finder-App",
      liveDemo: "https://taha-contractor.github.io/Image-Finder-App/",
      screenshots: [
        "/screenshots/IFA/Desk.png",
        "/screenshots/IFA/Mob.png"
      ],
      icon: <FaImage />
    }
  ];

  return (
    <section
      id="projects"
      className="py-8 md:py-10 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute right-[-4rem] top-0 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="pointer-events-none absolute left-[-5rem] bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3 font-medium">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What I&apos;ve Built
          </h2>
        </motion.div>

        {/* Responsive 2-column desktop / 1-column mobile grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6">
          {(showAllProjects ? projects : projects.slice(0, 4)).map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              layout
              transition={{ layout: { type: "spring", stiffness: 300, damping: 30 } }}
              className="group relative bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-5 sm:p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:border-sky-400/60 hover:shadow-[0_20px_50px_rgba(56,189,248,0.2)] backdrop-blur-sm overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-t-2xl pointer-events-none group-hover:via-cyan-400/60 transition-all duration-300" />

              <div className="flex flex-col flex-grow">
                {/* 16:9 Project Preview Area */}
                <ProjectCardPreview
                  screenshots={project.screenshots}
                  title={project.title}
                  status={project.status}
                  icon={project.icon}
                />

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-sky-100 group-hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2.5 mt-5 leading-snug">
                  <span className="text-cyan-400 text-xl flex-shrink-0">
                    {project.icon}
                  </span>
                  <span>{project.title}</span>
                </h3>

                {/* Concise 2-3 Line Description */}
                <p className="text-sm md:text-base text-slate-300 leading-relaxed mt-3 line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-4 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 group-hover:border-cyan-400/30 transition-colors duration-200 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons (Consistent Pin to Bottom) */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <motion.button
                  onClick={() => onOpenProject(project)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-[0_10px_25px_rgba(56,189,248,0.25)] hover:shadow-[0_15px_30px_rgba(56,189,248,0.45)] transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FiEye className="text-base" />
                  <span>View Details</span>
                </motion.button>

                <motion.a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 hover:border-cyan-400/50 hover:bg-cyan-400/10 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Toggle - one-way, hidden once expanded */}
        {!showAllProjects && projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              onClick={() => setShowAllProjects(true)}
              className="group inline-flex items-center gap-2 rounded-xl bg-white/[0.03] border border-cyan-400/25 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View All Projects</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-y-0.5">
                <FiChevronDown />
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

