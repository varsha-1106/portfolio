"use client";

import React, { useState, useEffect } from "react";
import { personalData } from "@/data/personal";
import { Github, Star, GitFork, ExternalLink, RefreshCw, FolderGit2 } from "lucide-react";

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export default function GithubFeed() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  // Curated fallback repositories based on Varsha's verified work
  const fallbackRepos: GithubRepo[] = [
    {
      id: 1,
      name: "colour-name-recognizer",
      description: "Python computer vision utility identifying RGB pixel inputs and matching nearest color names.",
      html_url: "https://github.com/varsha-1106",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2024",
    },
    {
      id: 2,
      name: "criminal-network-analysis",
      description: "Smart India Hackathon project repository on graph-based entity association logic.",
      html_url: "https://github.com/varsha-1106",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2024",
    },
    {
      id: 3,
      name: "physio-rehab-tracker",
      description: "Computer vision exploration for hand and wrist joint tracking for physical therapy rehabilitation.",
      html_url: "https://github.com/varsha-1106",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2024",
    },
  ];

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/varsha-1106/repos?sort=updated&per_page=6");
        if (!res.ok) {
          throw new Error("GitHub API limit or offline");
        }
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
          setIsFallback(false);
        } else {
          setRepos(fallbackRepos);
          setIsFallback(true);
        }
      } catch (err) {
        setRepos(fallbackRepos);
        setIsFallback(true);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#89AACC]">
                Open Source & Code
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display italic text-primary">
              GitHub Repositories.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted max-w-xl">
              Live code, project staging, and development activity hosted on my GitHub profile.
            </p>
          </div>

          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-primary text-xs font-semibold transition-all hover:scale-105 self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Explore GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#89AACC]" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#121212] border border-white/5 animate-pulse h-44 flex flex-col justify-between"
              >
                <div className="h-4 bg-white/10 rounded w-3/4 mb-3" />
                <div className="h-3 bg-white/5 rounded w-full mb-2" />
                <div className="h-3 bg-white/5 rounded w-2/3" />
                <div className="h-3 bg-white/10 rounded w-1/4 mt-4" />
              </div>
            ))
          ) : (
            repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-[#121212] hover:bg-[#151515] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <FolderGit2 className="w-4 h-4 text-[#89AACC]" />
                    <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-primary font-mono group-hover:text-[#89AACC] transition-colors truncate">
                    {repo.name}
                  </h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">
                    {repo.description || "Public repository staging code experiments and algorithmic implementations."}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4E85BF]" />
                    <span>{repo.language || "Python"}</span>
                  </div>
                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  )}
                </div>
              </a>
            ))
          )}
        </div>

        {isFallback && !loading && (
          <div className="mt-6 text-center text-xs font-mono text-muted/80">
            Note: Showing curated profile repository staging. Rate limits or connectivity may defer live sync.
          </div>
        )}
      </div>
    </section>
  );
}
