"use client";

import { useEffect, useLayoutEffect, useState } from "react";

export function IntroOverlay() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setDismissed(true);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  // After unmount: instantly snap to the top of main content (scrollY=0).
  // Overriding scroll-behavior kills the smooth-scroll swoop that would
  // otherwise animate the page from wherever momentum carried the user.
  useLayoutEffect(() => {
    if (!dismissed) return;
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      html.style.scrollBehavior = prev;
    });
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <section
      aria-label="Intro"
      className="hidden md:flex relative h-screen w-full items-center justify-center bg-gradient-to-b from-[#0b1e4d] via-[#1e3a8a] to-[#6b21a8] overflow-hidden"
    >
      <div className="intro-blob absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-400/20 blur-3xl animate-blob" />
      <div className="intro-blob absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="intro-blob absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl animate-blob animation-delay-4000" />

      <div className="relative text-center px-6">
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
    </section>
  );
}
