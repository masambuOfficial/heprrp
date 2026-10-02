export type ProgramEvent = {
  day: string;
  month: string;
  year: string;
  type: string;
  title: string;
  place: string;
  time: string;
  href: string;
};

// Sample events. Replace with real ones from the client.
export const EVENTS: ProgramEvent[] = [
  { day: "22", month: "Oct", year: "2026", type: "Webinar", title: "Climate and Health Community of Practice: quarterly webinar", place: "Online", time: "14:00 to 15:30 EAT", href: "/#events" },
  { day: "11", month: "Nov", year: "2026", type: "Workshop", title: "Regional workshop on integrating human, animal and environmental surveillance", place: "Addis Ababa, Ethiopia", time: "11 to 13 November", href: "/#events" },
  { day: "02", month: "Dec", year: "2026", type: "Meeting", title: "4th Regional Advisory Committee meeting", place: "Venue to be announced", time: "2 to 4 December", href: "/#events" },
];
