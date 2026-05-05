"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Machine Learning Systems",
    description: "End-to-end ML pipelines. From data to training, evaluation, and deployment in production environments.",
  },
  {
    title: "Generative AI & LLMs",
    description: "LLM-powered applications, prompt engineering, and RAG systems that turn language models into usable products.",
  },
  {
    title: "AI Automation Systems",
    description: "Intelligent workflows using APIs, n8n, and agent-based systems to automate real-world tasks 24/7.",
  },
  {
    title: "Web & API Development",
    description: "Fast, scalable backend systems using FastAPI and modern web tools to serve ML models and AI apps.",
  },
  {
    title: "Computer Vision",
    description: "Image classification and detection systems using deep learning models, optimized for real-world performance.",
  },
  {
    title: "AI Product Design (UI/UX Thinking)",
    description: "User-focused design for AI systems, simple interfaces that make complex models usable and intuitive.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          style={{ letterSpacing: "-0.03em" }}
        >
          What I Do
        </h2>
        <p className="text-gray-400 text-xl font-medium">
          Areas of expertise and the value I deliver.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
              {service.title}
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
