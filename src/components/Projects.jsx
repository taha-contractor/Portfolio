import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { FaUtensils, FaPlane, FaCar, FaImage } from "react-icons/fa";
import { fadeUp } from "./animationHelpers";

const Projects = ({ onOpenProject }) => {
  const projects = [
    {
      id: "digital-menu",
      title: "Digital Menu Ordering System",
      shortDesc:
        "A complete QR-based Digital Menu Ordering System enabling customers to browse menu items, place orders, and generate bills, while providing real-time dashboards for staff and admins to manage orders, menu items, settings, sales reports, and staff accounts using Firebase Firestore.",
      longDesc:
        `The Digital Menu Ordering System is a full-fledged restaurant management platform designed to digitize and streamline the dining experience. Customers can instantly access the restaurant’s menu by scanning a table-specific QR code, explore dishes, customize quantities, and place orders directly from their smartphones.

The system processes orders in real-time using Firebase, where staff receive instant notifications for new orders. A dedicated staff dashboard allows the team to update order statuses such as Pending, Preparing, Ready, Served, and Completed, ensuring smooth workflow and reduced wait times.

Admins have a powerful dashboard to manage the entire ecosystem — including menu creation, staff management, order monitoring, tax configuration, and sales reporting with CSV export. Built using React, Vite, Tailwind CSS, and Firestore, the system offers high performance, seamless UI animations, responsive layouts, and secure authentication.

This project demonstrates expertise in full-stack development, real-time systems, UI/UX design, database modeling, cloud services, role-based authentication, and complete end-to-end modern web app development.`,
      role:
        "Built the complete full-stack system, including UI, Firebase backend, authentication, and real-time order management dashboards.",
      tech: ["ReactJS (Vite)", "Tailwind CSS", "Framer Motion", "Firebase Firestore", "Firebase Authentication", "Firebase Hosting"],
      code: "https://github.com/iamtahasc/Digital-Menu-Ordering-System",
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
        "/screenshots/DMOS/Bill.png",
      ],
      icon: <FaUtensils />,
    },
    {
      id: "airline-ticketing",
      title: "Airline Ticketing System",
      shortDesc:
        "A Java-based Airline Ticketing System that automates flight booking, passenger management, cancellations, and boarding pass generation using a user-friendly Swing interface and MySQL database connectivity.",
      longDesc:
        "The Airline Ticketing System is a complete desktop application built using Java Swing and MySQL to streamline airline administrative operations. The system allows airline staff to manage passengers, flights, ticket bookings, cancellations, and boarding passes through an intuitive graphical interface. It improves workflow efficiency, enhances data accuracy, and ensures secure storage using a well-structured MySQL database. The project demonstrates strong implementation of Java OOP principles, GUI development, event handling, and real-time database connectivity using JDBC.",
      role:
        "Designed and built the full application, implemented core features, and managed all database and UI functionality.",
      tech: ["Java", "Swing", "MySQL"],
      code: "https://github.com/iamtahasc/Airline-Ticketing-System",
      screenshots: [
        "/screenshots/ATS/Homepage.png",
        "/screenshots/ATS/Login.png",
        "/screenshots/ATS/AddPassenger.png",
        "/screenshots/ATS/FlightDetails.png",
        "/screenshots/ATS/Book.png",
        "/screenshots/ATS/Cancellation.png",
        "/screenshots/ATS/BoardingPass.png",
      ],
      icon: <FaPlane />,
    },
    {
      id: "car-racing",
      title: "Collision Detection Car Racing Game",
      shortDesc:
        "A fast-paced 2D car-avoidance game built using Python and Pygame, where players navigate a vehicle through traffic while avoiding collisions with dynamically spawning opponent cars.",
      longDesc:
        "A Python-based 2D car racing game created using Pygame. The player avoids incoming obstacles, and collision detection ends the game. Includes scoring, increasing difficulty and simple game UI.",
      role:
        "Built the entire game, including movement control, collision detection, scoring, and UI flow.",
      tech: ["Python", "Pygame"],
      code: "https://github.com/iamtahasc/Collision-Detection-Car-Racing-Game",
      screenshots: [
        "/screenshots/CRG/Game.png",
        "/screenshots/CRG/Score.png",
      ],
      icon: <FaCar />,
    },
    {
      id: "image-finder",
      title: "Image Finder App",
      shortDesc:
        "A responsive web application that allows users to search and browse high-quality images using the Unsplash API. The app features real-time search, smooth loading, and a clean user interface optimized for all devices.",
      longDesc:
        "Image Finder App is a fully responsive and modern web application designed to provide users with a seamless image-searching experience. Built with HTML, CSS, and JavaScript, the application connects to the Unsplash API to fetch and display high-resolution images based on user queries. The project focuses on clean UI/UX, responsive layout, and efficient API handling. Features include an intuitive search bar, dynamic image rendering, and a “View More” button that loads additional results without refreshing the page. The design ensures consistent performance across desktop and mobile devices, with smooth transitions, adaptive layouts, and proper fallback handling for empty searches or no results. This project demonstrates strong front-end development practices including asynchronous JavaScript (fetch API), responsive design techniques, DOM manipulation, API integration, and usability-focused UI development.",
      role:
        "Developed the complete front-end, integrated the Unsplash API, and implemented responsive UI with search and pagination features.",
      tech: ["HTML", "CSS", "JavaScript", "Unsplash API", "GitHub Pages (Hosting)"],
      code: "https://github.com/iamtahasc/Image-Finder-App",
      screenshots: [
        "/screenshots/IFA/Desk.png",
        "/screenshots/IFA/Mob.png",
      ],
      icon: <FaImage />,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden">
          <div className="pointer-events-none absolute right-[-4rem] top-0 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="pointer-events-none absolute left-[-5rem] bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-10">
            Featured Work & Technical Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-6 flex flex-col justify-between shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm relative"
            >
              <div>
                <p className="text-[11px] md:text-xs tracking-[0.3em] text-cyan-400/90 uppercase mb-3 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-cyan-400 font-medium">
                  Featured Project
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-sky-100 group-hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2.5">
                  <span className="text-cyan-400 text-xl">{project.icon}</span>
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed mt-3">
                  {project.shortDesc}
                </p>

                {/* Tech Badge Tags Preview */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 group-hover:border-cyan-400/30 transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <motion.button
                  onClick={() => onOpenProject(project)}
                  className="px-4 py-2 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium flex items-center gap-2 hover:bg-cyan-400/20 hover:border-cyan-400/60 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Know More</span>
                  <FiExternalLink className="text-sm" />
                </motion.button>

                <motion.a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                  whileHover={{ x: 3 }}
                >
                  <span>View Code</span>
                  <FiArrowUpRight className="text-base" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;