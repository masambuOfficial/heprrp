"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LANGUAGES, SOURCE_LANGUAGE } from "@/data/languages";

const COOKIE = "googtrans";

function readLanguage(): string {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=/[^/]*/([^;]+)`));
  const code = match?.[1];
  return code && LANGUAGES.some((l) => l.code === code) ? code : SOURCE_LANGUAGE;
}

function writeLanguage(code: string) {
  const host = window.location.hostname;
  if (code === SOURCE_LANGUAGE) {
    const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = `${COOKIE}=; ${expired}`;
    document.cookie = `${COOKIE}=; ${expired}; domain=${host}`;
  } else {
    const value = `/${SOURCE_LANGUAGE}/${code}`;
    document.cookie = `${COOKIE}=${value}; path=/`;
    document.cookie = `${COOKIE}=${value}; path=/; domain=${host}`;
  }
}

// Google Translate rewrites text nodes, which can make React throw when it later updates them.
// These guards let React carry on if a node it expects has been moved.
function guardDomForTranslation() {
  const proto = Node.prototype as Node & { __guarded?: boolean };
  if (proto.__guarded) return;
  proto.__guarded = true;
  const removeChild = proto.removeChild;
  proto.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return removeChild.call(this, child) as T;
  };
  const insertBefore = proto.insertBefore;
  proto.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return node;
    return insertBefore.call(this, node, ref) as T;
  };
}

function loadGoogleTranslate() {
  if (document.getElementById("google-translate-script")) return;
  guardDomForTranslation();
  (window as unknown as Record<string, unknown>).googleTranslateElementInit = () => {
    const g = (window as unknown as { google: { translate: { TranslateElement: new (o: object, id: string) => void } } }).google;
    new g.translate.TranslateElement(
      {
        pageLanguage: SOURCE_LANGUAGE,
        includedLanguages: LANGUAGES.map((l) => l.code).join(","),
        autoDisplay: false,
      },
      "google_translate_element",
    );
  };
  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
}

export default function LanguageSwitcher() {
  const [current, setCurrent] = useState(SOURCE_LANGUAGE);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Contact Google only once a visitor has chosen a language other than English
  useEffect(() => {
    const code = readLanguage();
    setCurrent(code);
    if (code !== SOURCE_LANGUAGE) loadGoogleTranslate();
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const choose = (code: string) => {
    setOpen(false);
    if (code === current) return;
    writeLanguage(code);
    window.location.reload();
  };

  const active = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative notranslate" translate="no">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
        className="flex items-center gap-1.5 rounded border border-line px-2.5 py-2 text-sm font-semibold text-navy hover:bg-gray-50"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{active.native}</span>
        <span className="uppercase sm:hidden">{active.code.split("-")[0]}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label="Languages"
          className="panel-enter absolute right-0 top-full z-50 mt-1 max-h-80 w-56 overflow-y-auto rounded border border-line bg-white py-1 shadow-lg"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === current}>
              <button
                onClick={() => choose(l.code)}
                lang={l.code}
                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-navy hover:bg-gray-50"
              >
                <span>
                  {l.native}
                  {l.native !== l.name && <span className="ml-2 text-xs text-muted">{l.name}</span>}
                </span>
                {l.code === current && <Check size={14} className="text-brand" />}
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* Mount point required by Google's translation script; kept hidden */}
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}
