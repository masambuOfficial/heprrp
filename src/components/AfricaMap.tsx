"use client";

import { useRef, useState } from "react";
import FlagStrip from "@/components/FlagStrip";
import { AFRICA_SHAPES, MAP_VIEWBOX } from "@/data/africa-map";
import { COHORT_LABEL, getCountry, partnerLabel } from "@/data/countries";

// Countries too small to tap reliably get an enlarged invisible hit area; island states also get a visible marker
const SMALL: Record<string, number> = { rwanda: 14, burundi: 14, "sao-tome": 18 };
const MARKER: Record<string, { label: string; dx: number; anchor: "start" | "end" }> = {
  "sao-tome": { label: "São Tomé and Príncipe", dx: -12, anchor: "end" },
};

const [VB_X, VB_Y, VB_W, VB_H] = MAP_VIEWBOX.split(" ").map(Number);
const OTHERS = AFRICA_SHAPES.filter((s) => s.length === 1);
const PARTICIPATING = AFRICA_SHAPES.filter((s): s is readonly [string, string, number, number] => s.length === 4);

type InteractiveProps = {
  compact?: false;
  active: string | null;
  setActive: (slug: string | null) => void;
  onOpen: (slug: string) => void;
};
type CompactProps = { compact: true; highlight: string };

/** Interactive map of Africa, or a small static locator map when `compact`. */
export default function AfricaMap(props: InteractiveProps | CompactProps) {
  const lastPointer = useRef("mouse");
  const [pointerType, setPointerType] = useState("mouse");

  if (props.compact) {
    const country = getCountry(props.highlight);
    const marker = PARTICIPATING.find((s) => s[1] === props.highlight);
    return (
      <svg viewBox={MAP_VIEWBOX} className="block h-auto w-full" role="img" aria-label={`Location of ${country?.name ?? "country"} in Africa`}>
        {OTHERS.map((s, i) => <path key={i} d={s[0]} className="map-land" />)}
        {PARTICIPATING.map(([d, slug]) => (
          <path key={slug} d={d} className="map-country" style={{ fill: slug === props.highlight ? getCountry(slug)?.color : "#8FA3B6" }} />
        ))}
        {marker && MARKER[props.highlight] && <circle cx={marker[2]} cy={marker[3]} r="7" className="map-dot" style={{ fill: country?.color }} />}
      </svg>
    );
  }

  const { active, setActive, onOpen } = props;
  const ordered = [...PARTICIPATING].sort((a, b) => (a[1] === active ? 1 : 0) - (b[1] === active ? 1 : 0));
  const current = active ? getCountry(active) : undefined;
  const shape = active ? PARTICIPATING.find((s) => s[1] === active) : undefined;

  // Mouse: click opens the page. Touch/pen: first tap shows the card, second tap (or "Read more") opens.
  const handleClick = (slug: string) => {
    if (lastPointer.current !== "mouse" && active !== slug) {
      setActive(slug);
      return;
    }
    onOpen(slug);
  };

  let tip: React.ReactNode = null;
  if (current && shape) {
    const x = ((shape[2] - VB_X) / VB_W) * 100;
    const y = ((shape[3] - VB_Y) / VB_H) * 100;
    const shiftX = x > 64 ? "-88%" : x < 34 ? "-12%" : "-50%";
    const below = y < 22;
    tip = (
      <div
        role="status"
        className="map-tip absolute z-10 w-60 rounded-lg border border-line bg-white p-4 shadow-xl"
        style={{
          pointerEvents: pointerType === "mouse" ? "none" : "auto",
          left: `${x}%`,
          top: `${y}%`,
          transform: `translate(${shiftX}, ${below ? "18px" : "calc(-100% - 18px)"})`,
        }}
      >
        <FlagStrip colors={current.flag} className="mb-3 h-1.5" />
        <p className="font-bold leading-tight text-navy">{current.name}</p>
        <dl className="mt-2 space-y-1 text-xs text-muted">
          <div className="flex justify-between gap-3">
            <dt>Joined</dt>
            <dd className="font-semibold text-navy">{COHORT_LABEL[current.cohort]}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt>Coordinated through</dt>
            <dd className="font-semibold text-navy">{partnerLabel(current)}</dd>
          </div>
        </dl>
        {pointerType === "mouse" ? (
          <p className="mt-3 border-t border-line pt-3 text-xs font-semibold text-brand">Click the country to read more</p>
        ) : (
          <button onClick={() => onOpen(current.slug)} className="btn-brand mt-3 w-full rounded-md py-2.5 text-sm font-semibold">
            Read more
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <svg viewBox={MAP_VIEWBOX} className="block h-auto w-full" role="group" aria-label="Map of Africa showing HEPRRP participating countries">
        <g onClick={() => setActive(null)}>
          {OTHERS.map((s, i) => <path key={i} d={s[0]} className="map-land" />)}
        </g>
        {ordered.map(([d, slug, cx, cy]) => {
          const c = getCountry(slug);
          if (!c) return null;
          const isActive = active === slug;
          const cls = `map-country ${isActive ? "is-active" : ""} ${active && !isActive ? "is-faded" : ""}`;
          return (
            <g
              key={slug}
              role="link"
              tabIndex={0}
              aria-label={`${c.name}: ${COHORT_LABEL[c.cohort]}, coordinated through ${partnerLabel(c)}. Open country page.`}
              className="map-hit"
              onPointerDown={(e) => {
                lastPointer.current = e.pointerType;
                setPointerType(e.pointerType);
              }}
              onPointerEnter={(e) => e.pointerType === "mouse" && setActive(slug)}
              onPointerLeave={(e) => e.pointerType === "mouse" && setActive(null)}
              onFocus={() => setActive(slug)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpen(slug);
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleClick(slug);
              }}
            >
              <path d={d} className={cls} style={{ fill: c.color }} />
              {SMALL[slug] && <circle cx={cx} cy={cy} r={SMALL[slug]} fill="transparent" />}
              {MARKER[slug] && (
                <g className="pointer-events-none">
                  <circle cx={cx} cy={cy} r="9" className="map-pulse" style={{ stroke: c.color }} />
                  <circle cx={cx} cy={cy} r={isActive ? 6 : 4.5} className="map-dot" style={{ fill: c.color }} />
                  <text x={cx + MARKER[slug].dx} y={cy + 4} textAnchor={MARKER[slug].anchor} className="map-label">
                    {MARKER[slug].label}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
      {tip}
    </div>
  );
}
