"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { LogoImage } from "@/components/Logo";
import { SITE } from "@/data/site";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Program",
    links: [
      { label: "About HEPRRP", href: "/#about" },
      { label: "The MPA model", href: "/#phases" },
      { label: "Participating countries", href: "/participating-countries" },
      { label: "Governance", href: "/#governance" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Reports and publications", href: "/#resources" },
      { label: "Procurement notices", href: "/#procurement" },
      { label: "Knowledge Portal", href: SITE.knowledgePortalUrl },
      { label: "Media kit", href: "/#media" },
    ],
  },
  {
    heading: "Accountability",
    links: [
      { label: "Grievance redress", href: "/#grievance" },
      { label: "Safeguards", href: "/#safeguards" },
      { label: "Access to information", href: "/#access-to-information" },
      { label: "Fraud and corruption", href: "/#fraud-and-corruption" },
    ],
  },
];

const LEGAL = ["Privacy policy", "Terms of use", "Cookie settings", "Accessibility"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer id="contact" className="bg-navy text-gray-300">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 border-b border-white border-opacity-10 pb-12 lg:grid-cols-5">
          <div className="col-span-2">
            <div className="mb-4 flex items-center gap-4">
              <span className="inline-block shrink-0 bg-white p-2">
                <LogoImage className="footer-logo block" />
              </span>
              <p className="leading-tight">
                <span className="block text-lg font-extrabold text-white">Health Emergency Preparedness,</span>
                <span className="block text-base font-medium text-brand-mist">Response and Resilience Program</span>
              </p>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed">
              Regional coordination office, Program Secretariat. Contact the team for partnership, media and technical enquiries.
            </p>
            {subscribed ? (
              <p className="flex items-center gap-2 text-sm text-brand-mist">
                <CheckCircle2 size={16} /> Subscribed. Quarterly updates will go to {email}.
              </p>
            ) : (
              <form
                className="flex max-w-sm flex-col gap-2 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Connect this to your mailing-list provider
                  if (email.includes("@")) setSubscribed(true);
                }}
              >
                <label htmlFor="newsletter" className="sr-only">Email address</label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 rounded-md border border-white border-opacity-20 bg-white bg-opacity-10 px-3 py-2.5 text-sm text-white placeholder-gray-400"
                />
                <button type="submit" className="btn-brand inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold">
                  <Mail size={16} /> Subscribe
                </button>
              </form>
            )}
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 font-semibold text-white">{col.heading}</h3>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-4 pt-8 text-xs leading-relaxed text-gray-400">
          <p className="max-w-4xl">
            This program is financed by the World Bank. The content of this site is the responsibility of the program
            implementers and does not necessarily reflect the views of the World Bank, its Board of Executive Directors, or the
            governments they represent. Boundaries, names and designations shown on any map do not imply a judgment on the legal
            status of any territory. Health information published here is for general awareness and is not a substitute for
            guidance from national health authorities.
          </p>
          <div className="flex flex-col justify-between gap-3 sm:flex-row">
            <p>© {new Date().getFullYear()} {SITE.name} Secretariat. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {LEGAL.map((l) => (
                <Link key={l} href={`/#${l.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-white">{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
