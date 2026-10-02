import Link from "next/link";
import { ChevronRight, Clock, MapPin } from "lucide-react";
import { EVENTS } from "@/data/events";

/** Event cards that overlap the bottom of the hero and the section below. */
export default function UpcomingEvents() {
  return (
    <section id="events" className="events-overlap relative z-20" aria-labelledby="events-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 id="events-title" className="text-lg font-bold text-white sm:text-xl">Upcoming events</h2>
          <Link href="/#events" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-mist hover:text-white">
            View all events <ChevronRight size={16} />
          </Link>
        </div>
        <ul className="events-row flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {EVENTS.map((ev) => (
            <li key={ev.title} className="event-card flex w-5/6 shrink-0 snap-start overflow-hidden rounded-lg border border-line bg-white sm:w-3/5 md:w-auto">
              <div className="flex w-20 shrink-0 flex-col items-center justify-center bg-navy py-5 text-white sm:w-24">
                <span className="text-3xl font-extrabold leading-none">{ev.day}</span>
                <span className="mt-1 text-sm font-semibold">{ev.month}</span>
                <span className="text-xs text-gray-400">{ev.year}</span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
                <span className="mb-2 self-start rounded bg-brand-soft px-2 py-0.5 text-xs font-semibold text-brand">{ev.type}</span>
                <h3 className="mb-3 font-bold leading-snug text-navy">{ev.title}</h3>
                <p className="mb-1 flex items-center gap-1.5 text-xs text-muted">
                  <MapPin size={14} className="shrink-0" /> {ev.place}
                </p>
                <p className="flex items-center gap-1.5 text-xs text-muted">
                  <Clock size={14} className="shrink-0" /> {ev.time}
                </p>
                <Link href={ev.href} className="mt-auto pt-4 text-sm font-semibold text-brand hover:text-navy">
                  Event details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
