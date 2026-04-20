import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ImageGrid from "@/components/sections/ImageGrid";
import NumberedList from "@/components/sections/NumberedList";

export default function Quandoo() {
  return (
    <>
      <HeroSection
        heroImage="/images/Quandoo/Quandoo_Hero.webp"
        heroAlt="Quandoo Hero Image"
        heroTitle="Quandoo"
        heroSubtitle="Quandoo is working to transform the world's dining out experience for both diners and restaurants."
      />
      <main className="mx-5 md:mx-55 py-8 mb-15">
        <IntroSection
          title="A BRIEF HISTORY"
          subtitle="How it all started (for me)"
          body="When I joined Quandoo's B2B team we were offering an extensive suite of products for our restaurant partners based on different segments of the market, and different user needs."
        />
        <ImageGrid
          border={true}
          blocks={[
            { kind: "image", src: "/images/Quandoo/assets/Section01_BriefHistory01.webp", alt: "Business Center (BC)", caption: <><strong>Business Center (BC):</strong> A web platform used mostly for setting up restaurant specifics, managing reservation enquiries, viewing reservations, creating reservations and reporting. Targeted for restaurant managers in office settings, or reservation call centers (not during service).</> },
            { kind: "image", src: "/images/Quandoo/assets/Section01_BriefHistory02.webp", alt: "Chain Center (CC)", caption: <><strong>Chain Center (CC):</strong> Intended for use in parallel with Business Center, with the additional features of chain management for restaurants with multiple locations.</> },
            { kind: "image", src: "/images/Quandoo/assets/BusinessApp.webp", alt: "Business App (BA)", caption: <><strong>Business App (BA):</strong> A front of house app used on the restaurant floor to log and track restaurant traffic to keep up with overall availability. Targeted for hosts, or members of staff that are positioned at the door.</> },
            { kind: "image", src: "/images/Quandoo/assets/RestaurantMobileApp.webp", alt: "Restaurant Mobile App (RMA)", caption: <><strong>Restaurant Mobile App (RMA):</strong> An easy way to view restaurant availability and important metrics on the go. Targeted for restaurant owners/managers who aren&apos;t always on-site.</> },
          ]}
        />
        <NumberedList
          blocks={[
            { kind: "title", text: "THE PROBLEMS" },
            { kind: "subtitle", text: "Identifying the pain points" },
            { kind: "numbered", splitAt: 3, items: [
              <><strong>01. Poor product + market fit —</strong> Without a proper product for each segment of the market, ill-suited tools are sold to restaurants, ultimately resulting in churn.</>,
              <><strong>02. Platform specific tools —</strong> Existing tools were designed for specific platforms (BC for desktop web, RMA for iOS mobile, BA for Android tablet) limiting the spaces users are able to access our tools.</>,
              <><strong>03. Legacy code —</strong> Products built on legacy code bases were difficult to improve, as any adjustments to the product took intensive implementation effort.</>,
              <><strong>04. High acquisition costs —</strong> As we rely almost exclusively on our sales and operations teams to acquire and set up new merchant accounts, our business costs for each new acquisition is very high.</>,
              <><strong>05. Inconsistent patterns —</strong> All restaurant-facing Quandoo tools used varying UI & UX patterns, which not only disrupted the notion of a cohesive product ecosystem, but it was also difficult to maintain internally.</>,
            ]},
          ]}
        />
        <NumberedList
          listStyle="list-none"
          layout="inline"
          blocks={[
            { kind: "title", text: "TARGET" },
            { kind: "subtitle", text: "Understanding our customers" },
            { kind: "body", text: "A restaurant segmentation exercise was done by our Supply and strategy teams to better understand how different types of restaurants manage their incoming reservations prior to arrival, and the arrival of guests during service." },
            { kind: "numbered", items: [
              <>Key metrics used to define the segmentation:</>,
              <><strong>- Total covers served per shift:</strong> Indicates the volume.</>,
              <><strong>- Spend per Head (SpH):</strong> Indicates the level of guest focus.</>,
              <><strong>- Total Number of Seats (Capacity):</strong> Indicates the size.</>,
            ]},
            { kind: "image", src: "/images/Quandoo/assets/Segmentation+visualization.webp", alt: "Segmentation and Visualisation",
              caption: <> (All Illustrations shown on this page are done by our talented Communication Design team) </> },
          ]}
        />
        <IntroSection
          title="OUR GOALS"
          subtitle="Defining the plan"
          body={
            <>
              Based on the problems identified, we knew we needed to build new tools and slowly phase out our legacy tools. We needed to build on a sustainable code-base, and create consistent usability patterns to create a fully-functioning ecosystem.
              <br></br>
              <br></br>
              We started by defining our two main goals.
            </>
          }
        />
        <ImageGrid
          border={false}
          blocks={[
            { kind: "image", src: "/images/Quandoo/assets/Aquire.webp", alt: "Aquire" },
            { kind: "image", src: "/images/Quandoo/assets/Retain.webp", alt: "Retain" },
          ]}
        />
        <NumberedList
          listStyle="list-disc"
          blocks={[
            { kind: "sectionTitle", text: "Acquire" },
            { kind: "sectionTitle", text: "Retain" },
            { kind: "numbered", splitAt: 2, items: [
              <>
                Aquire more restaurants in our marketplace by ensuring we have a proper product fit for each segment of the market
              </>,
              <>
                Reduce acquisition costs by providing a self-sign up tool
              </>,
              <>
                Create new tools that have proper value parity of our existing tools, while improving the operational efficiency and usability
              </>,
              <>
                Offer our tools for a variety of screen sizes and platforms
              </>,
              <>
                Define a frictionless migration plan to redirect users on our current tools to the new tools — and give them the flexibility to upgrade/downgrade at any time
              </>
            ]},
          ]}

        />
      </main>
    </>
  );
}


{/* <ProjectPage
      heroImage="/images/Quandoo/Quandoo_Hero.webp"
      heroAlt="Quandoo Hero Image"
      blocks={[

        { kind: "title", text: "A BRIEF HISTORY" },
        { kind: "subtitle", text: "How it all started (for me)" },
        { kind: "body", text: "When I joined Quandoo's B2B team we were offering an extensive suite of products for our restaurant partners based on different segments of the market, and different user needs." },
        { kind: "image", src: "/images/Quandoo/assets/Section01_BriefHistory01.webp", alt: "Business Center (BC)", caption: <><strong>Business Center (BC):</strong> A web platform used mostly for setting up restaurant specifics, managing reservation enquiries, viewing reservations, creating reservations and reporting. Targeted for restaurant managers in office settings, or reservation call centers (not during service).</> },
        { kind: "image", src: "/images/Quandoo/assets/Section01_BriefHistory02.webp", alt: "Chain Center (CC)", caption: <><strong>Chain Center (CC):</strong> Intended for use in parallel with Business Center, with the additional features of chain management for restaurants with multiple locations.</> },
        { kind: "image", src: "/images/Quandoo/assets/BusinessApp.webp", alt: "Business App (BA)", caption: <><strong>Business App (BA):</strong> A front of house app used on the restaurant floor to log and track restaurant traffic to keep up with overall availability. Targeted for hosts, or members of staff that are positioned at the door.</> },
        { kind: "image", src: "/images/Quandoo/assets/RestaurantMobileApp.webp", alt: "Restaurant Mobile App (RMA)", caption: <><strong>Restaurant Mobile App (RMA):</strong> An easy way to view restaurant availability and important metrics on the go. Targeted for restaurant owners/managers who aren&apos;t always on-site.</> },

        { kind: "divider" },

        { kind: "title", text: "THE PROBLEMS" },
        { kind: "subtitle", text: "Identifying the pain points" },
        { kind: "numbered", splitAt: 3, items: [
          <><strong>01. Poor product + market fit —</strong> Without a proper product for each segment of the market, ill-suited tools are sold to restaurants, ultimately resulting in churn.</>,
          <><strong>02. Platform specific tools —</strong> Existing tools were designed for specific platforms (BC for desktop web, RMA for iOS mobile, BA for Android tablet) limiting the spaces users are able to access our tools.</>,
          <><strong>03. Legacy code —</strong> Products built on legacy code bases were difficult to improve, as any adjustments to the product took intensive implementation effort.</>,
          <><strong>04. High acquisition costs —</strong> As we rely almost exclusively on our sales and operations teams to acquire and set up new merchant accounts, our business costs for each new acquisition is very high.</>,
          <><strong>05. Inconsistent patterns —</strong> All restaurant-facing Quandoo tools used varying UI & UX patterns, which not only disrupted the notion of a cohesive product ecosystem, but it was also difficult to maintain internally.</>,
        ]},

        { kind: "divider" },

        { kind: "title", text: "TARGET" },
        { kind: "subtitle", text: "Understanding our customers" },
        { kind: "body", text: "A restaurant segmentation exercise was done by our Supply and strategy teams to better understand how different types of restaurants manage their incoming reservations prior to arrival, and the arrival of guests during service." },
        { kind: "body", text: "Key metrics used to define the segmentation:" },
        { kind: "numbered", items: [
          <><strong>Total covers served per shift:</strong> Indicates the volume the business manages.</>,
          <><strong>Spend per Head (SpH):</strong> Indicates the level of guest focus.</>,
          <><strong>Total Number of Seats (Capacity):</strong> Indicates the size of the business.</>,
        ]},
        { kind: "image", src: "/images/Quandoo/assets/Segmentation+visualization.webp", alt: "Restaurant Segmentation" },
        { kind: "body", text: "All illustrations shown on this page are done by our talented Communication Design Team." },

        { kind: "divider" },

        { kind: "title", text: "OUR GOALS" },
        { kind: "subtitle", text: "Defining the plan" },
        { kind: "body", text: <>Based on the problems identified, we knew we needed to build new tools and slowly phase out our legacy tools. We needed to build on a sustainable code-base, and create consistent usability patterns to create a fully-functioning ecosystem.<br /><br />We started by defining our two main goals.</> },
        { kind: "image", src: "/images/Quandoo/assets/Aquire.webp", alt: "Acquire" },
        { kind: "image", src: "/images/Quandoo/assets/Retain.webp", alt: "Retain" },
        { kind: "body", text: <><strong>Acquire</strong></> },
        { kind: "numbered", items: [
          <>Acquire more restaurants in our marketplace by ensuring we have a proper product fit for each segment of the market.</>,
          <>Reduce acquisition costs by providing a self-sign up tool.</>,
        ]},
        { kind: "body", text: <><strong>Retain</strong></> },
        { kind: "numbered", items: [
          <>Create new tools that have proper value parity of our existing tools, while improving the operational efficiency and usability.</>,
          <>Offer our tools for a variety of screen sizes and platforms.</>,
          <>Define a frictionless migration plan to redirect users on our current tools to the new tools — and give them the flexibility to upgrade/downgrade at any time.</>,
        ]},

        { kind: "divider" },

        { kind: "title", text: "THE KICKOFF" },
        { kind: "subtitle", text: "Put in motion" },
        { kind: "body", text: "We first started by kicking off two new products to meet our goals:" },
        { kind: "body", text: <><strong>Book</strong></> },
        { kind: "title", text: "BUSINESS GOAL: ACQUIRE" },
        { kind: "body", text: "As an entirely new tool to cater to a segment of the market we haven't supported in the past; restaurants who just want more reservations, but not all the other management bells & whistles." },
        { kind: "body", text: <><strong>Host</strong></> },
        { kind: "title", text: "BUSINESS GOAL: RETAIN" },
        { kind: "body", text: "As a replacement for an existing tool, the Business App, this tool aims to solve relevant business problems for busy restaurants in a more efficient and user-friendly way." },

        { kind: "divider" },

        { kind: "title", text: "A SLIGHT PIVOT" },
        { kind: "subtitle", text: "Thinking holistically" },
        { kind: "body", text: <>Once we began defining the third new product we realized that perhaps our strategy had been too narrow in focusing on individual products, rather than thinking about the entire ecosystem.<br /><br />We went back to the drawing board with the marketing team to define the name for the product suite, and the individual tiers.</> },
        { kind: "image", src: "/images/Quandoo/assets/QfR+Strategy.webp", alt: "Quandoo For Restaurants Strategy" },
        { kind: "image", src: "/images/Quandoo/assets/Where+we're+at+now.webp", alt: "Current Strategy" },

        { kind: "divider" },

        { kind: "title", text: "THE CASE STUDIES" },
        { kind: "subtitle", text: "STARTER" },
        { kind: "body", text: "Starter is a tool designed for restaurants who simply want to generate more business. These restaurants don't require any fancy reservation management systems, and want to keep costs as low as possible." },
        { kind: "image", src: "/images/Quandoo/assets/Starter+-+Thumbnail.webp", alt: "Starter Thumbnail" },
        { kind: "subtitle", text: "Host app" },
        { kind: "body", text: "Host is an add-on, native app solution that restaurants can pair with the Pro (and future Premium) tool to effectively manage the flow of guests in the restaurant." },
        { kind: "image", src: "/images/Quandoo/assets/Host+-+Thumbnail.webp", alt: "Host Thumbnail" },
        { kind: "subtitle", text: "Pro" },
        { kind: "body", text: "Pro builds upon the fundamental values of reservation and guest management, and adds key functionality for busy restaurants to further manage their availability and capacity." },
        { kind: "image", src: "/images/Quandoo/assets/Pro+-+Thumbnail.webp", alt: "Pro Thumbnail" },

        { kind: "divider" },

        { kind: "title", text: "WHAT'S NEXT?" },
        { kind: "subtitle", text: "Continuous improvement" },
        { kind: "body", text: <><strong>Priorities</strong></> },
        { kind: "numbered", items: [
          <>Continue to improve <em><strong>Host</strong></em> for a proper release.</>,
          <>Continue to improve <em><strong>Pro</strong></em> based on insights from data and the Supply team.</>,
          <>Define the <em><strong>Premium</strong></em> product tier.</>,
        ]},
        { kind: "body", text: <><strong>Challenges</strong></> },
        { kind: "numbered", items: [
          <>Technical debt (still migrating some things to the new architecture).</>,
          <>Designers are dedicated to individual product tiers, but a lot of functionality overlaps, which can create some inconsistencies — we are considering re-structuring so that designers own different product values (Reservation list, Create reservations, etc.) to help with this.</>,
        ]},
      ]}
    /> */}
