"use client";

import { useEffect, useState } from "react";

export function IntroOverlay() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;
    const onScroll = () => {
      const h = window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / h));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted, isMobile]);

  if (!mounted || isMobile) return null;

  const opacity = Math.max(0, 1 - progress * 1.3);
  const scale = 1 - progress * 0.08;

  return (
    <section className="relative h-screen" aria-label="Intro">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0b1e4d] via-[#1e3a8a] to-[#3b1d6b] overflow-hidden">
        <div className="intro-blob absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-400/20 blur-3xl animate-blob" />
        <div className="intro-blob absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="intro-blob absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl animate-blob animation-delay-4000" />

        <div
          className="relative text-center px-6"
          style={{ opacity, transform: `scale(${scale})` }}
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white animate-fade-up">
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
          <p className="mt-8 text-white/70 text-sm uppercase tracking-[0.3em] animate-fade-up animation-delay-500">
            Scroll to continue
          </p>
          <div className="mt-6 flex justify-center animate-bounce-slow">
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
    </section>
  );
}
