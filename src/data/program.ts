import { ShieldCheck, Siren, Sprout, Users, Building2, Wallet, FlaskConical, type LucideIcon } from "lucide-react";

// All figures here are illustrative placeholders pending official reporting.

export type Phase = {
  id: number;
  name: string;
  icon: LucideIcon;
  window: string;
  summary: string;
  outcomes: string[];
  budget: string;
  countries: number;
};

export const PHASES: Phase[] = [
  {
    id: 1, name: "Preparedness", icon: ShieldCheck, window: "Years 1–3",
    summary: "Build the systems that let countries detect an outbreak early and act on it together.",
    outcomes: [
      "Integrated disease surveillance linked across national borders",
      "Regional laboratory network with shared sample-referral routes",
      "Trained public health emergency workforce in every participating country",
    ],
    budget: "US$ 385M", countries: 4,
  },
  {
    id: 2, name: "Rapid Response", icon: Siren, window: "Years 2–5",
    summary: "Release pre-arranged financing and supplies within days of a declared health emergency.",
    outcomes: [
      "Contingent emergency response components ready to activate",
      "Pre-positioned medical countermeasures and cold-chain logistics",
      "Joint cross-border outbreak investigation teams",
    ],
    budget: "US$ 290M", countries: 7,
  },
  {
    id: 3, name: "Long-term Resilience", icon: Sprout, window: "Years 4–8",
    summary: "Make preparedness a permanent, domestically financed part of each health system.",
    outcomes: [
      "One Health coordination between human, animal and environmental agencies",
      "Sustainable domestic financing for emergency operations centres",
      "Regional centres of excellence for public health training",
    ],
    budget: "US$ 325M", countries: 12,
  },
];

export const PHASE_PROGRESS: { name: string; percent: number }[] = [
  { name: "Preparedness", percent: 82 },
  { name: "Rapid Response", percent: 46 },
  { name: "Long-term Resilience", percent: 12 },
];

export type Metric = { icon: LucideIcon; value: string; unit: string; label: string; progress: number };

export const METRIC_VIEWS: Record<string, { label: string; items: Metric[] }> = {
  program: {
    label: "Whole program",
    items: [
      { icon: Users, value: "212M", unit: "people", label: "Target population covered", progress: 64 },
      { icon: Building2, value: "38", unit: "partners", label: "Regional implementing partners", progress: 79 },
      { icon: Wallet, value: "$412M", unit: "of $1B", label: "Funding disbursed to date", progress: 41 },
      { icon: FlaskConical, value: "27", unit: "labs", label: "Cross-border labs established", progress: 68 },
    ],
  },
  east: {
    label: "Eastern Africa",
    items: [
      { icon: Users, value: "121M", unit: "people", label: "Target population covered", progress: 71 },
      { icon: Building2, value: "21", unit: "partners", label: "Regional implementing partners", progress: 84 },
      { icon: Wallet, value: "$248M", unit: "of $560M", label: "Funding disbursed to date", progress: 44 },
      { icon: FlaskConical, value: "16", unit: "labs", label: "Cross-border labs established", progress: 73 },
    ],
  },
  southern: {
    label: "Southern Africa",
    items: [
      { icon: Users, value: "91M", unit: "people", label: "Target population covered", progress: 55 },
      { icon: Building2, value: "17", unit: "partners", label: "Regional implementing partners", progress: 72 },
      { icon: Wallet, value: "$164M", unit: "of $440M", label: "Funding disbursed to date", progress: 37 },
      { icon: FlaskConical, value: "11", unit: "labs", label: "Cross-border labs established", progress: 61 },
    ],
  },
};

export const RESOURCES: { title: string; meta: string; href: string }[] = [
  { title: "Program appraisal document", meta: "PDF, 4.2 MB", href: "/documents/" },
  { title: "Environmental and social framework", meta: "PDF, 1.8 MB", href: "/documents/" },
  { title: "Annual progress report 2025", meta: "PDF, 6.1 MB", href: "/documents/" },
];
