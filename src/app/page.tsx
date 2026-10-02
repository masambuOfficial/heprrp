import HeroSlideshow from "@/components/HeroSlideshow";
import UpcomingEvents from "@/components/UpcomingEvents";
import AboutIntro from "@/components/AboutIntro";
import Phases from "@/components/Phases";
import Metrics from "@/components/Metrics";

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <UpcomingEvents />
      <AboutIntro />
      <Phases />
      <Metrics />
    </>
  );
}
