import React from "react";
import { Mail } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
              Divyanshu Pathak
            </h3>
            <p className="text-gray-400 font-medium mb-6 max-w-sm">
              I Make Tech, AI & Design Simple.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-[#1a1a1a] rounded-full text-white hover:bg-[#ff6b35] hover:text-white transition-colors border border-white/5">
                <GithubIcon />
              </a>
              <a href="#" className="p-2 bg-[#1a1a1a] rounded-full text-white hover:bg-[#ff6b35] hover:text-white transition-colors border border-white/5">
                <LinkedinIcon />
              </a>
              <a href="#" className="p-2 bg-[#1a1a1a] rounded-full text-white hover:bg-[#ff6b35] hover:text-white transition-colors border border-white/5">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col md:items-center">
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Journey</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Projects</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:items-end">
            <div className="text-left md:text-right">
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact</h4>
              <a href="mailto:divyanshupathakcse@gmail.com" className="group flex items-center md:justify-end gap-2 text-gray-400 hover:text-white transition-colors font-medium mb-4">
                <Mail size={16} />
                <span className="border-b border-transparent group-hover:border-white transition-colors">divyanshupathakcse@gmail.com</span>
              </a>
              <ul className="space-y-3 mt-8">
                <li><a href="#" className="text-[#ff6b35] hover:text-white transition-colors font-medium font-mono text-sm uppercase tracking-widest">Read Blog ↗</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            © 2026 Divyanshu Pathak. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm font-medium">
            Built with AI, designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
