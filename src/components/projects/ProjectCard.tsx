"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Project } from "@/types";
import ProjectVisual from "./ProjectVisual";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (
      !card ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    gsap.set(card, { transformPerspective: 1100, transformStyle: "preserve-3d" });
    const rotateX = gsap.quickTo(card, "rotationX", { duration: 0.45, ease: "power3.out" });
    const rotateY = gsap.quickTo(card, "rotationY", { duration: 0.45, ease: "power3.out" });
    const onPointerMove = (event: PointerEvent) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      rotateX(y * -3);
      rotateY(x * 3);
    };
    const onPointerLeave = () => {
      rotateX(0);
      rotateY(0);
    };

    card.addEventListener("pointermove", onPointerMove);
    card.addEventListener("pointerleave", onPointerLeave);
    return () => {
      card.removeEventListener("pointermove", onPointerMove);
      card.removeEventListener("pointerleave", onPointerLeave);
      gsap.killTweensOf(card);
      gsap.set(card, { clearProps: "transform" });
    };
  }, []);

  return (
    <div
      ref={cardRef}
      data-motion-card
      className="group relative rounded-2xl sm:rounded-3xl bg-[#121212] hover:bg-[#151515] border border-white/5 hover:border-white/15 transition-colors duration-300 p-4 sm:p-7 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/40"
    >
      {/* Top Meta Bar */}
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-x-2 gap-y-2 sm:flex-nowrap">
          <div className="flex min-w-0 items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#89AACC]">
              {project.number}
            </span>
            <span className="text-white/20">/</span>
            <span className="text-[11px] text-muted font-mono uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/5 border border-white/10 text-[#89AACC]">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-2xl font-display italic text-primary group-hover:text-white transition-colors leading-tight mb-2 break-words">
          {project.title}
        </h3>

        <p className="text-[13px] sm:text-sm text-muted leading-relaxed line-clamp-2 mb-5">
          {project.subtitle}
        </p>

        {/* Abstract Architectural Visualization */}
        <div data-motion-parallax="0.16" className="w-full min-w-0 mb-5 transition-transform duration-300 group-hover:scale-[1.01]">
          <ProjectVisual type={project.visualType} title={project.title} />
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/5 text-muted"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-muted">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex min-h-10 items-center gap-1.5 py-2 sm:py-0 text-xs font-semibold text-primary group-hover:text-[#89AACC] transition-colors focus:outline-none"
        >
          <span>Project Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#89AACC]" />
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 min-w-10 items-center justify-center p-2 sm:p-1.5 text-muted hover:text-primary transition-colors"
            title="GitHub Repository"
            aria-label={`GitHub profile for ${project.title}`}
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
