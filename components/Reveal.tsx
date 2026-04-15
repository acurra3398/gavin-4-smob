"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
};

// Use translate3d so iOS Safari keeps the element on the GPU during the
// transition — avoids the "pops in blocky" look.
const initialTransform: Record<NonNullable<RevealProps["direction"]>, string> = {
  up: "translate3d(0, 40px, 0)",
  left: "translate3d(-40px, 0, 0)",
  right: "translate3d(40px, 0, 0)",
  scale: "translate3d(0, 0, 0) scale(0.92)",
};

const visibleTransform = "translate3d(0, 0, 0) scale(1)";

export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [centered, setCentered] = useState(false);

  // First reveal: one-shot, low threshold so it triggers early on mobile.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // "Centered in viewport" tracker — used on mobile to simulate hover
  // effects (hover-lift, tilt, etc.) when the element reaches the middle.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const centerObserver = new IntersectionObserver(
      ([entry]) => setCentered(entry.isIntersecting),
      {
        // Trigger when the element is within the middle 40% of the viewport
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0,
      },
    );
    centerObserver.observe(el);
    return () => centerObserver.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-in-view={centered ? "true" : undefined}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? visibleTransform : initialTransform[direction],
        transition: `opacity var(--reveal-duration, 0.9s) ease-out ${delay}ms, transform var(--reveal-duration, 0.9s) cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        // Keep willChange steady so Safari doesn't drop the GPU layer mid-anim
        willChange: "opacity, transform",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
}
