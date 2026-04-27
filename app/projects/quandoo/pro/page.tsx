import CaseStudyHero from "@/components/sections/CaseStudyHero";
import ContentSection from "@/components/sections/ContentSection";
import NumberedList from "@/components/sections/NumberedList";
import Button from "@/components/Button";


export default function PRO() {
  return (
    <>
      <main className="mx-5 md:mx-40 pb-8 mb-15">

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
        col1={[
          { kind: "body", text:
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

      </main>
    </>
  )
}
