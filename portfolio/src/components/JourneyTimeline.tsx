"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const timelineData = [
  {
    date: "May 2025",
    title: "Started with Python & ML Basics",
    description: "Curiosity about how intelligent systems actually work.",
  },
  {
    date: "2025",
    title: "First Machine Learning Projects",
    description: "Built small models and began understanding real-world ML workflows.",
  },
  {
    date: "Sept 2025",
    title: "End-to-End ML Systems",
    description: "Moved from models to full pipelines: training, evaluation, and deployment.",
  },
  {
    date: "Nov 2025",
    title: "LLMs & Generative AI Exploration",
    description: "Started building applications using large language models and embeddings.",
  },
  {
    date: "Jan 2026",
    title: "Production AI Systems",
    description: "Built deployed ML apps, including RAG systems, CV models, and automation tools.",
  },
  {
    date: "Present",
    title: "AI Engineer Focused on Real-World Systems",
    description: "Building scalable AI products across ML, LLMs, and automation.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="mb-20 text-center">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          style={{ letterSpacing: "-0.03em" }}
        >
          The Journey
        </h2>
        <p className="text-gray-400 text-xl font-medium">
          How I got here and where I&apos;m going.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Centered Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

        <div className="flex flex-col space-y-12">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={clsx(
                  "relative flex flex-col md:flex-row items-start md:items-center",
                  isEven ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#ff6b35] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-[0_0_15px_rgba(255,107,53,0.5)]" />

                {/* Content Box */}
                <div className={clsx(
                  "ml-12 md:ml-0 md:w-1/2 p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-white/20 transition-colors",
                  isEven ? "md:ml-auto md:pl-12" : "md:pr-12"
                )}>
                  <span className="text-[#ff6b35] font-bold text-sm tracking-widest uppercase mb-2 block">
                    {item.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
