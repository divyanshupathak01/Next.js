"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({ from, to, label, suffix = "" }: { from: number; to: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && ref.current) {
      // Determine if we are dealing with a decimal number
      const isDecimal = to % 1 !== 0;
      
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = isDecimal ? value.toFixed(1) : Math.floor(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to]);

  return (
    <div className="flex flex-col">
      <div className="text-5xl md:text-7xl font-extrabold text-white mb-2">
        <span ref={ref}>{from}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-gray-400 font-medium text-lg uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function AboutMeSplit() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" ref={containerRef}>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: 40% */}
        <div className="w-full lg:w-2/5 grid grid-cols-2 gap-12 lg:gap-16 items-center">
          <Counter from={0} to={25} suffix="+" label="Projects" />
          <Counter from={0} to={400} suffix="+" label="Leetcode" />
          <Counter from={0} to={1.5} suffix="+" label="Years Building" />
          <Counter from={0} to={10} suffix="+" label="Technologies" />
        </div>

        {/* RIGHT COLUMN: 60% */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            style={{ letterSpacing: "-0.03em" }}
          >
            From curiosity to building real-world AI systems.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl space-y-6 font-medium leading-relaxed"
          >
            <p>
              I started with curiosity, trying to understand how things work behind the scenes. That curiosity gradually turned into building.
            </p>
            <p>
              Today, I’m a final-year student focused on Machine Learning and AI, where I design and build systems that solve real-world problems. My work spans across developing models, experimenting with ideas, and turning them into usable applications.
            </p>
            <p>
              I’m particularly interested in areas like Generative AI, NLP, and building end-to-end ML systems, from data and training to deployment. I enjoy working at the intersection of research and engineering, where ideas are not just explored, but implemented and tested in practical scenarios.
            </p>
            <p>
              Over time, I’ve built 25+ projects that reflect this approach, focusing on simplicity, usability, and real impact rather than just theory.
            </p>
            <p>
              Currently, I’m focused on improving how AI systems are built and deployed, making them more efficient, scalable, and accessible.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
