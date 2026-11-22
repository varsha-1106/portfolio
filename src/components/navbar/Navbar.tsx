"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalData } from "@/data/personal";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["hero", "about", "projects", "skills", "experience", "education", "journey", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Activities", href: "#experience", id: "experience" },
    { name: "Journey", href: "#journey", id: "journey" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-4 md:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl flex items-center justify-between px-3 sm:px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#141414]/90 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/60 py-2"
            : "bg-[#141414]/60 backdrop-blur-sm border border-white/5"
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-r from-[#89AACC] to-[#4E85BF] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0A0A0A] rounded-full flex items-center justify-center">
              <span className="font-display italic text-xs font-bold text-primary tracking-tighter">
                VT.
              </span>
            </div>
          </div>
          <span className="font-display italic text-lg text-primary tracking-tight font-medium hidden sm:inline-block">
            {personalData.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-xs font-medium text-muted">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-primary bg-white/10 shadow-sm"
                    : "hover:text-primary hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-primary bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-200 hover:border-[#89AACC]/40"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#89AACC]" />
          </a>

          <a
            href="#resume"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#0A0A0A] bg-primary hover:bg-white rounded-full transition-all duration-200 shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-[#4E85BF]" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted hover:text-primary md:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 bg-[#141414]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 md:hidden z-50">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-primary bg-white/10 font-semibold"
                    : "text-muted hover:text-primary hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-primary bg-white/5 border border-white/10 rounded-xl"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#89AACC]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
