"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function IntroOverlay() {
  const [progress, setProgress] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [checked, setChecked] = useState(false);
  const offsetRef = useRef(0);
  const touchYRef = useRef<number | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    setChecked(true);
  }, []);

  const advance = useCallback(
    (delta: number) => {
      const next = Math.max(0, offsetRef.current + delta);
      offsetRef.current = next;
      const p = Math.min(1, next / window.innerHeight);
      setProgress(p);
      if (p >= 1) setDismissed(true);
    },
    [],
  );

  useEffect(() => {
    if (dismissed || !checked || isMobile) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const el = overlayRef.current;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      advance(e.deltaY);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchYRef.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchYRef.current == null) return;
      const y = e.touches[0]?.clientY ?? touchYRef.current;
      const delta = (touchYRef.current - y) * 2;
      touchYRef.current = y;
      advance(delta);
    };

    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === " " ||
        e.key === "Enter"
      ) {
        e.preventDefault();
        advance(window.innerHeight);
      }
    };

    // Attach wheel/touch to the overlay element so passive:false works reliably
    el?.addEventListener("wheel", onWheel, { passive: false });
    el?.addEventListener("touchstart", onTouchStart, { passive: true });
    el?.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKey);

    return () => {
      el?.removeEventListener("wheel", onWheel);
      el?.removeEventListener("touchstart", onTouchStart);
      el?.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [dismissed, advance, checked, isMobile]);

  if (dismissed || !checked || isMobile) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden={progress >= 1}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0b1e4d] via-[#1e3a8a] to-[#3b1d6b] overflow-hidden"
      style={{
        touchAction: "none",
        transform: `translate3d(0, ${-progress * 100}vh, 0)`,
        opacity: 1 - progress * 0.5,
        willChange: "transform, opacity",
      }}
      onClick={() => advance(window.innerHeight)}
    >
      {/* Blobs — hidden on mobile via CSS */}
      <div className="intro-blob absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-400/20 blur-3xl animate-blob" />
      <div className="intro-blob absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="intro-blob absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl animate-blob animation-delay-4000" />

      <div
        className="relative text-center px-6"
        style={{ transform: `scale(${1 - progress * 0.08})` }}
      >
        <h1 className="text-4xl md:text-8xl font-black tracking-tight text-white animate-fade-up">
          Your voice
          <span className="mt-1 block">
            <span className="relative inline-block">
              <span className="block bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent animate-shimmer">
                matters.
              </span>
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-amber-400/90"
              />
            </span>
          </span>
        </h1>
        <p className="mt-6 md:mt-8 text-white/70 text-xs md:text-sm uppercase tracking-[0.3em] animate-fade-up animation-delay-500">
          Swipe up or tap to continue
        </p>
        <div className="mt-4 md:mt-6 flex justify-center animate-bounce-slow">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
