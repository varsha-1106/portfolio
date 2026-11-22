"use client";

import dynamic from "next/dynamic";

// The shader is client-only and loaded after hydration, off the critical path.
const GhostShader = dynamic(() => import("./GhostShader"), { ssr: false });

/** Fixed backdrop for the Ghost Mode homepage: CSS gradient, lazy shader, grain. */
export default function GhostBackground() {
  return (
    <div className="gh-bg" aria-hidden="true">
      <GhostShader />
      <div className="gh-grain" />
    </div>
  );
}
