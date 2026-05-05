"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface OverlayProps {
  heroRef: React.RefObject<HTMLDivElement>;
}

export default function Overlay({ heroRef }: OverlayProps) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Phase 1 - Ghost watermark
  const opacity1 = useTransform(scrollYProgress, [0, 0.10, 0.18, 0.28], [1, 1, 1, 0]);

  // Phase 2 - Name intro block
  const opacity2 = useTransform(scrollYProgress, [0.28, 0.38, 0.44, 0.52], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.28, 0.52], [60, -60]);

  // Phase 3 - Role statement
  const opacity3 = useTransform(scrollYProgress, [0.52, 0.62, 0.70, 0.78], [0, 1, 1, 0]);

  // Phase 4 - Main headline
  const opacity4 = useTransform(scrollYProgress, [0.78, 0.88, 0.96, 1.00], [0, 1, 1, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
      
      {/* PHASE 1 */}
      <motion.div
        style={{ opacity: opacity1 }}
        className="absolute will-change-transform flex items-center justify-center opacity-10"
      >
        <h1 
          className="font-black text-white whitespace-nowrap"
          style={{ fontSize: "clamp(5rem, 15vw, 14rem)" }}
        >
          Divyanshu Pathak.
        </h1>
      </motion.div>

      {/* PHASE 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute will-change-transform flex flex-col items-center text-center"
      >
        <p className="text-gray-300 tracking-widest text-sm md:text-base uppercase mb-2">
          I Make Tech, AI & Design
        </p>
        <h2 
          className="font-extrabold text-white tracking-tighter leading-none mb-4"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", letterSpacing: "-0.04em" }}
        >
          Divyanshu Pathak
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          25+ Projects
        </p>
      </motion.div>

      {/* PHASE 3 */}
      <motion.div
        style={{ opacity: opacity3 }}
        className="absolute will-change-transform flex items-center justify-center"
      >
        <h3 
          className="font-bold text-white text-center"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)", letterSpacing: "-0.03em" }}
        >
          AI Engineer
        </h3>
      </motion.div>

      {/* PHASE 4 */}
      <motion.div
        style={{ opacity: opacity4 }}
        className="absolute will-change-transform flex flex-col items-center text-center px-4 md:px-12 max-w-7xl"
      >
        <h4 
          className="font-bold text-white mb-6 leading-tight"
          style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)", letterSpacing: "-0.03em" }}
        >
          I build AI systems that turn complex ideas into scalable, real-world solutions.
        </h4>
        <p className="text-gray-400 text-base md:text-2xl max-w-3xl font-medium">
          Focused on building, experimenting, and deploying AI that actually works.
        </p>
      </motion.div>
      
    </div>
  );
}
