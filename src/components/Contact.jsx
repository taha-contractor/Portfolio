import React from "react";
import { motion } from "framer-motion";
import { 
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { fadeUp } from "./animationHelpers";

const contactItems = [
  {
    icon: <FaMapMarkerAlt className="text-sky-400 text-3xl" />,
    title: "Address",
    desc: "Mumbai, Maharashtra",
    href: null,
  },
  {
    icon: <FaPhoneAlt className="text-yellow-400 text-3xl" />,
    title: "Call Me",
    desc: "+91 88501 06286",
    href: "tel:+918850106286",
  },
  {
    icon: <FaEnvelope className="text-red-400 text-3xl" />,
    title: "Email Me",
    desc: "tasaif265@gmail.com",
    href: "mailto:tasaif265@gmail.com",
  },
  {
    icon: <FaWhatsapp className="text-green-400 text-3xl" />,
    title: "WhatsApp",
    desc: "Chat on WhatsApp",
    href: "https://wa.me/918850106286",
    target: "_blank",
  },
  {
    icon: <FaLinkedin className="text-blue-400 text-3xl" />,
    title: "LinkedIn",
    desc: "Connect @iamtahasc",
    href: "https://linkedin.com/in/iamtahasc",
    target: "_blank",
  },
  {
    icon: <FaGithub className="text-white text-3xl" />,
    title: "GitHub",
    desc: "Follow @iamtahasc",
    href: "https://github.com/iamtahasc",
    target: "_blank",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-5rem] top-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] bottom-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mb-8">
            Feel free to reach out for internships, full-stack roles, freelance collaborations, or technical project discussions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactItems.map((item, idx) => {
            const cardContent = (
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/40 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sky-100 mb-1 group-hover:text-cyan-300 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );

            const cardClasses = "relative bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm block group";

            if (item.href) {
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.target}
                  rel={item.target ? "noopener noreferrer" : undefined}
                  variants={fadeUp(idx * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={cardClasses}
                >
                  {cardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={idx}
                variants={fadeUp(idx * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={cardClasses}
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;