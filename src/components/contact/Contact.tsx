"use client";

import React, { useState } from "react";
import { personalData } from "@/data/personal";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isCopied, setIsCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setError(null);
    setSubmitted(true);

    // Honest fallback: Trigger standard mailto with populated fields
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#89AACC]">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display italic text-primary leading-tight">
            Let&apos;s build something meaningful.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            I&apos;m always interested in learning opportunities, technical collaborations, internships, and conversations around technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Email Card with Copy button */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-white/5 flex flex-col gap-3">
              <span className="text-[11px] font-mono text-muted uppercase tracking-wider">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-base sm:text-lg font-medium text-primary hover:text-[#89AACC] transition-colors truncate"
                >
                  {personalData.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted hover:text-primary transition-colors shrink-0"
                  title="Copy Email Address"
                  aria-label="Copy Email"
                >
                  {isCopied ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {isCopied && (
                <span className="text-[11px] font-mono text-emerald-400">
                  Email copied to clipboard!
                </span>
              )}
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#121212] hover:bg-[#151515] border border-white/5 hover:border-white/15 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-[#89AACC]" />
                  <span className="text-sm font-semibold text-primary">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#121212] hover:bg-[#151515] border border-white/5 hover:border-white/15 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-[#89AACC]" />
                  <span className="text-sm font-semibold text-primary">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Location Pill Card */}
            <div className="p-5 rounded-2xl bg-[#121212] border border-white/5 flex items-center gap-3 text-xs text-muted">
              <MapPin className="w-4 h-4 text-[#89AACC]" />
              <span>{personalData.location}</span>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-display italic text-primary mb-2">
              Send a Message
            </h3>
            <p className="text-xs text-muted mb-6">
              Fill out the form below. It opens your default mail client directly with your message pre-formatted.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-muted mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-white/10 text-primary placeholder-muted/60 text-sm focus:outline-none focus:border-[#89AACC] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-muted mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-white/10 text-primary placeholder-muted/60 text-sm focus:outline-none focus:border-[#89AACC] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-muted mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship / Collaboration / Inquiries"
                  className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-white/10 text-primary placeholder-muted/60 text-sm focus:outline-none focus:border-[#89AACC] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-muted mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the project, internship opportunity, or question..."
                  className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-white/10 text-primary placeholder-muted/60 text-sm focus:outline-none focus:border-[#89AACC] transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-rose-400 font-mono">{error}</p>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-[#0A0A0A] font-semibold text-sm hover:bg-white transition-all shadow-md hover:scale-[1.01]"
              >
                <span>Draft Message</span>
                <Send className="w-4 h-4 text-[#4E85BF]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
