"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const projects = [
  {
    title: "AI Python Debugging Assistant",
    badge: "Flagship",
    stack: "BERT · NLP · Semantic Search · Stack Overflow Data",
    description: "Helps students debug Python errors using similar real-world solutions and contextual guidance.",
  },
  {
    title: "End-to-End ML Pipeline System",
    badge: "Production",
    stack: "PyTorch · FastAPI · Docker · MLflow · AWS/GCP",
    description: "Full ML lifecycle from data ingestion to deployment with automated retraining workflows.",
  },
  {
    title: "Generative AI Content System",
    badge: "Advanced",
    stack: "OpenAI API · Hugging Face · Prompt Engineering · Streamlit",
    description: "LLM-powered app for content generation and summarization with optimized responses.",
  },
  {
    title: "Computer Vision Classification System",
    badge: "Production",
    stack: "PyTorch · OpenCV · CNNs",
    description: "Image classification system trained on custom datasets with optimized inference performance.",
  },
  {
    title: "RAG-Based Knowledge System",
    badge: "Flagship",
    stack: "Embeddings · Vector DBs · LLMs · Retrieval Systems",
    description: "Retrieval-augmented AI system that answers queries using external knowledge sources.",
  },
  {
    title: "AI Automation Workflows",
    badge: "Experimental",
    stack: "n8n · APIs · LLM Agents · Python",
    description: "Automated intelligent workflows for repetitive tasks using AI-driven decision systems.",
  },
];

const badgeColors: Record<string, string> = {
  "Flagship": "bg-[#ff6b35]/20 text-[#ff6b35] border-[#ff6b35]/30",
  "Production": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Advanced": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Experimental": "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default function Courses() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          style={{ letterSpacing: "-0.03em" }}
        >
          Selected Work
        </h2>
        <p className="text-gray-400 text-xl font-medium">
          A showcase of 25+ projects bridging ML theory and real-world deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-[#ff6b35]/50 transition-colors duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white group-hover:text-[#ff6b35] transition-colors">
                {project.title}
              </h3>
              <span className={clsx(
                "px-3 py-1 rounded-full text-xs font-bold border whitespace-nowrap ml-4 tracking-wider uppercase",
                badgeColors[project.badge] || "bg-white/10 text-white border-white/20"
              )}>
                {project.badge}
              </span>
            </div>
            
            <p className="text-gray-400 text-lg flex-grow mb-8">
              {project.description}
            </p>

            <div className="mt-auto">
              <span className="inline-block px-4 py-2 rounded-lg bg-[#1a1a1a] border border-white/5 text-sm text-gray-300 font-medium font-mono">
                {project.stack}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
