"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Activity } from "lucide-react";
import { SITE } from "@/data/site";

/** The HEPRRP logo. Falls back to a navy badge if the file is missing from public/. */
export function LogoImage({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        role="img"
        aria-label={SITE.logo.alt}
        className={`logo-fallback flex flex-col items-center justify-center rounded-md bg-navy text-white ${className}`}
      >
        <Activity size={26} strokeWidth={2.25} />
        <span className="logo-fallback-text mt-1 font-extrabold tracking-tight">{SITE.name}</span>
      </span>
    );
  }

  return (
    <Image
      src={SITE.logo.src}
      alt={SITE.logo.alt}
      width={SITE.logo.width}
      height={SITE.logo.height}
      priority={priority}
      className={`object-contain ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

/** Navbar brand: logo, divider and the program name, linking home. */
export function NavLogo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link href="/" onClick={onNavigate} className="flex shrink-0 items-center gap-3 sm:gap-4" aria-label={`${SITE.name} home`}>
      <LogoImage priority className="logo-img block" />
      <span className="hidden h-14 w-px bg-line sm:block" aria-hidden="true" />
      <span className="text-xl font-extrabold tracking-tight text-navy sm:hidden">{SITE.name}</span>
      <span className="hidden border-b-2 border-brand pb-1 leading-tight sm:block">
        <span className="block text-lg font-extrabold text-navy md:text-2xl">Health Emergency Preparedness,</span>
        <span className="block text-base font-medium text-brand-dark md:text-lg">Response and Resilience Program</span>
      </span>
    </Link>
  );
}
