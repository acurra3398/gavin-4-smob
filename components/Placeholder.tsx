type PlaceholderProps = {
  label?: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
};

const aspectMap: Record<NonNullable<PlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function Placeholder({
  label = "Image Placeholder",
  className = "",
  aspect = "video",
}: PlaceholderProps) {
  return (
    <div
      className={`${aspectMap[aspect]} w-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-dashed border-slate-400 flex items-center justify-center rounded-lg ${className}`}
    >
      <span className="text-slate-500 font-medium text-sm uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
