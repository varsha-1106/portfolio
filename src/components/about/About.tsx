"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { Compass, Zap, Lightbulb, Users, BookOpen, Quote } from "lucide-react";

export default function About() {
  const highlightIcons = [
    <Compass key="1" className="w-5 h-5 text-[#89AACC]" />,
    <Zap key="2" className="w-5 h-5 text-[#4E85BF]" />,
    <Lightbulb key="3" className="w-5 h-5 text-[#89AACC]" />,
    <Users key="4" className="w-5 h-5 text-[#4E85BF]" />,
    <BookOpen key="5" className="w-5 h-5 text-[#89AACC]" />,
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#89AACC]">
              Perspective & Purpose
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display italic text-primary">
            {personalData.about.heading}
          </h2>
        </div>

        {/* Editorial Layout: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-muted leading-relaxed text-base sm:text-lg">
            {personalData.about.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "text-primary/95 text-lg sm:text-xl font-normal leading-relaxed" : ""}>
                {p}
              </p>
            ))}

            {/* Core Philosophy Callout Card */}
            <div className="mt-6 p-6 rounded-2xl bg-[#141414] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-white pointer-events-none">
                <Quote className="w-16 h-16" />
              </div>
              <p className="text-sm font-display italic text-primary/90 text-lg relative z-10 leading-relaxed">
                &ldquo;{personalData.about.corePhilosophy}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#89AACC]">
                <span>VARSHA T.</span>
                <span className="text-white/20">/</span>
                <span>Engineering Mindset</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Highlight Traits */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
              Character & Approach
            </h3>

            {personalData.about.highlights.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#121212] hover:bg-[#161616] border border-white/5 hover:border-white/15 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-[#89AACC]/30 transition-colors">
                  {highlightIcons[index % highlightIcons.length]}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary group-hover:text-[#89AACC] transition-colors">
                    {item.label}
                  </h4>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
