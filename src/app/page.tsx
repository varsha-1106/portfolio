import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Education from "@/components/education/Education";
import Journey from "@/components/journey/Journey";
import GithubFeed from "@/components/github/GithubFeed";
import ResumeDownload from "@/components/resume/ResumeDownload";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-primary relative selection:bg-[#4E85BF]/30">
      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Cinematic Dark Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Featured Projects Gallery with Deep-Dive Modals */}
      <Projects />

      {/* Technical Toolkit & Active Growth */}
      <Skills />

      {/* Academic Foundation & Credentials */}
      <Education />

      {/* Real-world Activities, Hackathons & Leadership */}
      <Experience />

      {/* Learning Journey Roadmap & Milestones */}
      <Journey />

      {/* Open-Source GitHub Feed */}
      <GithubFeed />

      {/* Formal Resume Card */}
      <ResumeDownload />

      {/* Contact Section */}
      <Contact />

      {/* Editorial Footer */}
      <Footer />
    </main>
  );
}
