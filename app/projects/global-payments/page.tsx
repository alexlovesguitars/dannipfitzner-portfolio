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
        content={{
          image: {
            src: "/images/GlobalPayments/GP_Hero.webp",
            alt: "GP Hero Image"
          },
          imageWidth: "md:w-full",
          title: "Global Payments",
          background: "bg-[#786CA0]",
          subtitle:
          <>
            Global Payments Inc. is a leading provider of payment technology and software solutions delivering technology and services on a global scale. They work to provide a broad range of solutions that allow customers to accept various payment types and operate their businesses more efficiently. Our task was to reimagine their <em><strong>BusinessView</strong></em> tool, a merchant portal that provides online access to transaction and payment information for customers using Global Payments’ payment terminals.
          </>
        }}
      />
      <main className="mx-5 md:mx-55 pb-8 mb-15">

      </main>
    </>
  );
}
