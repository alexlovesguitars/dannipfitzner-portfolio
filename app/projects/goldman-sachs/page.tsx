import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ImageGrid from "@/components/sections/ImageGrid";
import NumberedList from "@/components/sections/NumberedList";
import ContentSection from "@/components/sections/ContentSection";
import CaseStudy from "@/components/sections/CaseStudies";
import CreditSection from "@/components/sections/CreditSection";

export default function GoldmanSachs() {
  return (
    <>
      <HeroSection
        content={{
          image: {
            src: "/images/GoldmanSachs/GS_Hero.webp",
            alt: "Goldman Sachs Hero Image"
          },
          imageWidth: "md:w-full",
          background: "bg-[#60C8FC]",
          title: "Goldman Sachs",
          subtitle:
            <>
              The Goldman Sachs Group, Inc. is a leading global firm offering a range of financial services focused on investment banking and management. In 2015, Goldman Sachs acquired small financial savings company <em><strong>Honest Dollar,</strong></em> in hopes to appeal to a larger audience and expand their product offerings. Honest Dollar is a retirement savings platform dedicated to increasing access to retirement savings accounts for the independent contractor market. Launched in 2015, right before the acquisition, the Honest Dollar product aimed to provide users a trustworthy platform to feel in control of their savings.
            </>
        }}
      />
      <main className="mx-5 md:mx-40 pb-8 mb-15">

      </main>
    </>
  );
}
