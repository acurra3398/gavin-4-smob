import type { CSSProperties } from "react";

const COLORS = ["#fbbf24", "#f472b6", "#60a5fa", "#34d399", "#c084fc", "#fb923c", "#ef4444"];

// Pre-computed so pieces are stable between server and client render.
const PIECES = Array.from({ length: 36 }, (_, i) => {
  const left = (i * 97) % 100;
  const delay = ((i * 173) % 500) / 100;
  const duration = 2.8 + ((i * 53) % 22) / 10;
  const color = COLORS[i % COLORS.length];
  const rotStart = (i * 37) % 360;
  const rotEnd = rotStart + 540 + ((i * 13) % 360);
  const drift = ((i * 11) % 30) - 15;
  const width = 5 + (i % 4);
  const height = 8 + ((i * 3) % 6);
  return { left, delay, duration, color, rotStart, rotEnd, drift, width, height };
});

type ConfettiStyle = CSSProperties & {
  "--rot-start": string;
  "--rot-end": string;
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
          width: p.width,
          height: p.height,
          "--rot-start": `${p.rotStart}deg`,
          "--rot-end": `${p.rotEnd}deg`,
          "--drift": `${p.drift}px`,
        };
        return <span key={i} className="confetti-piece" style={style} />;
      })}
    </div>
  );
}
