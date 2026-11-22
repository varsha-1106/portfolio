"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function MotionRuntime() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-motion-root]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!root || reduceMotion.matches) return;

    const lenis = new Lenis({
      anchors: true,
      lerp: 0.1,
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    const syncScrollTrigger = () => ScrollTrigger.update();
    const tick = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", syncScrollTrigger);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("main > section[id], main > footer", root);

      sections.forEach((section) => {
        if (section.id === "hero") return;

        const content = section.firstElementChild;
        if (!content) return;

        const blocks = Array.from(content.children).filter(
          (element): element is HTMLElement => element instanceof HTMLElement,
        );
        if (!blocks.length) return;

        gsap.fromTo(
          blocks,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-motion-parallax]", root).forEach((element) => {
        const section = element.closest("section") ?? element;
        const speed = Number(element.dataset.motionParallax ?? 0.25);
        gsap.fromTo(
          element,
          { yPercent: speed * 50 },
          {
            yPercent: speed * -50,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      ScrollTrigger.refresh();
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });

    return () => {
      window.removeEventListener("load", refresh);
      context.revert();
      lenis.off("scroll", syncScrollTrigger);
      lenis.destroy();
      gsap.ticker.remove(tick);
      ScrollTrigger.refresh();
    };
  }, []);

  return null;
}

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <MotionRuntime />
      {children}
    </MotionConfig>
  );
}
