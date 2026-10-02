export type MenuLink = { label: string; desc: string; href: string; action?: boolean };
export type MenuItem =
  | { label: string; href: string; items?: undefined }
  | { label: string; items: MenuLink[]; href?: undefined };

// Links point to homepage anchors until each section gets its own page.
export const MENU: MenuItem[] = [
  {
    label: "About HEPRRP",
    items: [
      { label: "Overview", desc: "What HEPRRP is and why it exists", href: "/#about" },
      { label: "Objectives & Components", desc: "IGAD's three components and what they have achieved", href: "/about/components" },
      { label: "Governance & Implementation", desc: "Who oversees the program and how it runs", href: "/#governance" },
    ],
  },
  {
    label: "Implementing Partners",
    items: [
      { label: "IGAD", desc: "Intergovernmental Authority on Development", href: "/about/igad" },
      { label: "ECSA", desc: "East, Central and Southern Africa Health Community", href: "/#partners-ecsa" },
    ],
  },
  { label: "Participating Countries", href: "/participating-countries" },
  {
    label: "Communities of Practice",
    items: [
      { label: "All communities", desc: "Overview of every community of practice", href: "/communities" },
      { label: "Climate and Health", desc: "Preparing health systems for climate shocks", href: "/communities/climate-and-health" },
      { label: "Local Manufacturing", desc: "Regional vaccine and medicine production", href: "/communities/local-manufacturing" },
      { label: "NCDs and Mental Health", desc: "Noncommunicable diseases in emergency planning", href: "/communities/ncds-and-mental-health" },
      { label: "Workforce Development", desc: "Field epidemiology training programmes", href: "/communities/workforce-development" },
    ],
  },
  {
    label: "News and Events",
    items: [
      { label: "News & Blogs", desc: "Announcements, stories and perspectives", href: "/news" },
      { label: "Events", desc: "Upcoming meetings, trainings and webinars", href: "/#events" },
    ],
  },
];
