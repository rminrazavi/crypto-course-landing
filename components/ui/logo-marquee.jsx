"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function LogoMarquee({ logos = [], className }) {
  if (!logos || logos.length === 0) return null;

  // Duplicate logos to fill space and create seamless scroll
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className={cn("relative w-full overflow-hidden py-6", className)}>
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Scroll container */}
      <div className="flex animate-marquee gap-12 min-w-max">
        {repeatedLogos.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 text-lg md:text-xl font-semibold text-muted-foreground opacity-80"
          >
            {logo}
          </div>
        ))}
      </div>

      {/* CSS for seamless scroll */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          min-width: max-content;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
