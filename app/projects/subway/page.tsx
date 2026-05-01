import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import NumberedList from "@/components/sections/NumberedList";

export default function Subway() {
  return (
    <>
      <HeroSection
        content={{
          image: {
            src: "/images/Subway/Subway_Hero.webp",
            alt: "Subway Hero Image"
          },
          title: "Subway",
          background: "bg-[#07B5D4]",
          subtitle:
          <>
            The Subway franchise started in 1965, and throughout the years became the largest fast food restaurant chain in the world with over 40,000 locations. In 2017, Subway aimed to freshen up their look with a rebrand done by <em><strong>Turner Duckworth.</strong></em> Our team at Fjord was tasked with the complete overhaul of the digital application, focused on cleanliness, usability, and new features.
          </>,
          imageWidth: "md:w-full"

        }}
      />
      <main className="mx-5 md:mx-55 pb-8">
        <ContentSection
        border={true}
        fullspanBody="col-span-full"
        fullSpanMarginImage="md:my-15 my-10"
        title="THE CHALLENGE"
        subtitle="Maintaining relevance"
        col1={[
          { kind: "body", text:
          <>
            With the rise of online ordering apps, restaurant franchises feel the pressure to maintain relevance by offering a convenient, fast and contemporary experience for their customers. When we started this engagement Subway’s overall sales were down 19% and annual mobile sales were less than 1%.
          </>
          }
        ]}
        fullSpanImage={{src: "/images/Subway/assets/Subway_Intro.webp",  alt: "Subway"}}
        />

        <ContentSection
        border={false}
        title="OUR GOALS"
        subtitle="Create a fresh experience"
        col1={[
          { kind: "body", text:
            <>
              We set off with a mission to create an intuitive, personalized and user-focused experience that delights guests and drives increased app usage and mobile orders. With user research and business goals in mind, we established guiding principals to follow throughout the engagement.
            </>
          },
          { kind: "numbered", items: [
            <><strong>01. Keep it simple</strong></>,
            <><strong>02. Cater to the customer</strong></>,
            <><strong>03. Make it delightful</strong></>
          ]}
        ]}
        />
      </main>

      <div className="bg-gray-50 w-full">
        <main className="mx-5 md:mx-55 pb-8">
        <ContentSection
        border={false}
        fullSpanMarginImage="md:my-15 my-10"
        fullSpanImage={{src: "/images/Subway/assets/Subway_Menu_Spread.webp",  alt: "Subway Menu Spread", mode: "lightbox"}}
        title="KEEP IT SIMPLE"
        subtitle="Don't fix what isn't broken"
        col1={[
          { kind: "body", text: "With a franchise as seasoned as Subway, the existing customer base already knows what they want and how they want it. It was important for our team to take this into consideration when redesigning things as integral as the menu. While the new menu categories were structured to support business objectives and push the user to try new recipes, the overall structure continues to reinforce the traditional Subway ordering mental model. The categorization is based on Subway sales data, but as a user becomes more active, the purchasing history will prioritize menu hierarchy."}
        ]}
        />
        </main>
      </div>

      <main className="mx-5 md:mx-55 pb-8 mb-15">
        <ContentSection
        border={true}
        marginImage="mt-8"
        fullSpanMarginImage="mt-15"
        title="CATER TO THE CUSTOMER"
        subtitle="Keep it personal"
        col1={[
          { kind: "body", text: "The experience of ordering at Subway is unique. In the shop, a customer can select a recipe from the menu and customize it to their liking, or build a sandwich completely from scratch. To take this ordering process out of an in person context and into a digital space, meant we had to ensure the experience remained fully personalized and intuitive. The sandwich builder allows the user to remain in control by picking their ingredients, customizing the amount of each and editing with ease."}
        ]}
        image={{src: "/images/Subway/assets/Subway_Builder_Motion.gif", alt: "Sandwich Builder", mode: "lightbox"}}
        fullSpanImage={{src: "/images/Subway/assets/img_Folio_Subway_SandwichBuilder.webp", alt: "Sandwich Builder", mode: "lightbox"}}
        />

        <ContentSection
        border={false}
        marginImage="mt-8"
        fullSpanMarginImage="mt-15"
        title="CATER TO THE CUSTOMER"
        subtitle="Convenience is key"
        col1={[
          { kind: "body", text: "Convenience means speed of service. We found that one of the things guests value about Subway is that they could get in and out quickly. We also found that, although ordering habits vary greatly from customer to customer, many Subway customers are very specific and stable with their preferences. Our goal was to make the the ordering experience in the app just as convenient by allowing the user to save their favorite sandwiches and payment methods."}
        ]}
        image={{src: "/images/Subway/assets/img_Folio_Subway_Payments.gif", alt: "Payment System", mode: "lightbox"}}
        fullSpanImage={{src: "/images/Subway/assets/img_Folio_Subway_Favorites.webp", alt: "Favourites", mode: "lightbox"}}
        />
      </main>

      <div className="bg-gray-50 w-full">
        <main className="mx-5 md:mx-55 pb-8">
        <ContentSection
        border={true}
        fullSpanMarginImage="md:my-20 my-10"
        fullSpanImage={{src: "/images/Subway/assets/img_Folio_Subway_Animations_v2.webp",  alt: "Order Flow", mode: "lightbox"}}
        title="MAKE IT DELIGHTFUL"
        subtitle="Stay friendly"
        col1={[
          { kind: "body", text: "The new and energetic Subway branding provided the runway for us to be a bit playful by showcasing useful information in an enticing way. Whether it be helping the user ensure they're choosing the correct restaurant for pickup or keeping them updated on the status of an order, we approached communicating in an friendly and celebratory way - veggie confetti and all."}
        ]}
        />

        <ContentSection
        fullSpanMarginImage="md:my-20 my-10"
        fullSpanImage={{src: "/images/Subway/assets/img_Folio_Subway_Animations_Orders.webp", alt: "Ordering Form", mode: "lightbox"}}
        />
        </main>
      </div>

      <main className="mx-5 md:mx-55 pb-8 mb-15">
        <ContentSection
        border={true}
        marginImage="mt-8"
        title="THE OUTCOMES"
        subtitle="Freshened up"
        col1={[
          { kind: "body", text: "With the launch of the new app in early 2018, Subway experienced measurable growth and successfully reached business goals. Sign ups increased, daily users came to an all time high and the app performed significantly better."}
        ]}
        image={{src: "/images/Subway/assets/img_Folio_Subway_InitialKPI+Copy.webp", alt: "Initial KPI", mode: "lightbox"}}
        />

        <NumberedList
          spacing="space-y-1"
          blocks={[
            { kind: "title", text: "TEAM" },
            { kind: "numbered", splitAt: 6, items: [
              <><strong>Creative Director: </strong>Isaiah Same</>,
              <><strong>Art Director: </strong>Jesse Sims</>,
              <><strong>UX Designers: </strong>Ansa Antonishen, Mike Edwards, Brit Clapper</>,
              <><strong>UI Designers: </strong>Christine Soules (discovery phase), Danni Pfitzner & Joe Montanino</>,
              <><strong>Illustrators: </strong>Christine Soules (discovery phase) & Danni Pfitzner</>,
              <><strong>Motion Designer: </strong>Brad Dugdale</>,
              <><strong>Studio: </strong>Fjord - Austin, TX</>,
              <><strong>Date: </strong>December 2016 - June 2017</>
            ]}
          ]}
          />

      </main>
    </>
  );
}
