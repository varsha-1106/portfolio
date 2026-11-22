"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/types";
import ProjectVisual from "./ProjectVisual";
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Layers, Target, Compass, Sparkles } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
    <motion.div
      key="project-detail-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.985 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        data-lenis-prevent
        className="relative w-full max-w-4xl max-h-[94dvh] sm:max-h-[90vh] bg-[#121212] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto overscroll-contain z-10 flex flex-col"
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#121212]/95 backdrop-blur-md border-b border-white/5">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs text-[#89AACC] font-semibold">
              PROJECT {project.number}
            </span>
            <span className="text-white/20">/</span>
            <span className="max-w-[42vw] truncate text-xs text-muted font-medium sm:max-w-none">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-muted hover:text-primary bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="min-w-0 p-4 sm:p-8 space-y-6 sm:space-y-8">
          {/* Title & Status */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold font-mono bg-[#4E85BF]/15 text-[#89AACC] border border-[#89AACC]/30">
                {project.status}
              </span>
              {project.period && (
                <span className="text-xs text-muted font-mono">{project.period}</span>
              )}
            </div>
            <h2 className="text-xl sm:text-4xl font-display italic text-primary leading-tight break-words">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Abstract Architectural Visual */}
          <div className="w-full">
            <ProjectVisual type={project.visualType} title={project.title} />
          </div>

          {/* Quick Metrics (if available) */}
          {project.keyMetrics && project.keyMetrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.keyMetrics.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-muted block uppercase tracking-wider font-mono">
                    {metric.label}
                  </span>
                  <span className="text-sm font-semibold text-primary mt-0.5 block">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Deep-Dive Grid: Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#161616] border border-white/5">
              <div className="flex items-center gap-2 mb-3 text-[#EF4444]">
                <Target className="w-4 h-4" />
                <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-primary">
                  Problem Statement
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#161616] border border-white/5">
              <div className="flex items-center gap-2 mb-3 text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-primary">
                  Proposed Solution
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {project.proposedSolution}
              </p>
            </div>
          </div>

          {/* My Contribution */}
          <div className="p-5 rounded-2xl bg-[#161616] border border-white/5">
            <div className="flex items-center gap-2 mb-3 text-[#89AACC]">
              <Compass className="w-4 h-4" />
              <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-primary">
                My Role & Contribution
              </h3>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              {project.myContribution}
            </p>
          </div>

          {/* Tech Stack Verified */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider text-muted mb-3">
              Explored Technologies & Disciplines
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Learning Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#161616] border border-white/5">
              <div className="flex items-center gap-2 mb-3 text-amber-400">
                <AlertCircle className="w-4 h-4" />
                <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-primary">
                  Engineering Challenges
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#161616] border border-white/5">
              <div className="flex items-center gap-2 mb-3 text-[#4E85BF]">
                <CheckCircle2 className="w-4 h-4" />
                <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-primary">
                  Learning Takeaways
                </h3>
              </div>
              <ul className="space-y-2">
                {project.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className="text-xs text-muted flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC] mt-1 shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links & Repository Status */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-primary text-xs font-semibold transition-colors border border-white/10"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile / Repo</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#89AACC]" />
                </a>
              ) : (
                <span className="text-xs text-muted font-mono italic">
                  Repository in staging
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-muted hover:text-primary transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
  );
}
