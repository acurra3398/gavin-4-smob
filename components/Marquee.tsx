"use client";

import { useEffect, useRef, type ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  /** pixels per second */
  speed?: number;
  className?: string;
};

// JS-driven marquee — bypasses the iOS Safari bug where infinite CSS
// keyframe animations on touch devices can "jump back" or reverse during
// scroll/gesture events.
export function Marquee({ children, speed = 60, className = "" }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      // Track contains two copies of content → width is 2x one copy.
      // We loop when we've shifted one full copy (half the track).
      const loopAt = track.scrollWidth / 2;
      offsetRef.current += speed * dt;
      if (offsetRef.current >= loopAt) {
        offsetRef.current -= loopAt;
      }
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    const onVis = () => {
      // Reset timing when tab regains focus so there's no big jump
      lastTsRef.current = null;
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [speed]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{
          willChange: "transform",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
