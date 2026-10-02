export default function FlagStrip({ colors, className = "" }: { colors: string[]; className?: string }) {
  return (
    <span className={`flex overflow-hidden rounded-sm ring-1 ring-black ring-opacity-10 ${className}`} aria-hidden="true">
      {colors.map((c, i) => (
        <span key={i} className="flex-1" style={{ background: c }} />
      ))}
    </span>
  );
}
