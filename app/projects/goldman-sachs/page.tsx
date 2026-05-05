import HeroSection from "@/components/sections/HeroSection";
import ImageGrid from "@/components/sections/ImageGrid";
import NumberedList from "@/components/sections/NumberedList";
import ContentSection from "@/components/sections/ContentSection";

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
      <main className="mx-5 md:mx-55 md:pb-10">
        <ContentSection
          border={true}
          title="OUR ROLE"
          subtitle="Become fully integrated"
          fullSpanMarginImage="my-10"
          col1={[
            { kind: "body", text:
              <>
                When we first got involved with Goldman Sachs they had no internal design team for the Honest Dollar product. Therefore our team of three designers acted as their dedicated product team. We worked in house with our client every day, participating in stand-ups and weekly syncs alongside their internal teams. Being deeply integrated into their process allowed us to establish a solid relationship with Goldman Sachs, to work alongside them as partners and collaborators rather than just as our client.
              </>
            }
          ]}
          fullSpanImage={{src: "/images/GoldmanSachs/assets/WhiteboardSession.webp", alt: "Whiteboard Session", mode: "lightbox"}}
        />

        <ContentSection
        border={false}
        title="OUR GOALS"
        subtitle="Streamline"
        col1={[
          { kind: "body", text:
            <>
              The product had launched before our involvement started, meaning our team came in to work with already existing aesthetics. However, the product lacked consistency with overall patterns, which impacted the development team&apos;s workflow. Within the first of couple weeks, I sifted through all designs for the website and iOS product to consolidate all components, as well as create rules around usability and scalability.
              <br />
              <br />
              <a href="/pdf/HonestDollar_StyleGuide_Web.pdf" target="_blank" className="text-black underline font-bold hover:text-gray-500 transition-colors ease-in-out">View Style Guide</a>
            </>
          }
        ]}
        />
      </main>

      <div className="bg-gray-50 w-full">
        <main className="mx-5 md:mx-55 pb-8">
          <ContentSection
            fullSpanImage={{src: "/images/GoldmanSachs/assets/img_HD_StyleGuide.webp", alt: "Style Guide Honest Dollar", mode: "lightbox"}}
            fullSpanMarginImage="md:my-15"
          />
        </main>
      </div>

      <main className="mx-5 md:mx-55 md:pb-10">
        <ContentSection
        border={false}
        title="OUR GOALS"
        subtitle="Provide growth"
        col1={[
          { kind: "body", text:
            <>
              The current product had a relatively small user base. Both the website and the application needed to come a long way to grow the product offering and achieve Goldman Sachs’ core business objectives.
            </>
          },
          { kind: "numbered", items:
            [
              <><strong>01. Fuel engagement</strong></>,
              <><strong>02. Gain new users</strong></>
            ]
          }
        ]}
        />
      </main>

      <div className="bg-[#49556D] w-full">
        <main className="mx-5 md:mx-55 md:pb-10">
          <div className="max-w-200 mx-auto text-center mt-20">
            <p className="text-md/8 text-white font-bold">
              Fuel engagement
              <br />
              <br />
            </p>

            <p className="text-md/8 text-white leading-relaxed">
              To help Honest Dollar further their mission, we established a firm understanding of their current product and identified the ideal target market. With something as personal as saving, it was imperative to understand what inspired trust and what made people uneasy. Keeping the user&apos;s preferences and inclinations at the forefront of decision making was very important. A few examples:
            </p>

          </div>

          <ContentSection
            theme="dark"
            title="FUEL ENGAGEMENT"
            subtitle="Contributing made easier"
            col1={[
              { kind: "body", text:
              <>
                We found that when it came to the onboarding process, users were hesitant to immediately set a recurring contribution, often resulting in new accounts with a zero balance. In order to alleviate this, we made it possible to make one time contributions. Not only does this fund newly open accounts, it makes it easy to contribute at any time, even straight from a mobile device.
              </>
              },
              { kind: "blockImage", image: {src: "/images/GoldmanSachs/assets/img_HD_OneTimeContributions_Web.webp", alt: "Make One Payment", mode: "lightbox"}, margin: "m-10"},
              { kind: "subheader", text: "OTHER ITERATIONS - "}
            ]}
            col2={[
              { kind: "blockImage", image: {src: "/images/GoldmanSachs/assets/img_HD_OneTimeContributions_Mobile.webp", alt: "Make One Payment Mobile", mode: "lightbox"}, margin: "w-75 m-auto"}
            ]}
          />

          <ImageGrid
          marginImage="md:mb-15"
          blocks={[
            { kind: "image", image: {src: "/images/GoldmanSachs/assets/img_HD_OneTimeContributions_V1.webp", alt: "One Time Contribution V1", mode: "lightbox"}},
            { kind: "image", image: {src: "/images/GoldmanSachs/assets/img_HD_OneTimeContributions_V2.webp", alt: "One Time Contribution V2", mode: "lightbox"}}
          ]}
          />

          <ContentSection
            fullSpanMarginImage="my-20"
            theme="dark"
            title="FUEL ENGAGEMENT"
            subtitle="Keeping it simple"
            col1={[
              { kind: "body", text: "A consistent goal for us through the entirety of our engagement focused around creating clear and streamlined displays of complicated financial data. We knew that finances can feel incredibly overwhelming, often making decisions difficult for the user. Our goal was to keep it simple and guided, showcasing only the information needed to make informed decisions."}
            ]}
            fullSpanImage={{src: "/images/GoldmanSachs/assets/img_HD_RecommendedPortfolio.webp", alt: "Recommended Portfolio", mode: "lightbox"}}
          />
        </main>
      </div>

      <main className="mx-5 md:mx-55 md:pb-10">
        <div className="border-b border-t border-gray-300">
          <div className="max-w-200 mx-auto text-center mt-20">
            <p className="text-md/8 text-black font-bold mt-20">
              Gain new users
              <br />
              <br />
            </p>

            <p className="text-md/8 text-black leading-relaxed mb-20">
              To help Honest Dollar further their mission, we established a firm understanding of their current product and identified the ideal target market. With something as personal as saving, it was imperative to understand what inspired trust and what made people uneasy. Keeping the user&apos;s preferences and inclinations at the forefront of decision making was very important. A few examples:
            </p>

          </div>
        </div>

        <ContentSection
        title="GAIN NEW USERS"
        subtitle="Jumping in to the tax market"
        fullSpanMarginImage="mt-20"
        col1={[
          { kind: "body", text:
          <>
            <em><strong>TurboTax,</strong></em> one service within Intuits&apos; large suite of financial services, is an American tax preparation software package for users to quickly and efficiently file their taxes with the help of guided prompts. TurboTax is also known for helping it&apos;s customers get the most out of their tax refund by diligently sifting through every possible refund option.
            <br />
            <br />
            Honest Dollar noticed an opportunity to nudge the user towards signing up for an Honest Dollar IRA in order to get a tax deduction towards next years taxes. We helped to mock up how this experience would function and fit in seamlessly within TurboTax&apos;s existing product.
          </>
        }
        ]}
        col2={[
          { kind: "blockImage", image: {src: "/images/GoldmanSachs/assets/img_HD_IntuitTurboTax_Logo.webp", alt: "TurboTax"}, margin: "md:my-auto"}
        ]}
        fullSpanImage={{  src: "/images/GoldmanSachs/assets/img_HD_TurboTax.webp", alt: "TurboTax", mode: "lightbox"  }}
        />

        <ContentSection
        title="GAIN NEW USERS"
        subtitle="Incorporating financial health"
        fullSpanMarginImage="mt-20"
        col1={[
          { kind: "body", text:
          <>
            Intuit&apos;s <em><strong>Turbo</strong></em> product works in tandem with TurboTax to receive necessary financial information and aid the user in all things regarding financial health. Users can surface their debt to income ratio and credit score, as well as read helpful resources on how to reach their financial goals.
            <br />
            <br />
            By incorporating Honest Dollar&apos;s services, Turbo could add a new element of financial health to the table; retirement savings. For both their website and iOS application, we worked to design the flow, as well as an interactive future value calculator to help users get a full grasp on the potential of long term saving with an IRA.
          </>
        }
        ]}
        col2={[
          { kind: "blockImage", image: {src: "/images/GoldmanSachs/assets/img_HD_IntuitTurbo_Logo.webp", alt: "TurboTax"}, className: "md:my-auto pt-10" }
        ]}
        fullSpanImage={{  src: "/images/GoldmanSachs/assets/img_HD_Turbo.webp", alt: "TurboTax", mode: "lightbox"  }}
        />
      </main>

      <div className="bg-[#49556D] w-full">
        <main className="mx-5 md:mx-55 pb-8">
        <ContentSection
          theme="dark"
          title="MOVING FORWARD"
          subtitle="More collaboration"
          fullSpanMarginImage="mt-20 mb-10"
          col1={[
            { kind: "body", text:
            <>
              As our engagement drew to a close we began working on a re-design effort that entailed collaborating with another design agency, <em><strong>Elephant,</strong></em> who had designed other Goldman Sachs products in the past. With Elephant driving the bulk of the visuals, we remained driving new features and functionality.
            </>
            }
          ]}
          fullSpanImage={{  src: "/images/GoldmanSachs/assets/WhiteboardSession02.webp", alt: "Whiteboard Session 2", mode: "lightbox"  }}
        />

        <ContentSection
          border={true}
          theme="dark"
          title="THE FUTURE"
          subtitle="A roadmap for success"
          col1={[
            { kind: "body", text:
              <>
                I began working on wireframes that would later influence the product offerings Goldman Sachs aimed to introduce into the Honest Dollar product.
                <br />
                <br />
                With the functionality of Multiple Accounts, we paved the way for users to contribute to multiple different accounts, such as Roth IRA, Traditional IRA, and a savings account. Also, with the introduction of a dashboard, we could surface a rollup of information such as current balance and future value projections, as well as present relevant nudges that help the user learn or complete tasks.
              </>
            },
            {
              kind: "blockImage", image: {  src: "/images/GoldmanSachs/assets/img_HD_MultipleAccounts_DashNudges.webp", alt: "Multiple Accounts Dash Web", mode: "lightbox"  }, margin: "mt-15"
            }
          ]}
          col2={[
            { kind: "blockImage", image: { src: "/images/GoldmanSachs/assets/img_HD_MultipleAccounts_Dash.webp", alt: "Multiple Accounts Dash Mobile", mode: "lightbox"}, margin: "m-auto", className: "w-75"}
          ]}
        />

        <ContentSection
          border={true}
          fullSpanImage={{src: "/images/GoldmanSachs/assets/img_HD_MultipleAccounts_AccountDetail.webp", alt: "Account Detail", mode: "lightbox"}}
          fullSpanMarginImage="mt-10"
        />

        <ContentSection
          border={false}
          fullSpanImage={{src: "/images/GoldmanSachs/assets/img_HD_MultipleAccounts_Contributions.webp", alt: "Contributions", mode: "lightbox"}}
          fullSpanMarginImage="mt-10 mb-20"
        />
        </main>
      </div>

      <main className="mx-5 md:mx-55 pb-8">

        <NumberedList
          spacing="space-y-1"
          blocks={[
            { kind: "title", text: "TEAM" },
            { kind: "numbered", splitAt: 3, items: [
              <><strong>Design Director: </strong>Paul Russo</>,
              <><strong>UX / UI Designer: </strong>Danni Pfitzner</>,
              <><strong>UX / UI Designer: </strong>Miranda Petrosky</>,
              <><strong>Studio: </strong>Accomplice - Austin, TX</>,
              <><strong>Date: </strong>December 2016 - June 2017 (on-site) <br />
              June 2017 - February 2018 (off-site)
              </>
            ]}
          ]}
        />


      </main>

    </>
  );
}
