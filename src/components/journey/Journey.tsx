"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { Sparkles, TrendingUp, Compass, CheckCircle2 } from "lucide-react";

export default function Journey() {
  return (
    <section id="journey" className="py-16 sm:py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Learning Journey ("Currently growing.") */}
        <div className="mb-16 sm:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-9 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#89AACC]">
                  Learning Roadmap
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display italic text-primary">
                Currently growing.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted max-w-xl">
                I&apos;m building across full-stack development, GenAI, agent workflows, and automation while deepening my AI/ML engineering practice.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>In Active Daily Iteration</span>
            </div>
          </div>

          {/* Growth Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {personalData.learningRoadmap.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#121212] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#89AACC] border border-white/5">
                      {item.level}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <h3 className="text-base font-semibold text-primary font-display mb-1">
                    {item.topic}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Journey Milestones ("From curiosity to creation.") */}
        <div className="pt-16 border-t border-white/5">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#89AACC]">
                Evolution
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display italic text-primary">
              From curiosity to creation.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted max-w-lg">
              Milestones along the path from engineering student to aspiring AI engineer.
            </p>
          </div>

          {/* Timeline Milestones */}
          <div className="relative border-l border-white/10 ml-4 sm:ml-6 pl-5 sm:pl-8 space-y-6 sm:space-y-10">
            {personalData.journeyMilestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#89AACC] group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4E85BF]" />
                </div>

                <div className="p-4 sm:p-6 rounded-2xl bg-[#141414] border border-white/5 group-hover:border-white/15 transition-all">
                  <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-3">
                    <span className="font-mono text-xs text-[#89AACC] font-semibold">
                      STAGE {m.phase}
                    </span>
                    <span className="text-white/20">/</span>
                    <h3 className="min-w-0 break-words text-base sm:text-xl font-display italic text-primary font-medium">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {m.desc}
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
