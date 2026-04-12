import type { CSSProperties } from "react";

const COLORS = [
  "#fff",
  "#fef3c7",
  "#fde68a",
  "#f59e0b",
  "#3b82f6",
  "#ec4899",
  "#a855f7",
  "#34d399",
];

const PIECES = Array.from({ length: 24 }, (_, i) => {
  const left = ((i * 100) / 24 + ((i * 13) % 6)).toFixed(1);
  const delay = -(((i * 317) % 500) / 100);
  const duration = 2.6 + ((i * 53) % 18) / 10;
  const color = COLORS[i % COLORS.length];
  const drift = ((i * 29) % 20) - 10;
  const w = 5 + (i % 3);
  const h = 3 + (i % 4);
  const rotEnd = 360 + ((i * 47) % 540);
  return { left, delay, duration, color, drift, w, h, rotEnd };
});

type ConfettiStyle = CSSProperties & {
  "--drift": string;
  "--rot-end": string;
};

export function Confetti() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {PIECES.map((p, i) => {
        const style: ConfettiStyle = {
          left: `${p.left}%`,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`,
          background: p.color,
          width: p.w,
          height: p.h,
          "--drift": `${p.drift}px`,
          "--rot-end": `${p.rotEnd}deg`,
        };
        return <span key={i} className="confetti-piece" style={style} />;
      })}
    </div>
  );
}
