"use client";

import React from "react";

const tags = [
  "AI Engineer",
  "25+ Projects",
  "Generative AI",
  "LLMs",
  "PyTorch",
  "NLP",
  "Computer Vision",
  "MLOps",
  "Model Deployment",
  "RAG Systems",
  "Hugging Face",
  "Vector Databases",
  "Scalable AI Systems",
  "API Development",
  "Prompt Engineer",
];

// Duplicate tags to ensure smooth continuous scrolling
const multipliedTags = [...tags, ...tags, ...tags];

export default function TagScroll() {
  return (
    <section className="bg-[#111111] py-16 md:py-24 overflow-hidden border-y border-white/5">
      <div className="flex flex-col gap-6 w-[200%] md:w-[150%]">
        
        {/* Row 1 - Scrolling Left */}
        <div className="flex gap-4 animate-scroll-left w-full">
          {multipliedTags.map((tag, i) => (
            <div 
              key={`row1-${i}`}
              className="whitespace-nowrap px-6 py-3 rounded-full border border-white/20 text-white font-medium tracking-wide text-sm md:text-base hover:border-white/50 transition-colors bg-[#1a1a1a]"
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="flex gap-4 animate-scroll-right w-full">
          {[...multipliedTags].reverse().map((tag, i) => (
            <div 
              key={`row2-${i}`}
              className="whitespace-nowrap px-6 py-3 rounded-full border border-white/20 text-white font-medium tracking-wide text-sm md:text-base hover:border-white/50 transition-colors bg-[#1a1a1a]"
            >
              {tag}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
