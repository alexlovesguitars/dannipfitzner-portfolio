import CaseStudyHero from "@/components/sections/CaseStudyHero";
import ContentSection from "@/components/sections/ContentSection";
import NumberedList from "@/components/sections/NumberedList";
import Button from "@/components/Button";


export default function StarterCaseStudy() {
  return (
    <>
        <main className="mx-5 md:mx-55 pb-8 mb-15">
          <CaseStudyHero
            heroTitle="Starter"
            heroSubtitle={<>
              Formerly named <em><strong>Book</strong></em>
            </>} />
          <ContentSection
            title="MAIN OBJECTIVES"
            subtitle="Back to Basics"
            col1={[
              {kind: "body", text:
                "As Book will be our simplest product yet, we went back to the basics of reservation systems to identify the absolute necessities for restaurants that are simply looking to gain more business, but don't want any complicated management features."
              }
            ]}
            />
          <div className="border-b border-gray-300 mt-15"></div>
          <ContentSection
            title="PROCESS"
            subtitle="Setting the foundation"
            col1={[
              { kind: "body", text:
              <>
              Our UX researcher kicked off the discovery phase by conducting interviews with customers using Quandoo&apos; s existing tool <em><strong>Business Center Free+</strong></em> —  our most basic and affordable tool.
              <br />
              <br />
              Despite being our simplest tool in the current suite, <em><strong>Free+</strong></em> requires internal set-up and from Quandoo support team, and contains many complex setting features that not all restaurants require.
              <br />
              <br />
              The interviews focused on how these restaurants currently handle reservations, and any pain-points they have with the tool. The findings indicated a few key pillars to focus on: affordability, efficiency, and ease of use.
              </>}
            ]}
            image={{ src: "/images/Quandoo/assets/case_studies/Book+GenerativeSearch.webp", alt: "Book Generative Search" }} />
        </main>

      <div className="bg-gray-50 w-full">

        <main className="mx-5 md:mx-55">
            <ContentSection
              border={true}
              title="VALUE 01"
              subtitle="Increase exposure"
              col1={[
                { kind: "body", text:
                <>
                  The number one value of signing up with Book is the increased exposure. We&apos;ve found that 87% of people start their dining out experience by using a search engine. By maintianing an online presence and proving quick ways to reserve a table, restaurants can receive more business.
                </>
                }
              ]}
              image={{ src: "/images/Quandoo/assets/case_studies/book+listing.webp", alt: "Book & Listing" }}
            />
            <ContentSection
              aspectRatio="aspect-[16/14]"
              border={true}
              title="VALUE 02"
              subtitle="Plan for the shift"
              col1={[
                { kind: "body", text:
                <>
                  Once reservations come in, they can all be seen in one place. The reservation list is the backbone of the product, helping employees to mentally plan for upcoming shifts.
                  <br />
                  <br />
                  This list is updated in real-time — if a reservation is cancelled by the restaurant or the guest, this will be indicated in the list.
                </>
                }
              ]}
              image={{ src: "/images/Quandoo/assets/case_studies/book+reservationList.webp", alt: "Book & Reservationlist" }}
            />
            <ContentSection
              border={true}
              marginImage="mt-10"
              title="VALUE 03"
              subtitle="Improve guest communication"
              col1={[
                { kind: "body", text:
                <>
                  The reservation detail view contains the more granular bits of information that we acquire via Quandoo&apos;s online booking systems.
                  <br />
                  <br />
                  Any special requests that a guest might make are surface here, and communication with the guest via email or phone call is just a tap away.
                </> }
              ]}
              image={{ src: "/images/Quandoo/assets/case_studies/book+reservationDetails.webp", alt: "Book & Reservation Details" }}
            />
            <ContentSection
              aspectRatio="aspect-[16/14]"
              border={true}
              title="VALUE 04"
              subtitle="Stay up to date"
              col1={[
                { kind: "body", text:
                  <>
                    Things change! In case the phone number or contact person for the Quandoo account needs to change, this can be adjusted simply and quickly - no support needed.
                  </>
                }
              ]}
              image={{ src: "/images/Quandoo/assets/case_studies/Book+Account.webp", alt: "Book & Account" }}
            />
            <ContentSection
              title="VALUE 05"
              subtitle="Have full autonomy and get listed fast"
              col1={[
                { kind: "body", text:
                  <>
                  Unlike all Quandoo legacy products, which require an internal support team to manually set up the account, Starter is self-service sign-up!
                  <br />
                  <br />
                  It just takes a few minutes to input all necessary information, and after a quick authentication process the restaurant will be listed online and ready to recieve reservations.
                </>
                }
              ]}
            />
        </main>
        <NumberedList
              aspectRatio="aspect-video"
              width="w-3/4"
              border={false}
              blocks={[
                { kind: "image", src: "/images/quandoo/assets/case_studies/Book+Sign-up.webp", alt: "Sign Up" }
              ]}
            />
      </div>
      <>
        <main className="mx-5 md:mx-55 pb-8 mb-15">
          <ContentSection
            border={true}
            aspectRatio="aspect-[16/17]"
            marginImage="md:mx-5"
            listStyle="list-disc pl-5"
            title="PROCESS"
            subtitle="Validation"
            col1={[
              { kind: "body", text:
                <>
                  Together with the UX researcher, we met with 5 restaurants in London, and then 5 more in Berlin.
                  <br />
                  <br />
                  We started with an interview to gather more information such as:
                </>
              },
              { kind: "numbered", items: [
                <>What their role is</>,
                <>Their total capacity and turn-over</>,
                <>What type of technology they use</>,
                <>How they currently receive new reservation notifications</>,
                <>How they currently keep track. of their reservations</>
                ]},
              { kind: "body", text:
                <>
                  Then we asked them to walk through the prototype on a mobile phone. The tasks consisted of:
                </>
              },
              { kind: "numbered", items: [
                <>Creating an account</>,
                <>Adding the website to their home screen (as it&apos;s a progressive web app)</>,
                <>View the reservation request that&apos;s just come in, and accept it</>,
                <>Check the details for the reservation</>
              ]},
            ]}
            image={{ src: "/images/Quandoo/assets/case_studies/Validation.webp", alt: "Validation" }}
          />
          <ContentSection
          border={false}
          col1={[
            { kind: "body", text:
              <>
                Our results indicated that we were on the right track as there were no standout usability issues, and restaurants who have been using pen and paper to keep track of their reservations saw value in using a simplified digital list instead.
              </>
            }
          ]}
          />
          <NumberedList
              aspectRatio="aspect-[16/6]"
              border={true}
              blocks={[
                { kind: "image", src: "/images/Quandoo/assets/case_studies/ValidationInsights.webp", alt: "Validation Insights" }
              ]}
            />
          <ContentSection
          border={true}
          title="THE LAUNCH"
          subtitle="We learned"
          listStyle="list-disc pl-5"
          listItemSpacing="space-y-5"
          col1={[
            { kind: "body", text:
              <>
                We launched the product as a free tool December 2019 in Australia and Singapore (markets where we had an ongoing acquisition initiative), and later launched in Switzerland and Turkey.
              </>
            }
          ]}
          col2={[
            { kind: "listTitle", text:
                <>
                  <strong>After being live for 2 months:</strong>
                </>
            },
            { kind: "numbered", items: [
              <>13 restaurants had successfully claimed their business and created an account</>,
              <>Over 500 had started the account creation process but had not yet finished</>,
              <>64% weekly active users (20-26th Jan); 85% monthly active users Jan (remaining 15% likely to delist)</>,
              <>540+ reservations requests, ~450 accepted, 0 auto-denied, = 100% response rate.
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Avg. 23 weekly reservation requests (per merchant who received a request; 20-26th Jan)</li>
                </ul>
              </>

            ]}
          ]}
          />
          <ContentSection
          border={true}
          fullSpanAspectRatio="aspect-[12/6]"
          fullSpanMarginImage="px-10 pt-10"
          col1={[
            { kind: "body", text:
              <>
                Our UX researcher then launched a follow-up qualitative research plan by calling 6 customers around 2 weeks after their first successful log-in.
              </>
            }
          ]}
          fullSpanImage={{ src: "/images/Quandoo/assets/case_studies/PostLaunchInsights.webp", alt: "Post Launch Insights"}}
          />
          <ContentSection
          border={true}
          title="MOVING FORWARD"
          subtitle="We improved"
          listStyle="list-disc px-5"

          col1={[
            { kind: "body", text:
              <>
                At this point I left the team to start our next new product and another designer took over to work on the next initiatives:
              </>
            },
            { kind: "numbered", items: [
              <>Improve the sign-up flow to reduce drop-off</>,
              <>Adding in a few necessary settings features to control availability and capacity in the simplest way possible</>
            ]}
          ]}
          col2={[
            { kind: "listTitle", text:
                <>
                  We also identified a few other improvement points:
                  <br />
                  <br />
                  <strong>We need to improve our marketing efforts</strong>
                  <br />
                  While we did launch a website and various campaigns we didn&apos;t have as many self-sign ups as we expected. We would need to enhance the entry-point of the funnel if we want to improve this metric.
                  <br />
                  <br />
                  <strong>We need to convince the sales team that self-sign up can work</strong>
                  <br />
                  Our sales team is used to their process of selling and onboarding manually. Despite creating a process that&apos;s user-friendly and simple enough for the restaurants to do this on their own, the sales team still believes a manual process is the way to go.
                  <br />
                  <br />
                  <strong>We need to continuously improve our tech efforts</strong>
                  <br />
                  Due to the timeline we wanted to launch by, we had to cut some corners technically and were only able to build parts of the product on the new architecture. This will mean we will have to migrate or re-build some flows at some point.
                </>
            },
          ]}
          />
          <NumberedList
            spacing="space-y-1"
            blocks={[
              { kind: "title", text: "TEAM" },
              { kind: "numbered", splitAt: 5, items: [
                  <><strong>Product Ownership: </strong>Julia Changnier</>,
                  <><strong> Product Design: </strong>Danni Pfitzner</>,
                  <><strong>Product Design - Design System Support: </strong>Seif Ahmed</>,
                  <><strong>UX Research: </strong>Steffany Farros  &  Roísín Fitzpatrick</>,
                  <><strong>Tech Leadership: </strong>Steven Langbroek & Martin Demiddel</>,
                  <><strong>Company: </strong>Quandoo GmbH - Berlin, Germany</>,
                  <><strong>Date: </strong>June 2019 - Ongoing</>
              ]}
            ]}
          />
          <div className="flex flex-row justify-between">
            <Button
            href="/projects/quandoo"
            label="BACK TO QUANDOO OVERVIEW"
            />
            <Button
            href="/projects/quandoo/host"
            label="NEXT CASE STUDY: HOST"
            />
          </div>

        </main>
      </>
    </>
  )
}
