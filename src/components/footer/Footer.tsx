"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070707] border-t border-white/5 py-12 text-xs text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full p-[1px] bg-gradient-to-r from-[#89AACC] to-[#4E85BF]">
            <div className="w-full h-full bg-[#0A0A0A] rounded-full flex items-center justify-center">
              <span className="font-display italic text-[11px] font-bold text-primary">
                VT.
              </span>
            </div>
          </div>
          <div>
            <span className="font-semibold text-primary">{personalData.name}</span>
            <span className="mx-2 text-white/20">•</span>
            <span>{personalData.professionalTitle}</span>
          </div>
        </div>

        {/* Social Navigation Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-muted hover:text-primary transition-colors"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#89AACC]" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-6 border-t border-white/5 text-center text-[11px] text-muted/60 font-mono">
        © {new Date().getFullYear()} Varsha T. • Designed with cinematic editorial aesthetics & authentic engineering rigor.
      </div>
    </footer>
  );
}
