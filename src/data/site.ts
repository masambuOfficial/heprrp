export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const SITE = {
  name: "HEPRRP",
  fullName: "Health Emergency Preparedness, Response and Resilience Program",
  description:
    "A multi-regional program financed by the World Bank that helps countries in Eastern, Central and Southern Africa prepare for, detect and respond to health emergencies together.",
  // Replace with the real Knowledge Portal address when it is live
  knowledgePortalUrl: "#",
  // Replace each "#" with the program's real profile address
  social: [
    { key: "x", label: "X", href: "#" },
    { key: "facebook", label: "Facebook", href: "#" },
    { key: "linkedin", label: "LinkedIn", href: "#" },
    { key: "youtube", label: "YouTube", href: "#" },
  ] as const,
  logo: {
    // Logo lives in public/images/
    src: "/images/HEPRRP_Logo.webp",
    alt: "HEPRRP logo",
    // Portrait asset, 106x117, trimmed to the artwork. Navbar logo size and overhang are set in globals.css.
    width: 106,
    height: 117,
  },
};
