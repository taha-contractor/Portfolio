import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import { fadeUp, smoothScale } from "./animationHelpers";

// ========= EMAILJS CONFIG (public key - safe for client-side use) =========
const EMAILJS_SERVICE_ID = "service_qruvyi9";
const EMAILJS_TEMPLATE_ID = "template_hkrfsvc";
const EMAILJS_PUBLIC_KEY = "mQI47lPmEWE5BmFIN";

const inputClasses =
  "w-full rounded-xl bg-white/5 border border-white/15 px-4 py-4 text-sm text-slate-100 placeholder:text-slate-500 transition-all duration-200 hover:border-white/30 focus:border-cyan-400/60 focus:bg-cyan-400/5 focus:outline-none";

const labelClasses =
  "block text-[11px] md:text-xs tracking-[0.2em] uppercase text-sky-400/90 font-medium mb-1";

// A ring rather than a border colour, so it never fights inputClasses' border-white/15
const invalidClasses = " ring-1 ring-red-400/50";

// Padding and resting border colour live on each card rather than in the shared shell
const cardClasses =
  "relative flex h-full flex-col overflow-hidden bg-gradient-to-br from-gray-800/70 to-blue-900/30 border rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.9)] backdrop-blur-sm";

// Contact link cards in the right column
const contactItems = [
  {
    icon: <FaEnvelope className="text-red-400 text-2xl" />,
    title: "Email",
    desc: "tasaif265@gmail.com",
    href: "mailto:tasaif265@gmail.com",
  },
  {
    icon: <FaPhoneAlt className="text-yellow-400 text-2xl" />,
    title: "Phone",
    desc: "+91 88501 06286",
    href: "tel:+918850106286",
  },
  {
    icon: <FaWhatsapp className="text-green-400 text-2xl" />,
    title: "WhatsApp",
    desc: "Chat on WhatsApp",
    href: "https://wa.me/918850106286",
    target: "_blank",
  },
  {
    icon: <FaLinkedin className="text-blue-400 text-2xl" />,
    title: "LinkedIn",
    desc: "Connect",
    href: "https://linkedin.com/in/taha-contractor",
    target: "_blank",
  },
  {
    icon: <FaGithub className="text-white text-2xl" />,
    title: "GitHub",
    desc: "Follow",
    href: "https://github.com/taha-contractor",
    target: "_blank",
  },
];

// A link when the item has an href, a plain card when it does not
const ContactCard = ({ item, index }) => {
  const motionProps = {
    variants: fadeUp(index * 0.1),
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    whileHover: item.href ? { y: -6, scale: 1.02 } : undefined,
    className: `${cardClasses} group transform border-white/15 px-4 py-3 transition-all duration-300 hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)]`,
  };

  const cardBody = (
    <>
      {/* Top accent glow line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-t-2xl pointer-events-none transition-all duration-300 group-hover:via-cyan-400/60" />

      {/* Icon on the left, title and handle stacked on the right */}
      <div className="flex flex-1 items-center gap-3">
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/40">
          {item.icon}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-xs font-bold text-sky-100 transition-colors duration-300 group-hover:text-cyan-300">
            {item.title}
          </span>
          <span className="block truncate text-[11px] text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
            {item.desc}
          </span>
        </span>
      </div>
    </>
  );

  if (!item.href) {
    return <motion.div {...motionProps}>{cardBody}</motion.div>;
  }

  return (
    <motion.a
      {...motionProps}
      href={item.href}
      target={item.target}
      rel={item.target ? "noopener noreferrer" : undefined}
    >
      {cardBody}
    </motion.a>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  // idle | submitting | success | error
  const [status, setStatus] = useState("idle");
  // Field level messages - the form is noValidate, so nothing is checked natively
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const next = {};

    ["from_name", "from_email", "subject", "message"].forEach((name) => {
      if (!formRef.current[name].value.trim()) {
        next[name] = "This field is required";
      }
    });

    const email = formRef.current.from_email.value.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.from_email = "Enter a valid email address";
    }

    return next;
  };

  const clearFieldError = (e) => {
    const { name } = e.target;
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === "submitting" || !formRef.current) return;

    const nextErrors = validateForm();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    // sendForm collects from_name, from_email, subject & message from the named inputs
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        formRef.current.reset();
        setStatus("success");
      })
      .catch(() => {
        // Technical details (status/text) stay out of the UI
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-8 md:py-10 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-5rem] top-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] bottom-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Get In Touch
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-none leading-relaxed mb-6">
            Whether you have a project idea, collaboration opportunity, or just want to connect, feel free to reach out. I’d be happy to discuss how we can turn ideas into practical solutions.
          </p>
        </motion.div>

        {/* ===== Wide form card on the left (~67%), single column of cards on the right (~33%) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6">

          {/* ----- Form card ----- */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="min-w-0"
          >
            <motion.div
              className={`${cardClasses} group transform border-white/10 pt-4 px-4 pb-6 transition-all duration-300 hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)]`}
              whileHover={{ y: -6 }}
            >
              {/* Top accent glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-t-2xl pointer-events-none transition-all duration-300 group-hover:via-cyan-400/60" />

              <div className="flex-1">
                <AnimatePresence mode="wait" initial={false}>
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      variants={smoothScale(0)}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      role="status"
                      aria-live="polite"
                      className="flex h-full flex-col items-center justify-center text-center py-8 gap-4"
                    >
                      <div className="p-4 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-3xl">
                        <FiCheck />
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold text-white">
                        Message Sent Successfully
                      </h4>

                      <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                        Thank you for reaching out. I&apos;ve received your message and will get back to you soon.
                      </p>

                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="mt-2 inline-flex items-center gap-2 rounded-xl bg-white/[0.03] border border-cyan-400/25 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white transition-all duration-200"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      ref={formRef}
                      onSubmit={handleSubmit}
                      noValidate
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-full flex-col gap-3"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="from_name" className={labelClasses}>
                            Your Name
                          </label>
                          <input
                            id="from_name"
                            name="from_name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Jane Doe"
                            aria-invalid={!!errors.from_name}
                            onChange={clearFieldError}
                            className={`${inputClasses}${errors.from_name ? invalidClasses : ""}`}
                          />
                          {errors.from_name && (
                            <p className="mt-1 text-[11px] text-red-300">
                              {errors.from_name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="from_email" className={labelClasses}>
                            Email Address
                          </label>
                          <input
                            id="from_email"
                            name="from_email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="jane@example.com"
                            aria-invalid={!!errors.from_email}
                            onChange={clearFieldError}
                            className={`${inputClasses}${errors.from_email ? invalidClasses : ""}`}
                          />
                          {errors.from_email && (
                            <p className="mt-1 text-[11px] text-red-300">
                              {errors.from_email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className={labelClasses}>
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          placeholder="What is this regarding?"
                          aria-invalid={!!errors.subject}
                          onChange={clearFieldError}
                          className={`${inputClasses}${errors.subject ? invalidClasses : ""}`}
                        />
                        {errors.subject && (
                          <p className="mt-1 text-[11px] text-red-300">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className={labelClasses}>
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          placeholder="Tell me a little about your opportunity or project..."
                          aria-invalid={!!errors.message}
                          onChange={clearFieldError}
                          className={`${inputClasses}${errors.message ? invalidClasses : ""} h-[116px] resize-none`}
                        />
                        {errors.message && (
                          <p className="mt-1 text-[11px] text-red-300">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Error state - stays inside the card, entered data is preserved */}
                      <AnimatePresence>
                        {status === "error" && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                            role="alert"
                            className="flex items-start gap-3 rounded-xl bg-red-500/10 border border-red-400/30 p-4"
                          >
                            <FiAlertCircle className="text-red-400 text-lg mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-red-200">
                                Something went wrong
                              </p>
                              <p className="text-xs md:text-sm text-slate-300 mt-1 leading-relaxed">
                                Your message couldn&apos;t be sent. Please try again or contact me directly.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-auto flex justify-end">
                        <motion.button
                          type="submit"
                          disabled={status === "submitting"}
                          aria-busy={status === "submitting"}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_18px_40px_rgba(56,189,248,0.4)] hover:shadow-[0_25px_50px_rgba(56,189,248,0.6)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-[0_18px_40px_rgba(56,189,248,0.4)]"
                          whileHover={status === "submitting" ? undefined : { scale: 1.05, y: -2 }}
                          whileTap={status === "submitting" ? undefined : { scale: 0.95 }}
                        >
                          <FiSend className="text-base" />
                          <span>{status === "submitting" ? "Sending…" : "Send Message"}</span>
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          {/* ----- Contact link cards - one vertical column ----- */}
          <div className="grid min-w-0 grid-cols-1 gap-3 lg:grid-rows-5">
            {contactItems.map((item, idx) => (
              <ContactCard key={item.title} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
