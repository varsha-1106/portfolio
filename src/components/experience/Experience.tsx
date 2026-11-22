"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { Trophy, Award, Presentation, BookOpen, Calendar, Users, Check } from "lucide-react";

export default function Experience() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hackathon":
        return <Trophy className="w-4 h-4 text-[#89AACC]" />;
      case "Leadership":
        return <Users className="w-4 h-4 text-[#4E85BF]" />;
      case "Academic":
        return <Presentation className="w-4 h-4 text-[#89AACC]" />;
      case "Editorial":
        return <BookOpen className="w-4 h-4 text-[#4E85BF]" />;
      default:
        return <Award className="w-4 h-4 text-[#89AACC]" />;
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#89AACC]">
                Involvement & Impact
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display italic text-primary">
              Learning beyond the classroom.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted max-w-xl">
              Authentic leadership, hackathon participation, editorial contributions, and technical presentations testing collaboration in real-world environments.
            </p>
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {personalData.activities.map((item, index) => (
            <div
              key={item.id}
              className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#121212] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#89AACC]">
                      {item.category.toUpperCase()}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-muted">
                    Verified Activity
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display italic text-primary leading-tight">
                  {item.role}
                </h3>
                <p className="text-xs font-mono text-[#89AACC] mt-1 mb-3">
                  {item.organization}
                </p>

                <p className="text-sm text-muted leading-relaxed mb-5">
                  {item.summary}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs text-muted flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#89AACC] mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tag Footer */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-muted border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
