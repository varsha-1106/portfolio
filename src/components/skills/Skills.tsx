"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { Terminal, Database, Code, GitBranch, Monitor, Cpu, Sparkles, BookOpen } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-5 h-5 text-[#89AACC]" />;
      case 1:
        return <Code className="w-5 h-5 text-[#4E85BF]" />;
      case 2:
        return <GitBranch className="w-5 h-5 text-[#89AACC]" />;
      case 3:
        return <Monitor className="w-5 h-5 text-[#4E85BF]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#89AACC]" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#89AACC]">
                Active Capabilities & Growth
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display italic text-primary">
              My technical toolkit.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted max-w-xl">
              A growing engineering toolkit across full-stack applications, GenAI, agent orchestration, automation, and event-driven systems.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#89AACC] animate-pulse" />
            <span>Modern stack · Actively exploring</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalData.skills.map((category, catIdx) => (
            <div
              key={catIdx}
              className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#121212] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between ${
                catIdx === personalData.skills.length - 1
                  ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#121212] to-[#161616]"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary font-display">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted leading-tight">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill List items */}
                <div className="space-y-3 mt-5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-[#161616]/70 border border-white/5 hover:border-[#89AACC]/20 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-[#89AACC] border border-white/5">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-muted mt-1 leading-relaxed">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted">
                <span>Practicing regularly</span>
                <span className="text-[#89AACC]">Active Focus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
