"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Sparkles, Layers } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "AI & Network Intelligence",
    "Computer Vision & Healthcare",
    "Embedded Systems & IoT",
    "Computer Vision & Python"
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-9 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#89AACC]">
                Selected Work & Prototypes
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display italic text-primary">
              Things I&apos;m building.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted max-w-lg">
              Exploring ideas. Building solutions. Learning through practice.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-muted bg-[#141414] px-3 py-1.5 rounded-full border border-white/5 self-start md:self-auto">
            <Layers className="w-3.5 h-3.5 text-[#89AACC]" />
            <span>{projectsData.length} Documented Projects</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="-mx-4 mb-8 flex items-center gap-2 overflow-x-auto px-4 pb-4 no-scrollbar sm:mx-0 sm:mb-10 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-3 sm:px-4 py-2.5 sm:py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary text-[#0A0A0A] font-semibold shadow-md"
                  : "bg-white/5 text-muted hover:text-primary hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat === "All" ? "All Disciplines" : cat}
            </button>
          ))}
        </div>

        {/* Two projects per row on tablet and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8">
          <AnimatePresence initial={false}>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  onOpenDetails={(p) => setActiveModalProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-muted font-mono">
          Note: Visual previews are architectural UI compositions representing project systems. Actual code repositories and demo checkpoints are linked where available.
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
