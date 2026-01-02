"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { IconCube, IconWorld, IconTrendingUp } from "@tabler/icons-react";

export function CardHoverEffect({ items = [], className }) {
  const icons = [
    <IconCube size={28} />,
    <IconWorld size={28} />,
    <IconTrendingUp size={28} />,
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8", className)}>
      {items.map((item, index) => (
        <div
          className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3"
          key={item.title}
        >
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="p-6 h-full transition-transform hover:-translate-y-1">
            {/* Icon */}
            <div
              className="
                mb-4 inline-flex items-center justify-center
                w-12 h-12 rounded-xl
                bg-primary/10 text-primary
              "
            >
              {icons[index]}
            </div>

            <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

            <p className="text-sm text-muted-foreground mb-4">
              {item.description}
            </p>

            <ul className="space-y-2 text-sm">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <span className="text-primary">✦</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
