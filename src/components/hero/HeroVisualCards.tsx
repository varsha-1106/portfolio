"use client";

import React from "react";
import { Activity, GitFork, Cpu, ShieldCheck, Sparkles } from "lucide-react";

export function NetworkGraphPreview() {
  return (
    <div className="glass-panel rounded-xl p-3 shadow-xl shadow-black/40 border border-white/10 w-52 md:w-60 text-xs backdrop-blur-md">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#89AACC] animate-pulse" />
          <span className="text-[11px] font-semibold text-primary tracking-wide">
            Network Intelligence
          </span>
        </div>
        <span className="text-[10px] text-muted font-mono">SIH &apos;24</span>
      </div>

      {/* Decorative Graph SVG */}
      <div className="relative h-20 w-full bg-[#0D0D0D]/80 rounded-lg overflow-hidden border border-white/5 flex items-center justify-center p-2">
        <svg viewBox="0 0 160 70" className="w-full h-full">
          {/* Edges */}
          <line x1="30" y1="35" x2="65" y2="20" stroke="#89AACC" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <line x1="30" y1="35" x2="65" y2="50" stroke="#4E85BF" strokeWidth="1.2" opacity="0.7" />
          <line x1="65" y1="20" x2="110" y2="25" stroke="#4E85BF" strokeWidth="1.5" opacity="0.8" />
          <line x1="65" y1="50" x2="110" y2="45" stroke="#89AACC" strokeWidth="1" opacity="0.5" />
          <line x1="110" y1="25" x2="140" y2="35" stroke="#89AACC" strokeWidth="1.5" opacity="0.9" />
          <line x1="110" y1="45" x2="140" y2="35" stroke="#4E85BF" strokeWidth="1.2" opacity="0.7" />

          {/* Nodes */}
          <circle cx="30" cy="35" r="4" fill="#888888" />
          <circle cx="65" cy="20" r="5" fill="#4E85BF" />
          <circle cx="65" cy="50" r="4.5" fill="#89AACC" />
          <circle cx="110" cy="25" r="6" fill="#89AACC">
            <animate attributeName="r" values="6;7.5;6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="110" cy="45" r="4" fill="#888888" />
          <circle cx="140" cy="35" r="5.5" fill="#F5F5F5" />
        </svg>
      </div>

      <div className="mt-2 flex items-center justify-between text-[10px] text-muted">
        <span className="flex items-center gap-1 font-mono">
          <GitFork className="w-3 h-3 text-[#89AACC]" /> Relational Nodes
        </span>
        <span className="text-[#89AACC] font-mono font-medium">Mapped</span>
      </div>
    </div>
  );
}

export function PoseTrackingPreview() {
  return (
    <div className="glass-panel rounded-xl p-3 shadow-xl shadow-black/40 border border-white/10 w-48 md:w-56 text-xs backdrop-blur-md">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-[#4E85BF]" />
          <span className="text-[11px] font-semibold text-primary tracking-wide">
            Vision Rehab Track
          </span>
        </div>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#4E85BF]/20 text-[#89AACC] font-mono">
          Live
        </span>
      </div>

      <div className="flex items-center justify-between bg-[#0D0D0D]/80 rounded-lg p-2 border border-white/5">
        <div className="flex flex-col">
          <span className="text-[10px] text-muted">Wrist Angle</span>
          <span className="text-sm font-semibold font-mono text-primary">
            118.4° <span className="text-[10px] text-emerald-400">Normal</span>
          </span>
        </div>
        <div className="w-9 h-9 rounded-full border border-[#89AACC]/40 flex items-center justify-center relative">
          <div className="w-6 h-6 rounded-full border-t-2 border-[#89AACC] animate-spin" />
          <div className="absolute w-2 h-2 rounded-full bg-[#4E85BF]" />
        </div>
      </div>

      <div className="mt-2 text-[10px] text-muted flex items-center justify-between">
        <span>Hand Pose Kinematics</span>
        <span className="text-primary font-mono">30 FPS</span>
      </div>
    </div>
  );
}

export function AcademicBadgePreview() {
  return (
    <div className="glass-pill rounded-full px-3 py-1.5 shadow-lg shadow-black/50 border border-white/10 flex items-center gap-2 text-xs">
      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
      <span className="text-[11px] text-primary font-medium">
        AIML @ Sri Sairam | 5th Sem
      </span>
      <span className="text-[10px] text-muted font-mono pl-1 border-l border-white/10">
        Batch &apos;28
      </span>
    </div>
  );
}
