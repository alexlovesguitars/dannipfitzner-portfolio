import CaseStudyHero from "@/components/sections/CaseStudyHero";
import ContentSection from "@/components/sections/ContentSection";
import NumberedList from "@/components/sections/NumberedList";
import Button from "@/components/Button";


export default function HostCaseStudy() {
  return (
    <>
      <main className="mx-5 md:mx-55 pb-8 mb-15">
        <CaseStudyHero
          heroTitle="Host App"
        />
          <ContentSection
            title="BACKGROUND"
            subtitle="Setting the stage"
            listStyle="list-disc pl-5"
            marginImage="mt-20"
            col1={[
              {kind: "body", text:
                <>
                  The <em><strong>Business App </strong></em>is an Android application that currently has around 6,000 active users.
                  <br />
                  <br />
                  It allows restaurants to:
                </>
              },
              {kind: "numbered", items: [
                <>View upcoming reservations</>,
                <>reate reservations and walk-ins</>,
                <>See reservations mapped onto the restaurant table plan</>,
                <>Create a wait-list</>
              ]},
              {kind: "listTitle", text:
                "And much more..."
              }
            ]}
            image={{ src: "/images/Quandoo/assets/case_studies/BA.webp", alt: "Business App"}}
            />
          <div className="border-b border-gray-300 mt-15"></div>
          <ContentSection
            border={true}
            title="THE PROBLEMS"
            subtitle="Identifying the pain points"
            aspectRatio="aspect-[14/10]"
            listStyle="list-disc pl-5"
            listItemSpacing="space-y-5"
            marginListTitle="mt-0"
            headerLayout="full"
            col1={[
              { kind: "body", text:
              <>
                The main reason we needed to replace the <em><strong>BA</strong></em> was technical. The tool is currently only available for Android, and designed for one tablet size. We supply the tablets for restaurants who sign-up to use this product which results in high-costs for the company and excludes restaurants who prefer iOS.
                <br />
                <br />
                Not only this, but the code base was so outdated that simple bug fixes and improvements to the product experience took much longer than is ideal.
                <br />
                <br />
                Knowing we needed to rebuild the tool from scratch, it was our opportunity to improve the experience and align to our new design system.
              </>
              }
            ]}
            col2={[
              {kind: "listTitle", text:
                <>
                  Our churn analysis reports that 25% of customers have listed “bad experience/usability” as a churn reason.  By analyzing existing foundational research, support requests, and usability audits we identified many aspects to focus on:
                </>
              },
              {kind: "numbered", items: [
                <>Due to product complexity, onboarding new partners to the <em><strong>BA</strong></em> can be a lengthy process, resulting in high costs </>,
                <>The lack of proper visibility and clarity surrounding key actions results in errors</>,
                <>Users are not aware of how to undo their mistakes</>,
                <>Important information is often hidden and therefore goes unnoticed</>,
                <>The steps within flows for key actions are not guided, resulting in the user not knowing what to do next</>,
                <>The process of seating walk-ins isn&apos;t quick enough, resulting in restaurants not logging this into the system and creating inaccurate availability in the table plan</>
              ]}
            ]}
          />
          <ContentSection
            border={true}
            title="PROCESS"
            subtitle="Creating hypothesis"
            listStyle="list-disc px-10"
            listItemSpacing="space-y-5"
            marginListTitle="mt-0"
            headerLayout="full"
            col1={[
              {kind: "body", text:
                <>
                  <strong>01.</strong> We believe that by <strong>improving the user experience for completing service related tasks,</strong>  we will <strong>increase the amount of engaged users, reduce support requests</strong> and reduce acquisition costs for new restaurants.
                </>
              },
              {kind: "subheader", text: "HOW?"},
              {kind: "numbered", items: [
                <>We believe that by <strong>increasing visibility and clarity of key actions</strong> we will <strong>reduce the time to correctly complete intended actions.</strong></>,
                <>We believe that by <strong>providing more guidance for when to complete key actions</strong> we will <strong>reduce the time to correctly complete intended actions.</strong></>,
                <>We believe that by <strong>simplifying the flows to complete key actions</strong> we will <strong>reduce the time to correctly complete intended actions.</strong></>,
                <>We believe that by <strong>making it easier to undo incorrect actions</strong> we will <strong>reduce the amount of errors and reduce support requests.</strong></>,
                <>We believe that by <strong>making important notifications and action items more apparent</strong> we will <strong>reduce problems such as overbooking and/or guests showing up with reservations the restaurant isn&apos;t aware of.</strong></>
              ]},
              {kind: "subheader", text: "WE WILL KNOW THIS TO BE TRUE"},
              {kind: "numbered", items: [
                <>when we see <strong>an increase in manually created reservations and walk-ins, as well as the type of information added (reservation notes) in Host vs BA.</strong></>,
                <>when we see a <strong>reduction in the number of support requests Quandoo receives via Intercom.</strong></>,
                <>when we see a <strong>reduction in the current cost and time Quandoo spends to onboard a new restaurant.</strong> </>
              ]}
            ]}
            col2={[
              {kind: "listTitle", text:
                <>
                  <strong>02.</strong> We believe that by <strong>providing a table plan view that users have ownership and control over,</strong> we will <strong>increase the amount of engaged users, increase the number of restaurants that report accurate inventory and reduce acquisition costs for new restaurants.</strong>
                </>
              },
              {kind: "subheader", text: "WE WILL KNOW THIS TO BE TRUE"},
              {kind: "numbered", items: [
                <>when see <strong>an increase in interactions with the Table Plan view in Host vs BA.</strong></>,
                <>when we see <strong>an increase in restaurants adding new inventory using the new Table Plan.</strong></>,
                <>when we see <strong>a reduction in the current cost and time Quandoo spends to create a Table Plan.</strong></>
              ]}
            ]}
          />
          <ContentSection
            border={true}
            title="PRIORITIZING"
            subtitle="Creating the milestones"
            fullSpanMarginImage="mt-15"
            col1={[
              { kind: "body", text:
                <>
                  Partnering with my Product Owner, we established a list of user stories for the product as a whole. He then worked his google-sheet magic by importing data gathered from our BI team to measure most frequently used features, as well as qualitative insights from our market teams.
                </>
              }
            ]}
            fullSpanImage={{ src: "/images/Quandoo/assets/case_studies/Product-Matrix.webp", alt: "Product Matric" }}
          />
          <ContentSection
            border={false}
            fullSpanAspectRatio="aspect-[12/6]"
            fullSpanMarginImage="px-10 pt-10"
            col1={[
            { kind: "body", text:
            <>
              Then, an ICE prioritization framework was put together using total number of users and also “sales enabler” as impact factors. We also had a session as an entire team to estimate level of effort from a design and implementation perspective.
              <br />
              <br />
              With the combination of these artefacts we were able to define our first four milestones.
            </>
            }
          ]}
          fullSpanImage={{ src: "/images/Quandoo/assets/case_studies/Milestones.webp", alt: "Milestones"}}
          />
        </main>

      {/* VALUES SECTION */}
      <div className="bg-gray-50 w-full">

        <main className="mx-5 md:mx-55">
            <ContentSection
              border={true}
              title="VALUE 01"
              aspectRatio="aspect-[12/5]"
              marginImage="mt-8"
              subtitle="Plan for the day"
              col1={[
                { kind: "body", text:
                <>
                  All reservations for the day can be seen in one list, with system suggested actions based on the relation of the reservation start time and the current time. This helps hosts fully plan for the current moment and shifts ahead as well as take all relevant actions in a timely manner
                </>
                }
              ]}
              image={{ src: "/images/Quandoo/assets/case_studies/Host-Reservation+list.webp", alt: "Reservation List" }}
            />
            <ContentSection
              aspectRatio="aspect-[12/5]"
              border={true}
              title="VALUE 02"
              marginImage="mt-10"
              subtitle="Easily keep the system in sync with reality"
              col1={[
                { kind: "body", text:
                <>
                  A restaurant in a busy place! Guests are arriving, guests are leaving, maybe some guests don&apos;t even show up at all. Keeping the system in sync with reality is important in order to keep capacity accurate in the system.
                  <br />
                  <br />
                  The system makes it easy to keep track of the flow of guests by surfacing the actions when they&apos;re most relevant.
                </>
                }
              ]}
              image={{ src: "/images/Quandoo/assets/case_studies/Host-Status+changes.webp", alt: "Status Changes" }}
            />
            <ContentSection
              marginImage="mt-10"
              title="VALUE 03"
              subtitle="Quickly log new reservations and walk-ins"
              col1={[
                { kind: "body", text:
                <>
                  Adding new reservations and walk-ins to the system is quick and efficient. The guided flow is intended to mimic a typical reservtion made via phone call (date, covers, time, and contact details).
                  <br />
                  <br />
                  The process becomes even quicker with system-generated table assignments, making planning easier.
                </> }
              ]}
            />
            <NumberedList
              aspectRatio="aspect-[21/9]"
              border={true}
              blocks={[
                { kind: "image", src: "/images/Quandoo/assets/case_studies/Host-Create+reservation.webp", alt: "Create Reservation" }
              ]}
            />
            <ContentSection
              aspectRatio="aspect-[16/10]"
              border={true}
              title="VALUE 04"
              subtitle="Create the best experience for the guests"
              col1={[
                { kind: "body", text:
                  <>
                    The reservation detail view is the space to capture information about the guest and make any necessary adjustments to the reservation. With different types of notes, all employees can be on the same page with any special requests or reservation specifications.
                  </>
                }
              ]}
              image={{ src: "/images/Quandoo/assets/case_studies/Host+-+Reservation+details.webp", alt: "Book & Account" }}
            />
            <ContentSection
              title="VALUE 05"
              subtitle="Reduce errors"
              col1={[
                { kind: "body", text:
                  <>
                    The system aims to be smart and helpful, but never in the way. Things the restaurant may want to adjust, like overbooked tables, will always be indicated. Additionally, all actions will have an <strong>undo</strong> option in case mistakes are made. However, the restaurant has full autonomy to make decisions that they feel are best.
                  </>
                }
              ]}
              image={{ src: "/images/Quandoo/assets/case_studies/Host+-+Reduce+mistakes.webp", alt: "Reduce Mistakes"}}
            />
        </main>
      </div>

      <main className="mx-5 md:mx-55">
        <ContentSection
          border={true}
          aspectRatio="aspect-[17/13]"
          marginImage="mt-8"
          listStyle="list-disc pl-5"
          title="PROCESS"
          subtitle="Validation"
          col1={[
            { kind: "body", text:
              <>
                Together with the UX researcher, we met with 5 restaurants in in Berlin to evaluate the usability of the first few milestones, with a particular focus on guest and reservation management. Restaurants with a large number of walk-ins were chosen because they have more guests coming in without bookings and thus a larger need to manage these arrivals.
                <br />
                <br />
                We asked them to walk through the prototype on a tablet, and perform the following tasks:
              </>
            },
            { kind: "numbered", items: [
              <>Manage current and past seatings</>,
              <>Manage no-shows</>,
              <>Adjusting table assignments</>
              ]}
            ]}
            image={{ src: "/images/Quandoo/assets/case_studies/Host-Validation.webp", alt: "Validation" }}
          />
      </main>
      <>
        {/* The Launch & Moving Forward & Interlude*/}
        <main className="mx-5 md:mx-55 pb-8 mb-15">
          <ContentSection
            border={true}
            fullSpanAspectRatio="aspect-[12/5]"
            fullSpanMarginImage="px-10 pt-10"
            col1={[
                      { kind: "body", text:
                        <>
                          Our results indicated that we were on the right track as there were no standout usability issues, but we could definitely improve by making current capacity more obvious to help hosts understand at a glance if there&apos;s space for walk-in guests.
                        </>
                      }
                    ]}
            fullSpanImage={{ src: "/images/Quandoo/assets/case_studies/Host+-+Validation.webp", alt: "Validation"}}
          />
          <ContentSection
            border={true}
            listStyle="list-disc pl-5"
            title="THE LAUNCH"
            subtitle="The challenges"
            headerLayout="full"
            marginListTitle="mt-0"
            col1={[
              { kind: "body", text:
                <>
                  We launched the product  in August 2020 (with the first 2 milestones complete) as a beta with a selected group of 20 restaurants who currently use the <em><strong>Business App.</strong></em> We included a “send feedback” button in the product and encouraged these restaurants to contact us at any time.
                  <br />
                  <br />
                  We also put a plan in place for UX research to conduct check-in calls after 2 months of use and again after a month.
                </>
              }
            ]}
            col2={[
              { kind: "listTitle", text:
                <>
                  <strong>And then we hit some roadblocks</strong>
                </>
              },
              { kind: "numbered", items: [
                <>Due to the COVID-19 pandemic, testing our tool was not made a priority by restaurants (understandably so!) — so needless to say, we didn&apos;t collect many insights.</>,
                <>The Sales team believed we needed to reach 100% feature-parity with the <em><strong>Business App</strong></em> in order for them to properly sell the new tool to existing <em><strong>BA</strong></em> users.</>
              ]}
            ]}
          />
          <ContentSection
          border={false}
          title="MOVING FORWARD"
          subtitle="We improved"
          col1={[
            { kind: "body", text:
              <>
                At this point I had to switch focus to kick off our next new product and we hired in a new designer to join the Host team.
                <br />
                <br />
                I supported the team in adjusting their workflow to collaborate more closely with our Supply team, to ensure a the roadmap ahead includes all necessary features to successfully migrate <em><strong>BA</strong></em> users to the new tool.
              </>
            }
          ]}
          />
        </main>

        {/* Improvement Section */}

        <div className="bg-gray-50 w-full">
          <main className="mx-5 md:mx-55 pb-8 mb-15">
            <ContentSection
              border={true}
              title="IMPROVEMENT 01"
              subtitle="Plan ahead"
              col1={[
                { kind: "body", text:
                  <>
                    Now planning ahead is possible by seeing future days in the reservation list. Navigation is easy by using the quick arrow toggles, or choosing a date from the calendar.
                    <br />
                    <br />
                    <em>Designs by Elham Salemian</em>
                  </>
                }
              ]}
              image={{ src: "/images/Quandoo/assets/case_studies/HostSeefuturedays.webp", alt: "See Future Days"}}
            />
            <ContentSection
              border={true}
              fullSpanAspectRatio="aspect-[16/6]"
              fullSpanMarginImage="px-10 pt-10"
              title="IMPROVEMENT 02"
              subtitle="Table allocations just got easier"
              col1={[
                { kind: "body", text:
                  <>
                    The addition of a table plan takes this product to the next level. In the table plan view, the restaurant has a glimpse of tables that are free, and tables that have associated upcoming, checked-in, or late reservations.
                    <br />
                    <br />
                    Making adjustments to table allocations or blocking tables from receiving online reservations is now just a few taps.
                    <br />
                    <br />
                    <em>Designs by Elham Salemian</em>
                  </>
                }
              ]}
              fullSpanImage={{ src: "/images/Quandoo/assets/case_studies/Host-TablePlan.webp", alt: "Host Table Plan"}}
            />
          </main>
        </div>

        {/* Credits + Navigation */}

        <main className="mx-5 md:mx-55 pb-8 mb-15">
          <ContentSection
          border={true}
          title="WHERE WE ARE NOW"
          subtitle="Continue the push"
          listStyle="list-disc px-5"
          headerLayout="full"
          marginListTitle="mt-0"
          col1={[
            { kind: "body", text:
              <>
                The team has aligned on a road-map with the support from the Supply team that contains prioritized features such as:
              </>
            },
            { kind: "numbered", items: [
              <>Waitlists</>,
              <>Booking deposits</>,
              <>Dining packages</>,
              <>Guest tags</>
            ]},
            { kind: "body", text:
              <>
                And much more...
              </>
            }
          ]}
          col2={[
            { kind: "listTitle", text:
                <>
                  We also identified a few other improvement points:
                  <br />
                  <br />
                  <strong>We need to continously improve our tech efforts</strong>
                  <br />
                  Currently <em><strong>Host</strong></em> lacks all settings features, meaning it still has to connect to another of our legacy products to define things like capacity (tables and seats), reservation availability, etc. We will need to make the technical adjustments to connect <em><strong>Host</strong></em> to <em><strong>Pro</strong></em> (our newest product that contains settings) moving forward.
                  <br />
                  <br />
                  <strong>We need to add a self-service aspect</strong>
                  <br />
                  Due to the point above, Host must be set-up manually by our internal support team. In order to align with the new self-service component of the other tools in our new suite, this will need to be adjusted.
                  <br />
                  <br />
                  <strong>We need a clear migration plan</strong>
                  <br />
                  At the moment, focus is on reaching a strong feature-parity with the <em><strong>BA</strong></em> to get ready to properly release the product. But we do need a clear plan to switch current <em><strong>BA</strong></em> users to <em><strong>Host</strong></em> in the most painless way possible.
                </>
            },
          ]}
          />
          <NumberedList
            spacing="space-y-1"
            blocks={[
              { kind: "title", text: "TEAM" },
              { kind: "numbered", splitAt: 5, items: [
                  <><strong>Product Ownership: </strong>Tobias Reith & Yiying Lo</>,
                  <><strong>Product Design: </strong>Danni Kirchoff (2019-2020) & Elham Salemian (2020-2021)</>,
                  <><strong>Product Design - Design System Support: </strong>Seif Ahmed</>,
                  <><strong>UX Research: </strong>Steffany Farros  &  Roísín Fitzpatrick</>,
                  <><strong>Tech Leadership: </strong>Sergii Nesterenko</>,
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
            href="/projects/quandoo/pro"
            label="NEXT CASE STUDY: PRO"
            />
          </div>
        </main>
      </>
    </>
  )
}
