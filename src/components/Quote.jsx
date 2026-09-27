import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { fadeUp } from "./animationHelpers";

const Quote = () => {
  return (
    <section className="py-6 md:py-8 bg-gradient-to-br from-gray-900/90 via-blue-900/15 to-indigo-900/25 relative overflow-hidden">
      {/* Premium ambient glow backdrop */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-72 w-[38rem] max-w-full rounded-full bg-gradient-to-r from-cyan-500/15 via-sky-500/15 to-blue-500/15 blur-3xl opacity-80" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center flex flex-col items-center"
        >
          {/* Direct cyan quotation-mark icon without capsule */}
          <div className="text-cyan-400/80 text-3xl sm:text-4xl md:text-5xl mb-6">
            <FaQuoteLeft />
          </div>

          {/* Elegant typography constrained to max-w-3xl */}
          <blockquote className="text-xl sm:text-2xl md:text-[1.7rem] font-light text-slate-100 leading-relaxed md:leading-relaxed tracking-wide max-w-3xl">
            &ldquo;The world is full of problems waiting for{" "}
            <span className="text-cyan-300 font-medium">better solutions</span>, ideas
            waiting to be <span className="text-cyan-300 font-medium">built</span>, and
            possibilities waiting to be{" "}
            <span className="text-cyan-300 font-medium">explored</span>. I want to spend my
            journey{" "}
            <span className="text-cyan-300 font-medium">
              learning, building, and thinking differently
            </span>{" "}
            enough to leave something meaningful behind.&rdquo;
          </blockquote>

          {/* Author line with subtle divider lines */}
          <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-sm">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-cyan-400/80" />
            <cite className="not-italic text-xs sm:text-sm md:text-base font-semibold tracking-widest text-cyan-300 uppercase">
              &mdash; Taha Contractor
            </cite>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-400/50 to-cyan-400/80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
