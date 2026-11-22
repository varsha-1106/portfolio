"use client";

import React from "react";
import Image from "next/image";
import { personalData } from "@/data/personal";
import {
  AcademicBadgePreview,
} from "./HeroVisualCards";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Github,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#89AACC] uppercase font-mono">
                {personalData.heroEyebrow}
              </span>
            </div>

            {/* Name - Instrument Serif Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display italic tracking-tight text-primary leading-[0.95] mb-4">
              {personalData.name}
            </h1>

            {/* Professional Title & Sub-headline */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display text-primary/95 font-medium leading-snug">
                &ldquo;{personalData.tagline}&rdquo;
              </h2>
              <p className="mt-2 text-sm sm:text-base font-medium text-[#89AACC] tracking-wide">
                {personalData.professionalTitle}
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-sm sm:text-base text-muted max-w-xl leading-relaxed mb-6">
              {personalData.shortBio}
            </p>

            {/* Badges: Location & Availability */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-muted">
                <MapPin className="w-3.5 h-3.5 text-[#89AACC]" />
                <span>{personalData.location}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4E85BF]/10 border border-[#89AACC]/20 text-xs text-primary">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{personalData.availability}</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-[#0A0A0A] font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-white hover:scale-[1.02] shadow-lg shadow-white/5"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141414] hover:bg-[#1A1A1A] border border-white/15 text-primary font-medium text-xs sm:text-sm transition-all duration-300 hover:border-[#89AACC]/50"
              >
                <span>Let&apos;s Connect</span>
                <Mail className="w-4 h-4 text-[#89AACC]" />
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-muted hover:text-primary transition-all duration-300"
                aria-label="View GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#89AACC]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Large Cinematic Portrait with Floating UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
          >
            {/* Subtle Gradient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#4E85BF]/15 via-transparent to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Main Portrait Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-[#121212]">
              {/* Image element using Varsha's uploaded photo */}
              <Image
                data-motion-parallax="0.12"
                src={personalData.profileImages.primary}
                alt="Varsha T. - Future AI Engineer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                className="object-cover object-top transition-opacity duration-500"
              />

              {/* Bottom Vignette & Seamless Background Fade */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />

              {/* Subtitle Bar at bottom of portrait */}
              <div className="absolute bottom-4 inset-x-4 z-10 flex items-center justify-between text-xs text-muted/90 font-mono">
                <span className="text-[11px] text-primary/80">VARSHA T.</span>
                <span className="text-[10px] tracking-widest text-[#89AACC]">AIML &apos;28</span>
              </div>
            </div>

            {/* Floating Academic Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-8 -left-4 sm:-left-6 hidden md:block z-20"
            >
              <AcademicBadgePreview />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
