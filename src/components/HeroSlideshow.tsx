"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import SlideArt from "@/components/SlideArt";
import { HERO_ARTICLES, NEWS_PAGE, SLIDE_MS, articleHref, formatDate } from "@/data/articles";

const ROUND_BTN =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-10";

export default function HeroSlideshow() {
  const n = HERO_ARTICLES.length;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const touchX = useRef<number | null>(null);

  // Respect reduced-motion settings: start paused
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  const go = (i: number) => setIndex((i + n) % n);
  const running = playing && !hovered && !focused;

  return (
    <section
      className="relative overflow-hidden bg-navy text-white"
      aria-roledescription="carousel"
      aria-label="Latest from the program"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false);
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {/* Slide backgrounds */}
      {HERO_ARTICLES.map((s, i) => (
        <div key={i} className={`slide-bg ${i === index ? "is-active" : ""}`} aria-hidden="true">
          {s.image ? (
            <Image src={s.image} alt="" fill priority={i === 0} sizes="100vw" className="slide-art object-cover" />
          ) : (
            <div className="slide-art absolute inset-0">
              <SlideArt variant={s.art} />
            </div>
          )}
        </div>
      ))}
      <div className="slide-scrim absolute inset-0" aria-hidden="true" />

      <div className="clear-logo hero-pad relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative" style={{ minHeight: "19rem" }}>
          {HERO_ARTICLES.map((s, i) => (
            <article
              key={i}
              className={`slide-copy max-w-2xl ${i === index ? "is-active" : ""}`}
              aria-hidden={i !== index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}`}
            >
              <p className="mb-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded bg-brand px-2.5 py-1 font-semibold text-white">{s.category}</span>
                <time dateTime={s.date} className="text-gray-300">{formatDate(s.date)}</time>
              </p>
              <h2 className="display mb-5 text-3xl leading-tight sm:text-5xl">{s.title}</h2>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">{s.excerpt}</p>
              <div className="flex flex-wrap gap-3">
                <Link href={articleHref(s)} tabIndex={i === index ? 0 : -1} className="btn-brand inline-flex items-center rounded-md px-5 py-3 font-semibold">
                  Read the story
                </Link>
                <Link
                  href={NEWS_PAGE.href}
                  tabIndex={i === index ? 0 : -1}
                  className="inline-flex items-center rounded-md border border-white border-opacity-30 px-5 py-3 font-semibold hover:bg-white hover:bg-opacity-10"
                >
                  All news &amp; blogs
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center gap-3 sm:gap-4">
          <button onClick={() => go(index - 1)} aria-label="Previous story" className={ROUND_BTN}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => go(index + 1)} aria-label="Next story" className={ROUND_BTN}>
            <ChevronRight size={18} />
          </button>
          <div className="flex max-w-xs flex-1 items-center gap-2" role="tablist" aria-label="Choose a story">
            {HERO_ARTICLES.map((s, i) => (
              <button key={i} role="tab" aria-selected={i === index} aria-label={`Story ${i + 1}: ${s.title}`} onClick={() => go(i)} className="flex-1 py-3">
                <span className="block h-1 overflow-hidden rounded-full bg-white bg-opacity-25">
                  <span
                    key={`${index}-${i}`}
                    className={`block h-full rounded-full bg-white ${i === index && playing ? "slide-progress" : ""}`}
                    style={
                      i === index
                        ? playing
                          ? { animationDuration: `${SLIDE_MS}ms`, animationPlayState: running ? "running" : "paused" }
                          : { width: "100%" }
                        : { width: i < index ? "100%" : "0%" }
                    }
                    onAnimationEnd={() => i === index && go(index + 1)}
                  />
                </span>
              </button>
            ))}
          </div>
          <span className="hidden text-sm tabular-nums text-gray-300 sm:inline">
            {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
          <button onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause slideshow" : "Play slideshow"} className={ROUND_BTN}>
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
        <p className="sr-only" aria-live={running ? "off" : "polite"}>
          {`Story ${index + 1} of ${n}: ${HERO_ARTICLES[index].title}`}
        </p>
      </div>
    </section>
  );
}
