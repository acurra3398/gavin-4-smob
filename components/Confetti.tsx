import type { CSSProperties } from "react";

const COLORS = [
  "#ffffff",
  "#fef3c7",
  "#fde68a",
  "#f59e0b",
  "#1e3a8a",
  "#3b82f6",
  "#ec4899",
];

// Pre-computed so pieces are stable between server and client render.
const PIECES = Array.from({ length: 28 }, (_, i) => {
  const left = (i * 100) / 28 + ((i * 17) % 7) / 2;
  const delay = -((i * 263) % 400) / 100;
  const duration = 3.2 + ((i * 53) % 20) / 10;
  const color = COLORS[i % COLORS.length];
  const drift = (((i * 29) % 24) - 12).toString();
  const size = 4 + (i % 3);
  return { left, delay, duration, color, drift, size };
});

type ConfettiStyle = CSSProperties & {
  "--drift": string;
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
          width: p.size,
          height: p.size + 4,
          "--drift": `${p.drift}px`,
        };
        return <span key={i} className="confetti-piece" style={style} />;
      })}
    </div>
  );
}
