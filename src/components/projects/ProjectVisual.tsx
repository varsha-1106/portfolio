"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface ProjectVisualProps {
  type: "network-graph" | "pose-tracking" | "sensor-radar" | "emergency-alert" | "color-spectrum";
  title: string;
}

const artworkByType: Record<ProjectVisualProps["type"], string> = {
  "network-graph": "/images/projects/criminal-network-analysis.webp",
  "pose-tracking": "/images/projects/physiotherapy-guidance-rehab.webp",
  "sensor-radar": "/images/projects/smart-safety-footwear.webp",
  "emergency-alert": "/images/projects/criminal-network-analysis.webp",
  "color-spectrum": "/images/projects/colour-name-recognizer.webp",
};

export default function ProjectVisual({ type, title }: ProjectVisualProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-52 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D]"
    >
      <motion.div
        className="absolute -inset-[2%]"
        animate={reduceMotion ? undefined : { y: [0, -4, 0], scale: [1, 1.018, 1] }}
        whileHover={reduceMotion ? undefined : { scale: 1.055 }}
        transition={
          reduceMotion
            ? undefined
            : {
                y: { duration: 5.5, ease: "easeInOut", repeat: Infinity },
                scale: { duration: 7, ease: "easeInOut", repeat: Infinity },
              }
        }
      >
        <Image
          src={artworkByType[type]}
          alt={`${title} in a playful animated brick-toy scene`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={type === "network-graph"}
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.04]"
      />
    </motion.div>
  );
}
