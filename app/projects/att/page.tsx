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
        heroImage="/images/ATT/ATT_Hero.webp"
        heroAlt="AT&T Hero Image"
        heroTitle="AT&T"
        heroSubtitle={
        <>
          AT&T is one of the worlds largest communications companies, providing a range of services from phone, internet, cable, VPN, and many more. Our involvement with AT&T began when <em><strong>Boston Consulting Group (BCG)</strong></em> approached us to team up with them on their <em><strong>Order Accelerator</strong></em> project, centered around improving the process of ordering AT&T VPN services.
        </>
        }
        heroBackground="bg-[#444F5F]"
        largeScreen="md:w-3/4"
      />
      <main className="mx-5 md:mx-55 pb-8 mb-15">

      </main>
    </>
  );
}
