"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle } from "lucide-react";

export default function Education() {
  const { education } = personalData;

  return (
    <section id="education" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#89AACC]">
              Academic Foundation
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display italic text-primary">
            Curriculum & Credentials.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted max-w-xl">
            Pursuing formal engineering rigor in Artificial Intelligence and Machine Learning in Bangalore&apos;s technological corridor.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="rounded-3xl bg-[#121212] border border-white/10 p-8 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#4E85BF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Degree & Institution */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#89AACC] mb-4">
                  <GraduationCap className="w-4 h-4" />
                  <span>Undergraduate Program</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display italic text-primary leading-tight mb-3">
                  {education.degree}
                </h3>

                <p className="text-lg text-primary/90 font-medium">
                  {education.institution}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted mt-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#89AACC]" />
                    {education.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#89AACC]" />
                    Batch {education.batch}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">
                    Current: {education.currentSemester}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4 text-xs font-mono text-muted">
                <span>Expected Graduation: <strong className="text-primary">{education.expectedGraduation}</strong></span>
              </div>
            </div>

            {/* Core Course Modules */}
            <div className="lg:col-span-5 bg-[#161616] p-6 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#89AACC] mb-4">
                <BookOpen className="w-4 h-4" />
                <span>Foundational Coursework</span>
              </div>

              <ul className="space-y-3">
                {education.focusAreas.map((area, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-muted">
                    <CheckCircle className="w-3.5 h-3.5 text-[#89AACC] shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
