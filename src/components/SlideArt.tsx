import { AFRICA_SHAPES, MAP_VIEWBOX } from "@/data/africa-map";
import { getCountry } from "@/data/countries";
import type { Article } from "@/data/articles";

/** Placeholder artwork for slides without a photo. */
export default function SlideArt({ variant }: { variant: Article["art"] }) {
  const fill = { position: "absolute", inset: 0, width: "100%", height: "100%" } as const;

  if (variant === "map") {
    return (
      <svg viewBox={MAP_VIEWBOX} preserveAspectRatio="xMaxYMid meet" style={{ ...fill, left: "auto", right: "-4%", width: "70%" }} aria-hidden="true">
        {AFRICA_SHAPES.map((s, i) => {
          const country = s.length === 4 ? getCountry(s[1]) : undefined;
          return (
            <path key={i} d={s[0]} fill={country ? country.color : "#FFFFFF"} fillOpacity={country ? 0.8 : 0.07}
              stroke="#0A2342" strokeOpacity="0.5" strokeWidth="0.8" />
          );
        })}
      </svg>
    );
  }

  if (variant === "rings") {
    const nodes: [number, number][] = [[620, 230], [520, 130], [730, 110], [700, 380], [470, 330], [560, 440]];
    return (
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMaxYMid slice" style={fill} aria-hidden="true">
        {[60, 110, 160, 210, 260, 310, 360].map((r, i) => (
          <circle key={r} cx="620" cy="230" r={r} fill="none" stroke="#6CC3BE" strokeOpacity={0.5 - i * 0.06} strokeWidth="1.5" />
        ))}
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <line x1="620" y1="230" x2={x} y2={y} stroke="#6CC3BE" strokeOpacity="0.35" />
            <circle cx={x} cy={y} r={i ? 7 : 14} fill="#0F8B8D" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="2" />
          </g>
        ))}
      </svg>
    );
  }

  if (variant === "waves") {
    return (
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMaxYMid slice" style={fill} aria-hidden="true">
        {Array.from({ length: 14 }, (_, i) => (
          <path key={i}
            d={`M300 ${120 + i * 26} C 420 ${60 + i * 26}, 520 ${190 + i * 26}, 640 ${110 + i * 26} S 820 ${140 + i * 26}, 900 ${100 + i * 26}`}
            fill="none" stroke={i % 3 === 0 ? "#F2B705" : "#6CC3BE"} strokeOpacity={0.15 + (i % 4) * 0.08} strokeWidth="2" />
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMaxYMid slice" style={fill} aria-hidden="true">
      {Array.from({ length: 12 }, (_, r) =>
        Array.from({ length: 16 }, (__, c) => {
          const on = (r * 7 + c * 3) % 11 === 0;
          return <circle key={`${r}-${c}`} cx={380 + c * 28} cy={40 + r * 38} r={on ? 5 : 2} fill={on ? "#6CC3BE" : "#FFFFFF"} fillOpacity={on ? 0.9 : 0.18} />;
        }),
      )}
    </svg>
  );
}
