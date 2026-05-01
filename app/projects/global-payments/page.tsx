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
        <ContentSection
        border={false}
        title="OUR GOAL"
        subtitle="A merchant focused solution"
        col1={[
          { kind: "body", text:
            <>
              BusinessView in it’s current state was heavily system-centric. The UI exposed data points created by the system’s handling of the transactions, which resulted in only a series of records and convoluted data. Users who were extremely familiar with the system could piece together a partial view of a transaction by running a series of reports. The process was less than intuitive, and the system lacked a consistent visual language.
              <br />
              <br />
              Our goal was to design a merchant-centric approach, reflecting how humans actually think about transactions – as a digital entity that either positively or negatively impacts their funding levels.
            </>},
          { kind: "subheader", text:
            <>
              BUSINESSVIEW BEORE & AFTER
            </>}
        ]}
        />
        <ImageGrid
        border={true}

        blocks={[
          { kind: "image", image:
            {
              src: "/images/GlobalPayments/assets/img_Folio_GP_BeforeDesigns.webp",
              alt: "Before Designs",
              mode: "lightbox"
            }
          },
          { kind: "image", image:
            {
              src: "/images/GlobalPayments/assets/img_Folio_GP_AfterDesigns.webp",
              alt: "After Designs",
              mode: "lightbox"
            }
          },
        ]}
        />

      </main>


      <main className="mx-5 md:mx-55 pb-8 mb-15">
        <NumberedList
        spacing="space-y-1"
        blocks={[
          { kind: "title", text: "TEAM" },
          { kind: "numbered", splitAt: 5, items: [
              <><strong>Creative Director: </strong>Isaiah Same</>,
              <><strong>Art Director: </strong>Stephanie Ciccone</>,
              <><strong>Visual Designer & Illustrator: </strong>Danni Pfitzner</>,
              <><strong>UX Designers: </strong>Ansa Antonishen, Brit Clapper, Steven Smith, & Tony Matejek</>,
              <><strong>Motion Designer: </strong>Tanya Arendale</>,
              <><strong>Studio: </strong>Fjord - Austin, TX</>,
              <><strong>Date: </strong>April 2016 - June 2016</>
            ]}
          ]}
        />
      </main>
    </>
  );
}
