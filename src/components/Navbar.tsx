"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BookOpen, ChevronDown, Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { NavLogo } from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";
import { MENU } from "@/data/navigation";
import { SITE } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close dropdowns on outside click or Escape
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Show the Knowledge Portal button in the pinned bar once the brand row has scrolled away
  useEffect(() => {
    const onScroll = () => setScrolled((headerRef.current?.getBoundingClientRect().bottom ?? 1) <= 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything after navigating
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };
  const isActive = (href: string) => href !== "/" && !href.startsWith("/#") && pathname.startsWith(href);

  return (
    <>
    {/* Scrolls away: top strip and brand row */}
    <header ref={headerRef} className="relative z-[60] bg-white">
      {/* Top strip */}
      <div className="border-b border-line text-xs text-muted">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
          <p className="hidden sm:block">
            <span className="font-semibold text-ink">{SITE.name}</span> · Financed by the World Bank · Eastern, Central and Southern Africa
          </p>
          <SocialLinks className="sm:hidden" />
          <div className="ml-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Brand row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLogo onNavigate={closeAll} />

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={SITE.knowledgePortalUrl}
            className="btn-brand inline-flex items-center gap-1.5 rounded px-3 py-2 text-xs font-bold uppercase tracking-wide sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <BookOpen size={16} /> Knowledge Portal
          </a>
        </div>
      </div>

    </header>

    {/* Stays pinned while scrolling: the menu bar and its mobile panel */}
    <div className="sticky top-0 z-50 shadow-md">
      <div className="bg-brand">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <nav ref={navRef} className="hidden items-center xl:flex" aria-label="Main">
          {MENU.map((m, i) =>
            m.items ? (
              <div key={m.label} className="relative">
                <button
                  onClick={() => setOpenMenu(openMenu === i ? null : i)}
                  aria-expanded={openMenu === i}
                  className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-4 text-[15px] font-bold text-white 2xl:gap-2 2xl:px-5 2xl:py-5 2xl:text-lg ${
                    openMenu === i ? "bg-black/15" : "hover:bg-black/10"
                  }`}
                >
                  {m.label}
                  <ChevronDown size={16} className={`shrink-0 transition-transform ${openMenu === i ? "rotate-180" : ""}`} />
                </button>
                {openMenu === i && (
                  <div className="panel-enter absolute left-0 top-full w-80 bg-[#0D7678] p-2 shadow-lg">
                    {m.items.map((it) => (
                      <Link
                        key={it.label}
                        href={it.href}
                        onClick={closeAll}
                        className={`block px-3 py-2.5 ${it.action ? "mt-1 bg-white/15 hover:bg-white/25" : "hover:bg-black/10"}`}
                      >
                        <span className="block text-sm font-semibold text-white">{it.label}</span>
                        <span className="mt-0.5 block text-xs text-white/80">{it.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={m.label}
                href={m.href}
                aria-current={isActive(m.href) ? "page" : undefined}
                className={`whitespace-nowrap px-3 py-4 text-[15px] font-bold text-white 2xl:px-5 2xl:py-5 2xl:text-lg ${isActive(m.href) ? "bg-black/15" : "hover:bg-black/10"}`}
              >
                {m.label}
              </Link>
            ),
          )}
        </nav>

        <button
          onClick={() => {
            setMobileOpen(!mobileOpen);
              }}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex items-center gap-2 py-4 text-base font-bold text-white xl:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />} Menu
        </button>

        {scrolled && (
          <a
            href={SITE.knowledgePortalUrl}
            className="inline-flex shrink-0 items-center gap-2 self-stretch bg-navy px-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-navy-light"
          >
            <BookOpen size={16} /> Knowledge Portal
          </a>
        )}

        </div>
      </div>

      {/* Mobile menu: accordion */}
      {mobileOpen && (
        <div className="panel-enter clear-logo-panel max-h-[75vh] overflow-y-auto border-t border-line bg-white xl:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-2 sm:px-6" aria-label="Mobile">
            {MENU.map((m, i) =>
              m.items ? (
                <div key={m.label} className="border-b border-line">
                  <button
                    onClick={() => setOpenSection(openSection === i ? null : i)}
                    aria-expanded={openSection === i}
                    className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-navy"
                  >
                    {m.label}
                    <ChevronDown size={18} className={`text-muted transition-transform ${openSection === i ? "rotate-180" : ""}`} />
                  </button>
                  {openSection === i && (
                    <ul className="space-y-1 pb-3 pl-3">
                      {m.items.map((it) => (
                        <li key={it.label}>
                          <Link
                            href={it.href}
                            onClick={closeAll}
                            className={`block py-2 text-sm ${it.action ? "font-semibold text-brand" : "text-gray-700"}`}
                          >
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={m.label}
                  href={m.href}
                  onClick={closeAll}
                  className={`block border-b border-line py-4 text-base font-semibold ${isActive(m.href) ? "text-brand" : "text-navy"}`}
                >
                  {m.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </div>
    </>
  );
}
