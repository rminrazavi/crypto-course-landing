"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function Navbar({ children, className }) {
  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border",
        className
      )}
    >
      {children}
    </header>
  );
}

export function NavBody({ children, className }) {
  return (
    <div
      className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 h-16",
        className
      )}
    >
      {children}
    </div>
  );
}

export function NavItems({ items = [], className }) {
  return (
    <nav className={cn("hidden md:flex gap-8", className)}>
      {items.map((item, i) => (
        <a
          key={i}
          href={item.link}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
