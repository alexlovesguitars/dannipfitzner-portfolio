import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ImageGrid from "@/components/sections/ImageGrid";
import NumberedList from "@/components/sections/NumberedList";
import ContentSection from "@/components/sections/ContentSection";
import CaseStudy from "@/components/sections/CaseStudies";
import CreditSection from "@/components/sections/CreditSection";

export default function Subway() {
  return (
    <>
      <HeroSection
        heroImage="/images/Subway/Subway_Hero.webp"
        heroAlt="Subway Hero Image"
        heroTitle="Subway"
        heroSubtitle={
          <>
            The Subway franchise started in 1965, and throughout the years became the largest fast food restaurant chain in the world with over 40,000 locations. In 2017, Subway aimed to freshen up their look with a rebrand done by <em><strong>Turner Duckworth.</strong></em> Our team at Fjord was tasked with the complete overhaul of the digital application, focused on cleanliness, usability, and new features.
          </>
        }
        largeScreen="md:w-full"
      />
      <main className="mx-5 md:mx-55 pb-8 mb-15">

      </main>
    </>
  );
}
