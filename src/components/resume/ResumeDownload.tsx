"use client";

import React, { useState, useEffect } from "react";
import { personalData } from "@/data/personal";
import { FileText, Download, CheckCircle, Mail, AlertCircle, ArrowUpRight, Sparkles } from "lucide-react";

export default function ResumeDownload() {
  const [hasPdf, setHasPdf] = useState(false);
  const [checking, setChecking] = useState(true);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    // Check if /resume.pdf exists on public server
    fetch("/resume.pdf", { method: "HEAD" })
      .then((res) => {
        if (res.ok && res.headers.get("content-type")?.includes("pdf")) {
          setHasPdf(true);
        } else {
          setHasPdf(false);
        }
      })
      .catch(() => setHasPdf(false))
      .finally(() => setChecking(false));
  }, []);

  const handleDownloadClick = (e: React.MouseEvent) => {
    if (!hasPdf) {
      e.preventDefault();
      setStatusMessage(
        "Formal Resume PDF is currently being finalized. Please reach out via email for an advance draft copy!"
      );
    }
  };

  return (
    <section id="resume" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#141414] to-[#0E0E0E] border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4E85BF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#89AACC] mb-4">
              <FileText className="w-4 h-4" />
              <span>Curriculum Vitae</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display italic text-primary leading-tight mb-4">
              Download Formal Resume.
            </h2>

            <p className="text-sm sm:text-base text-muted leading-relaxed mb-8">
              A comprehensive summary of my academic foundation at Sri Sairam College of Engineering, hackathon participations (including Smart India Hackathon), coursework in AI/ML, and technical projects.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/resume.pdf"
                download="Varsha_T_Resume.pdf"
                onClick={handleDownloadClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-primary text-[#0A0A0A] font-semibold text-xs sm:text-sm hover:bg-white transition-all shadow-lg hover:scale-105"
              >
                <Download className="w-4 h-4 text-[#4E85BF]" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={`mailto:${personalData.email}?subject=Resume%20Inquiry%20-%20Varsha%20T.`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-[#89AACC]" />
                <span>Request via Email</span>
              </a>
            </div>

            {statusMessage && (
              <div className="mt-6 p-4 rounded-xl bg-[#1A1A1A] border border-[#89AACC]/30 text-xs text-primary flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-[#89AACC] shrink-0 mt-0.5" />
                <div>
                  <p>{statusMessage}</p>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="mt-1 inline-flex items-center gap-1 text-[#89AACC] underline font-medium"
                  >
                    Send email to {personalData.email} <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
