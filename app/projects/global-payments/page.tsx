import HeroSection from "@/components/sections/HeroSection";
import ImageGrid from "@/components/sections/ImageGrid";
import NumberedList from "@/components/sections/NumberedList";
import ContentSection from "@/components/sections/ContentSection";

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
        marginImage="px-3"
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
        <ContentSection
        border={true}
        title="THE DASHBOARD"
        subtitle="A concise home-base"
        verticalMargin="mb-0"
        marginImage="md:mt-15"
        col1={[
          { kind: "body", text:
          <>
            The Dashboard has been designed to accommodate for large amounts of data with the user in mind. The visual design uses simple and clean data visualization to allow the user to efficiently scan and interpret the roll-up of information that is pulled from various sections of the product.
          </>
          },
          { kind: "blockImage", image:
            {
              src: "/images/GlobalPayments/assets/img_Folio_GP_Dashboard_Desktop.webp",
              alt: "Dashboard Desktop",

            },
            margin: "md:mt-5"
          }
        ]}
        image={{
          src: "/images/GlobalPayments/assets/img_Folio_GP_Dashboard_Mobile.webp",
          alt: "Dashboard Mobile",

        }}
        />

        <ContentSection
        border={true}
        title="WIDGETS"
        subtitle="Data you can digest"
        verticalMargin="mb-0"
        marginImage="md:mt-15"
        fullSpanMarginImage="px-35"
        col1={[
          { kind: "body", text:
          <>
            Each widget corresponds with in depth data and information, such as transaction history, and various reports. By surfacing widgets on the dashboard, the user can get a glance of their overall performance at a high level. With access to this data in graphical form, users have the ability to view trends either straight from the dashboard, or by diving deeper into the sections themselves.
          </>
          },
          { kind: "blockImage", image:
            {
              src: "/images/GlobalPayments/assets/GP_GIF_Transactions_v2.gif",
              alt: "Transactions",

            },
            margin: "my-auto mx-10"
          }
        ]}
        image={{
          src: "/images/GlobalPayments/assets/img_Folio_GP_Widget_Disputes.webp",
          alt: "Widgets"
        }}
        fullSpanImage={{src: "/images/GlobalPayments/assets/GP_GIF_Widgets.gif", alt: "Desktop Widgets"}}
        />

        <ContentSection
        border={true}
        marginImage="mt-10"
        fullSpanImage={{src: "/images/GlobalPayments/assets/img_Folio_GP_Reports_Transactions.webp", alt: "Reports & Transactions"}}
        />

        <ContentSection
        border={true}
        title="HELP CENTER"
        subtitle="Here to help"
        marginImage="p-10"
        col1={[
          {kind: "body", text:
            <>
              The Help Center is there at every step, surfacing popular articles, frequently asked questions, and various updates. Additionally, it prompts the user to chat with a support agent if more assistance is needed. The visual design accounts for a BusinessView branded experience and introduces imagery and illustrations to further market the product.
            </>
          }
        ]}
        col2={[
          {kind: "blockImage", image: {src: "/images/GlobalPayments/assets/img_Folio_GP_Help_Mobile.webp", alt: "Mobile Help Center"}}
        ]}
        fullSpanImage={{src: "/images/GlobalPayments/assets/img_Folio_GP_Help.webp", alt: "Desktop Help Center"}}
        />

        <ContentSection
        border={false}
        title="HAND-OFF"
        subtitle="Setting up for success"
        col1={[
          {kind: "body", text:
            <>
              <>As our 11 week collaborative phase came to a close, we delivered materials to their internal design teams to set them up for success. We delivered the visual screen templates and crafted a UI kit and style guide to serve as guideposts for the visual language of Global Payments&apos; suite of products. </>,
              <br />
              <br />
              <><a href="/pdf/GP_BusinessView_StyleGuide.pdf" className="text-black underline font-bold hover:text-gray-500 transition-colors ease-in-out" target="_blank"><strong>View Style Guide</strong></a></>
            </>
          }
        ]}
        />

      </main>
      <div className="bg-gray-50 w-full">
        <main className="mx-5 md:mx-55 pb-8 mb-15">

        <ContentSection
        fullSpanMarginImage="p-25"
        fullSpanImage={{src: "/images/GlobalPayments/assets/img_GP_UIKit.webp", alt: "UI KIT"}}
        />

        </main>
      </div>



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
