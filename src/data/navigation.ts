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
      { label: "Objectives & Components", desc: "The program's goals and three phases", href: "/#phases" },
      { label: "Governance & Implementation", desc: "Who oversees the program and how it runs", href: "/#governance" },
    ],
  },
  {
    label: "Implementing Partners",
    items: [
      { label: "IGAD", desc: "Intergovernmental Authority on Development", href: "/#partners-igad" },
      { label: "ECSA", desc: "East, Central and Southern Africa Health Community", href: "/#partners-ecsa" },
    ],
  },
  { label: "Participating Countries", href: "/participating-countries" },
  {
    label: "Communities of Practice",
    items: [
      { label: "All communities", desc: "Overview of every community of practice", href: "/#communities" },
      { label: "Community pages", desc: "Members, discussions and resources", href: "/#communities-pages" },
      { label: "Join a Community", desc: "Sign up to take part", href: "/#communities-join", action: true },
    ],
  },
  {
    label: "News & Blogs",
    items: [
      { label: "News", desc: "Program announcements and updates", href: "/news" },
      { label: "Blogs", desc: "Perspectives from partners and experts", href: "/news" },
      { label: "Events", desc: "Upcoming meetings, trainings and webinars", href: "/#events" },
    ],
  },
];
