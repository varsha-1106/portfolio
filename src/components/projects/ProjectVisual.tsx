"use client";

import React from "react";

interface ProjectVisualProps {
  type: "network-graph" | "pose-tracking" | "sensor-radar" | "emergency-alert" | "color-spectrum";
  title: string;
}

export default function ProjectVisual({ type, title }: ProjectVisualProps) {
  switch (type) {
    case "network-graph":
      return (
        <div className="w-full h-48 bg-[#0D0D0D] rounded-xl relative overflow-hidden border border-white/5 flex items-center justify-center p-4">
          <svg viewBox="0 0 240 120" className="w-full h-full opacity-90">
            {/* Background grid */}
            <defs>
              <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid1)" />

            {/* Connecting Edges */}
            <line x1="40" y1="60" x2="90" y2="35" stroke="#4E85BF" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="40" y1="60" x2="85" y2="85" stroke="#89AACC" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="2 2" />
            <line x1="90" y1="35" x2="145" y2="40" stroke="#89AACC" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="85" y1="85" x2="145" y2="40" stroke="#4E85BF" strokeWidth="1" strokeOpacity="0.6" />
            <line x1="85" y1="85" x2="155" y2="90" stroke="#89AACC" strokeWidth="1.2" strokeOpacity="0.7" />
            <line x1="145" y1="40" x2="200" y2="60" stroke="#4E85BF" strokeWidth="1.8" strokeOpacity="0.9" />
            <line x1="155" y1="90" x2="200" y2="60" stroke="#89AACC" strokeWidth="1" strokeOpacity="0.6" />

            {/* Central Intelligence Node */}
            <circle cx="145" cy="40" r="14" fill="#4E85BF" fillOpacity="0.15" />
            <circle cx="145" cy="40" r="8" fill="#4E85BF" stroke="#89AACC" strokeWidth="2" />
            
            {/* Other Nodes */}
            <circle cx="40" cy="60" r="5" fill="#888888" stroke="#141414" strokeWidth="2" />
            <circle cx="90" cy="35" r="6" fill="#89AACC" stroke="#141414" strokeWidth="2" />
            <circle cx="85" cy="85" r="5" fill="#888888" stroke="#141414" strokeWidth="2" />
            <circle cx="155" cy="90" r="6" fill="#89AACC" stroke="#141414" strokeWidth="2" />
            <circle cx="200" cy="60" r="7" fill="#F5F5F5" stroke="#4E85BF" strokeWidth="2" />
          </svg>
          <div className="absolute bottom-2 left-3 text-[10px] font-mono text-muted flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
            Relational Cluster Topology
          </div>
        </div>
      );

    case "pose-tracking":
      return (
        <div className="w-full h-48 bg-[#0D0D0D] rounded-xl relative overflow-hidden border border-white/5 flex items-center justify-center p-4">
          <svg viewBox="0 0 240 120" className="w-full h-full opacity-90">
            {/* Hand Skeleton Lines */}
            <path d="M 120 105 L 120 75 L 85 55 L 75 35" stroke="#89AACC" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M 120 75 L 105 45 L 100 25" stroke="#4E85BF" strokeWidth="2" fill="none" opacity="0.8" />
            <path d="M 120 75 L 125 40 L 130 18" stroke="#89AACC" strokeWidth="2" fill="none" opacity="0.9" />
            <path d="M 120 75 L 145 48 L 155 30" stroke="#4E85BF" strokeWidth="1.8" fill="none" opacity="0.8" />
            <path d="M 120 75 L 160 65 L 175 55" stroke="#89AACC" strokeWidth="1.5" fill="none" opacity="0.6" />

            {/* Joints */}
            <circle cx="120" cy="105" r="4" fill="#F5F5F5" />
            <circle cx="120" cy="75" r="5" fill="#4E85BF" />
            <circle cx="85" cy="55" r="3" fill="#89AACC" />
            <circle cx="75" cy="35" r="3" fill="#89AACC" />
            <circle cx="105" cy="45" r="3.5" fill="#89AACC" />
            <circle cx="100" cy="25" r="3" fill="#89AACC" />
            <circle cx="125" cy="40" r="4" fill="#89AACC" />
            <circle cx="130" cy="18" r="3" fill="#89AACC" />
            <circle cx="145" cy="48" r="3.5" fill="#89AACC" />
            <circle cx="155" cy="30" r="3" fill="#89AACC" />

            {/* Joint Arc indicator */}
            <path d="M 112 68 A 12 12 0 0 1 128 68" stroke="#10B981" strokeWidth="1.5" fill="none" />
          </svg>
          <div className="absolute top-2 right-3 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Wrist: 118.4°
          </div>
          <div className="absolute bottom-2 left-3 text-[10px] font-mono text-muted flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Spatial Joint Telemetry
          </div>
        </div>
      );

    case "sensor-radar":
      return (
        <div className="w-full h-48 bg-[#0D0D0D] rounded-xl relative overflow-hidden border border-white/5 flex items-center justify-center p-4">
          <svg viewBox="0 0 240 120" className="w-full h-full opacity-85">
            {/* Concentric radar rings */}
            <circle cx="120" cy="60" r="15" fill="none" stroke="#4E85BF" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="120" cy="60" r="32" fill="none" stroke="#89AACC" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 3" />
            <circle cx="120" cy="60" r="50" fill="none" stroke="#4E85BF" strokeWidth="1" strokeOpacity="0.3" />

            {/* Sweep Angle */}
            <line x1="120" y1="60" x2="165" y2="28" stroke="#89AACC" strokeWidth="1.5" strokeOpacity="0.8" />
            <path d="M 120 60 L 165 28 A 50 50 0 0 0 145 15 Z" fill="#89AACC" fillOpacity="0.08" />

            {/* Center Wearable Sensor Point */}
            <circle cx="120" cy="60" r="5" fill="#F5F5F5" stroke="#4E85BF" strokeWidth="2" />

            {/* Sub-surface Proximity Ping */}
            <circle cx="152" cy="42" r="4" fill="#EF4444" className="animate-ping" />
            <circle cx="152" cy="42" r="3" fill="#EF4444" />
          </svg>
          <div className="absolute bottom-2 left-3 text-[10px] font-mono text-muted flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
            Ground Proximity Sweep
          </div>
        </div>
      );

    case "emergency-alert":
      return (
        <div className="w-full h-48 bg-[#0D0D0D] rounded-xl relative overflow-hidden border border-white/5 flex items-center justify-center p-4">
          <svg viewBox="0 0 240 120" className="w-full h-full opacity-90">
            {/* Pulse Beacons */}
            <circle cx="70" cy="60" r="24" fill="none" stroke="#89AACC" strokeWidth="1" strokeOpacity="0.2" />
            <circle cx="70" cy="60" r="14" fill="none" stroke="#4E85BF" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="70" cy="60" r="5" fill="#89AACC" />

            {/* Dispatch Route Line */}
            <path d="M 70 60 Q 120 30 170 60" stroke="#4E85BF" strokeWidth="2" strokeDasharray="4 4" fill="none" />
            
            {/* Responder Beacon */}
            <circle cx="170" cy="60" r="6" fill="#10B981" stroke="#F5F5F5" strokeWidth="1.5" />
          </svg>
          <div className="absolute top-2 right-3 text-[10px] font-mono text-[#89AACC] bg-[#4E85BF]/10 px-2 py-0.5 rounded border border-[#89AACC]/20">
            Triage Level 1
          </div>
          <div className="absolute bottom-2 left-3 text-[10px] font-mono text-muted flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Automated Incident Routing
          </div>
        </div>
      );

    case "color-spectrum":
      return (
        <div className="w-full h-48 bg-[#0D0D0D] rounded-xl relative overflow-hidden border border-white/5 flex items-center justify-center p-4">
          <div className="w-full flex flex-col gap-2">
            <div className="h-6 w-full rounded-md bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-indigo-500 opacity-80 border border-white/10" />
            <div className="grid grid-cols-4 gap-2 pt-2">
              <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
                <span className="text-[9px] text-muted block">R</span>
                <span className="text-xs font-mono font-semibold text-primary">137</span>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
                <span className="text-[9px] text-muted block">G</span>
                <span className="text-xs font-mono font-semibold text-primary">170</span>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
                <span className="text-[9px] text-muted block">B</span>
                <span className="text-xs font-mono font-semibold text-primary">204</span>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
                <span className="text-[9px] text-muted block">HEX</span>
                <span className="text-xs font-mono font-semibold text-[#89AACC]">#89AACC</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 left-3 text-[10px] font-mono text-muted flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
            RGB Distance Matrix
          </div>
        </div>
      );
  }
}
