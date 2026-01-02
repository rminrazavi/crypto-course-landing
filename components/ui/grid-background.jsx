"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function GridBackground({ className }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 h-full w-full",
        className
      )}
    >
      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),
              linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
          bg-[size:40px_40px]
          opacity-20
        "
      />

      {/* Radial fade */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_70%)]
        "
      />
    </div>
  );
}
