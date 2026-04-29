import CaseStudyHero from "@/components/sections/CaseStudyHero";
import ContentSection from "@/components/sections/ContentSection";
import NumberedList from "@/components/sections/NumberedList";
import Button from "@/components/Button";
import ImageGrid from "@/components/sections/ImageGrid";


export default function PRO() {
  return (
    <>
      <main className="mx-5 md:mx-55 pb-8 mb-15">

      <CaseStudyHero
        heroTitle="Pro"
      />

      <ContentSection
        border={true}
        title="BACKGROUND"
        subtitle="Setting the stage"
        col1={[
          {kind: "body", text:
            <>
            The <em><strong>Business Center</strong></em> is our existing web solution that contains 3 tiers — Free+, Basic, and Premium.
            <br />
            <br />
            Just as the new <em><strong>Starter</strong></em> (see <a href="/projects/quandoo/starter"><em>Starter case study</em></a>) product tier is meant to replace <em><strong>Free+,</strong></em> we aim to replace <em><strong>Basic</strong> with the new <strong>Pro</strong> product tier.</em>
            </>
          }
      ]}
        image={{ src: "/images/Quandoo/assets/case_studies/BC.webp", alt: "Business Center"}}
      />

      <ContentSection
        border={false}
        title="THE PROBLEMS"
        subtitle="Identifying the pain points"
        listItemSpacing="space-y-5"
        marginListTitle="mt-0"
        headerLayout="full"
        verticalMargin="mb-0 mt-10"
        col1={[
          { kind: "listTitle", text:
            <>
            The pain-points we aim to rectify with the new <em><strong>Pro</strong></em> product are as follows:
            <br />
            <br />
            </>
          }
        ]}
      />

      <NumberedList
        border={true}
        verticalMargin="mb-10"
        blocks={[
          { kind: "numbered", splitAt: 2, items: [
            <><strong>01. Legacy code</strong> — The <em><strong>BC</strong></em> is built on a legacy code base making it difficult to improve, as any adjustments to the product took intensive implementation effort.</>,
            <><strong>02. Limited  devices</strong> — The current <em><strong>BC</strong></em> is not responsive, so it can only be used on on desktop.</>,
            <><strong>03. Complex usability</strong> — The bulk of our support requests come from <em><strong>BC</strong></em> users who don&apos;t understand how to complete certain actions, like adjusting their availability.</>,
            <><strong>04. High acquisition</strong> costs — Restaurants must be registered and onboarded to the <em><strong>BC</strong></em> manually by our internal support team, which takes a bit of time and effort.</>
          ]}
        ]}
      />

      <ContentSection
        border={false}
        title="DEFINING"
        subtitle="Understanding the competition"
        listItemSpacing="space-y-5"
        marginListTitle="m-0 pl-10"
        listStyle="list-disc pl-15"
        headerLayout="full"
        col1={[
          { kind: "body", text:
            <>
            We had a good idea of the feature set we’d need to include for first release by analyzing most frequently used features in <em><strong>BC - Basic</strong></em> and referencing existing research from this segment of the market.
            <br />
            <br />
            To get a better understanding of other simplistic reservation management systems out there, I conducted a competitive analysis.
            </>
          }
        ]}
        col2={[
          { kind: "listTitle", text: <><strong>I compared aspects such as:</strong></>},
          { kind: "numbered", items: [
            <>How they market themselves</>,
            <>Their packages and pricing models</>,
            <>Platforms</>,
            <>Available feature sets</>
          ]}
        ]}
        fullSpanImage={{src: "/images/Quandoo/assets/case_studies/MarketResearch.webp", alt: "Competitor Analysis"}}
      />

      <ContentSection
      border={true}
      fullSpanImage={{src: "/images/Quandoo/assets/case_studies/MarketResearchResults.webp", alt: "Research Results"}}
      />

      <ContentSection
      border={true}
      imageDimensions="w-3/4 h-auto"
      marginImage="mt-5"
      marginListTitle="mb-10"
      col1={[
        { kind: "listTitle", text: "I also took a more granular look at their flows in an attempt to gauge overall usability and intuitiveness."}
      ]}
      fullSpanImage={{src: "/images/Quandoo/assets/case_studies/CompetitorAnalysis.webp", alt: "Further Analysis"}}
      />

      <ContentSection
      border={false}
      title="EMPHASIZING"
      subtitle="Understanding the job"
      imageDimensions="w-3/4 h-auto mt-15"
      col1={[
        { kind: "body", text:
          "Once we had finalized our feature set for the first release I created job stories to ensure the team was aligned on the overall value and intention behind these features. This provided us with something to anchor our design and development tasks to."
        }
      ]}
      fullSpanImage={{src: "/images/Quandoo/assets/case_studies/Pro+-+Job+Stories.webp", alt: "Job Stories"}}
      />
      </main>

      <div className="bg-gray-50 w-full">
        <main className="mx-5 md:mx-80 pb-8 mb-15">
          <ContentSection
          border={false}
          fullspanBody="col-span-full"
          headerLayout="full"
          col1={[
            { kind: "subheader", text:
              <>IF YOU&apos;VE LANDED ON THIS CASE STUDY FIRST...
              <br />
              <br />
              </>
            },
            { kind: "body", text:
            <>
              The <em><strong>Pro</strong></em> product tier uses aspects of <em><strong>Starter</strong></em> and <em><strong>Host App</strong></em> as a base. Similarly, this tool contains the basic reservation system components such as the reservation list, and the creation of reservations and walk-ins. Please refer to those case studies to reference these basic feature sets.
              <br />
              <br />
              <div className="flex flex-row justify-around">

                <Button
                href="/projects/quandoo/starter"
                label="CASE STUDY: STARTER"
                />
                <Button
                href="/projects/quandoo/host"
                label="CASE STUDY: HOST"
                />

              </div>
              <br />
              <br />
              <>
                What sets Pro apart is it&apos;s addition of integral settings that give the restaurant full ownership over their online presence and reservation management controls.
              </>
            </>
            }
          ]}
          />
        </main>
        <main className="mx-5 md:mx-55 pb-8 mb-15">
          <ContentSection
          border={true}
          title="VALUE 01"
          subtitle="Reservations on your terms"
          col1={[
            { kind: "body", text:
              <>
                Restaurants have their own unique process when it comes to scheduling, planning, and handling large group sizes. <em><strong>Pro</strong></em> provides the ability to define when reservations can be accepted, the max group size, and how much time in advance is necessary to appropriately plan the shift.
                <br />
                <br />
                Additionally, by estimating how long guests will occupy a table, this helps the system to be smarter with automatic table assignments.
              </>
            }
          ]}
          image={{src: "/images/Quandoo/assets/case_studies/Pro+-+Avilability.webp", alt: "Availability"}}
          fullSpanImage={{src: "/images/Quandoo/assets/case_studies/Pro+-+Preferences.webp", alt: "Preferences"}}
          />
          <ContentSection
          border={true}
          title="VALUE 02"
          subtitle="Easily adjust capacity"
          col1={[
            { kind: "body", text:
              <>
                Things may change in the restaurant on any given day. Perhaps more tables are added once the weather is nice enough to sit outside, or capacity needs to (unfortunately) be limited due to COVID-19. Regardless of the scenario, the capacity section allows the restaurant to make sure areas and tables logged into the system are accurate and up to date.
                <br />
                <br />
                <em>Designs by Kostas Dimotstantos</em>
              </>
            }
          ]}
          fullSpanImage={{src: "/images/Quandoo/assets/case_studies/Pro+-+Capacity.webp", alt: "Capacity"}}
          />

          <ContentSection
          border={true}
          title="VALUE 03"
          subtitle="Entice guests"
          col1={[
            { kind: "body", text:
              <>Traditionally, the restaurant profiles on Quandoo&apos;s diner-facing website are managed by our internal support teams. With <em><strong>Pro</strong></em> the restaurants are in full control to define aspects like cuisine type, photos, menus, and more.</>
            }
          ]}
          fullSpanImage={{src: "/images/Quandoo/assets/case_studies/Pro+-+Profile.webp", alt: "Profile"}}
          />

          <ContentSection
          border={false}
          title="VALUE 04"
          subtitle="Simple set-up"
          col1={[
            { kind: "body", text:
              <>
                Sign-up is the easy. By simply searching for a restaurant on Quandoo&apos;s b2b website, a business can be &quot;claimed&quot; after a quick authentication process. Once registered, we provide guidance to set-up all necessary settings in order to list the restaurant online and start receiving reservations.
                <br />
                <br />
                <em>Designs by Kaili Cheng</em>
              </>
            }
          ]}
          fullSpanImage={{src: "/images/Quandoo/assets/case_studies/Pro+-+Set-up.webp", alt: "Set Up"}}
          />


        </main>
      </div>
      <main className="mx-5 md:mx-55 pb-8 mb-15">
        <ContentSection
        border={true}
        title="THE LAUNCH"
        subtitle="A unified approach"
        marginImage="mt-10"
        col1={[
          { kind: "body", text:
            <>
              Once we reached code complete for first version, the team decided to do an internal release prior to the official external release.
              <br />
              <br />
              The internal release, run by our UX Researcher, allowed <strong>everyone</strong> in the company to try out the tool by following specific prompts. They then answered a survey to help us gague overall ease of use, value, and aesthetics.
              <br />
              <br />
              This helped us to identify bugs we needed to fix prior to release, and also provided some ideas to add to our backlog.
              <br />
              <br />
              We then launched the product to the public in September 2021.
            </>
          }
        ]}
        image={{src: "/images/Quandoo/assets/case_studies/Pro+-+Complexity.webp", alt: "Complexity"}}
        />

        <ImageGrid
        border={true}
        blocks={[
          { kind: "image", src: "/images/Quandoo/assets/case_studies/Pro+-+Useful.webp", alt: "Useful"},
          { kind: "image", src: "/images/Quandoo/assets/case_studies/Pro+-+Aesthetics.webp", alt: "Aesthetics"}
        ]}
        />
        <ContentSection
        border={true}
        headerLayout="full"
        listStyle="list-disc pl-5"
        listItemSpacing="space-y-5"
        marginListTitle="mt-0"
        title="WHERE WE ARE NOW"
        subtitle="Learning and planning"
        col1={[
          { kind: "body", text:
            <>
              Now that Pro has been released, we&apos;re gathering data on overall performance and planning our next steps.
              <br />
              <br />
              Data dashboards are still being constructed, but what we know so far is:
            </>
          },
          { kind: "numbered", items: [
            <>29 restaurants have signed up (mostly through sales rather than self-sign up)</>,
            <>Daily average reservation per merchant is around 3 Quandoo-generated reservations, and 5 manually logged into the system by the restaurant</>
          ]}
        ]}
        col2={[
          { kind: "listTitle", text:
            <>
              A few things we&apos;re looking into:
            </>
          },
          { kind: "body", text:
            <>
              <strong>Why might self-service sign up be failing?</strong>
              <br />
              Do we need to rethink our marketing efforts? Are restaurants simply more comfortable working with a support representative than signing up to a tool on their own?
              <br />
              <br />
              <strong>What other features do restaurants expect in a mid-level type product?</strong>
              <br />
              The Supply team is in the process of doing an extensive competitive analysis, as well as gathering all insights from their associated markets to give us an indication on what limits us from making more sales.
            </>
          }
        ]}
        />
          <NumberedList
            spacing="space-y-1"
            blocks={[
              { kind: "title", text: "TEAM" },
              { kind: "numbered", splitAt: 4, items: [
                  <><strong>Product Ownership: </strong> Inessa Karpetyan, Ismael Rios, & Hemant Pandita</>,
                  <><strong>Product Design: </strong>Danni Kirchoff (2020-2021), Kostas Dimotsantos (2020), <br />Kaili Cheng (2021) & Nicole Ferreira (2021)</>,
                  <><strong>UX Research: </strong>Roísín Fitzpatrick</>,
                  <><strong>Tech Leadership: </strong>Karolina Grabowska</>,
                  <><strong>Company: </strong>Quandoo GmbH - Berlin, Germany</>,
                  <><strong>Date: </strong>June 2020 - Ongoing</>
              ]}
            ]}
          />
          <div className="flex flex-row justify-between">
            <Button
            href="/projects/quandoo"
            label="BACK TO QUANDOO OVERVIEW"
            />
            <Button
            href="/projects/quandoo/starter"
            label="NEXT CASE STUDY: STARTER"
            />
          </div>

      </main>

    </>
  )
}
