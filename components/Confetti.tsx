const COLORS = ["#fbbf24", "#f472b6", "#60a5fa", "#34d399", "#c084fc", "#fb923c", "#ef4444"];

// Pre-computed so pieces are stable between server and client render.
const PIECES = Array.from({ length: 36 }, (_, i) => {
  const left = (i * 97) % 100;
  const delay = ((i * 173) % 500) / 100;
  const duration = 2.8 + ((i * 53) % 22) / 10;
  const color = COLORS[i % COLORS.length];
  const rotation = (i * 37) % 360;
  const width = 5 + (i % 4);
  const height = 8 + ((i * 3) % 6);
  return { left, delay, duration, color, rotation, width, height };
});

export function Confetti() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {PIECES.map((p, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            background: p.color,
            width: p.width,
            height: p.height,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}
