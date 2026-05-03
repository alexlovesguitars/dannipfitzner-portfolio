import HeroSection from "@/components/sections/HeroSection";
import NumberedList from "@/components/sections/NumberedList";
import ContentSection from "@/components/sections/ContentSection";
import ImageGrid from "@/components/sections/ImageGrid";

export default function Subway() {
  return (
    <>
      <HeroSection
        content={{
          image: {
            src: "/images/ATT/ATT_Hero.webp",
            alt: "AT&T Hero Image"
        },
        imageWidth: "md:w-3/4",
        title: "AT&T",
        background: "bg-[#444F5F]",
        subtitle: <>AT&T is one of the worlds largest communications companies, providing a range of services from phone, internet, cable, VPN, and many more. Our involvement with AT&T began when <em><strong>Boston Consulting Group (BCG)</strong></em> approached us to team up with them on their <em><strong>Order Accelerator</strong></em> project, centered around improving the process of ordering AT&T VPN services.</>,
        }}
      />
      <main className="mx-5 md:mx-55 pb-8 mb-15">
        <ContentSection
        border={true}
        title="OVERVIEW"
        subtitle="Order Accelerator"
        col1={[
          { kind: "body", text:
            <>
              The goal of Order Accelerator (OA) is to make placing an order for AT&T products and services faster than the current process by streamlining the flow through leveraging existing data. With the current system, customers tread through a convoluted and dated process of filling out potentially thousands of fields in a spreadsheet, and submitting this information for AT&T sellers and order handlers to then process manually. Other systems, like AT&T&apos;s Business Center, have been created to try to address these issues, but failed to reduce burden on the users, forcing them to continue with their spreadsheet system.
            </>
          }
        ]}
        col2={[
          // { kind: "subheader", text: "CURRENT PROCESS AT A HIGH LEVEL"},
          { kind: "blockImage", image: {src: "/images/ATT/assets/CurrentProcess.webp", alt: "Current Process", mode: "lightbox"}}
        ]}
        />

        <ContentSection
        border={false}
        title="GLOSSARY OF TERMS"
        subtitle="First things first"
        col1={[
          { kind: "body", text:
            <>
              It took us weeks to simply parse through the terminology used throughout AT&T&apos;s systems. Let&apos;s just get that out of the way now.
            </>
          },
        ]}
        />

        <NumberedList
        border={false}
        imageboundary="mt-25 [mask-image:linear-gradient(to_bottom,black_85%,transparent_85%)]"
        aspectRatio="aspect-[16/5]"
        blocks={[
          { kind: "numbered", splitAt: 3, items:
            [
              <><strong>AVPN:</strong> AT&T&apos;s virtual private network service. This extends a private network enabling users to securely send and receive data across shared or public networks.</>,
              <><strong>Ethernet:</strong> A wired system for connecting a number of computer systems to form a local area network. A <strong>non-ethernet</strong> based system can achieve the same result with a wireless connection.</>,
              <><strong>Asset / Circuit:</strong> These terms are interchangeable and describe the piece of network hardware the customer is purchasing, and AT&T is providing, to fulfill an AT&T network service. </>,
              <><strong>Quote:</strong> A quote is AT&T’s response to a customer’s request for an ethernet based network. The quote will surface the cost of the requested asset, and the customer can proceed with ordering this asset if they wish.</>,
              <><strong>Configuration:</strong> The processing specifications assigned to a particular service / asset, such as bandwidth and VLAN speed (to name just a few). The configuration will vary based on the user needs, and will be customized per asset.</>,
              <><strong>GOSS:</strong> AT&T&apos;s Global ordering system. Once an order has been submitted it is passed to GOSS, who then handles the fulfillment of this order. </>
            ]
          },
          { kind: "image", image: {src: "/images/ATT/assets/WhiteboardSession_01.png", alt: "Whiteboard Session"}}
        ]}
        />

        <ContentSection
        border={true}
        title="USER STORIES"
        subtitle="Understanding our users needs"
        col1={[
          { kind: "body", text:
            "After gathering more information about the pain-points of the existing system, we quickly realized there was a  plethora of use cases that we needed to solve for. In tandem with creating our ideal user flows, we crafted user stories to capture the necessities and goals of our target users. In doing so, we were able to point back to these stories while creating the flows, ensuring we were solving for all needs."}
        ]}
        />

        <ContentSection
        border={true}
        title="USER FLOWS"
        subtitle="Starting big"
        marginImage="md:m-10"
        listStyle="list-decimal mx-5 space-y-10"
        col1={[
          { kind: "body", text: "We dove in head first, aiming to organize the flow from start to finish with a variety of use cases. We mapped out extensive, ideal flows for the following:"},
          { kind: "numbered", items:
            [
              <>
                <strong>As a user, I want to order an ethernet asset for a new location</strong>
                <br />
                Create location {">"} Pre-quote process {">"} Review/accept quote {">"} Configure asset {">"} Verify / enter contact info for location {">"}  Schedule & Submit order
              </>,
              <>
                <strong>As a user, I want to order an ethernet asset for an existing location</strong>
                <br />
                Choose location {">"} Configure asset {">"} Verify / enter contact info for location {">"} Schedule & Submit order
              </>,
              <>
                <strong>As a user, I want to order a non-ethernet asset for a new location</strong>
                <br />
                Create location {">"} Configure asset {">"} Verify / enter contact info for location {">"} Schedule & Submit order
              </>,
              <>
                <strong>As a user, I want to order a non-ethernet asset for an existing location</strong>
                <br />
                Choose location {">"} Configure asset {">"} Verify / enter contact info for location {">"} Schedule & Submit order
              </>
            ]
          }
        ]}
        col2={[
          { kind: "blockImage", image: {src: "/images/ATT/assets/Flow_Round1_1.jpeg", alt: "Flow Round 1", mode: "lightbox"}, margin: "mx-10"},
          { kind: "blockImage", image: {src: "/images/ATT/assets/Flow_Round1_2.png", alt: "Flow Round 2", mode: "lightbox"}, margin: "mx-10"}
        ]}
        />

        <ContentSection
          border={true}
          title="USER FLOWS"
          subtitle="Narrowing our focus"
          fullSpanMarginImage="mt-15"
          col1={[
            { kind: "body", text:
              "One of the biggest asks for us when we started this engagement was to help the user achieve their end goal as quickly as possible. This meant allowing the user to complete numerous tasks at once, and leveraging already saved information. Due to this new mental model being an undertaking in itself, we scaled back on the number of use cases to solve for by eliminating the pre-quote process for the time being."
            }
          ]}
          fullSpanImage={{src: "/images/ATT/assets/BCG+_+ATT+-+Order+Accelerator+v1.2+-+Order+Accelerator+Full+Flow+(5).webp", alt: "Full Flow Order Accelerator", mode: "lightbox"}}
          />

        <ContentSection
          border={false}
          title="WIREFRAMES"
          subtitle="Diving into the details"
          fullSpanMarginImage="mt-10"
          col1={[
            { kind: "body", text:
                <>
                  Before getting too into the weeds with sifting through AT&T&apos;s visual design language, we created hi-fidelity wireframes to work through the complex functionality. In just a matter of a month our team of two designers created more than 130 hi-fidelity wireframes, along with a start to finish Invision prototype, that we shared with AT&T.
                  <br />
                  <br />
                  We also got together with all the BCG teams that were working on AT&T engagements to level set, and find discrepancies with overall design patterns.
                  <br />
                  <br />
                  <a href="public/pdf/Accpl_BCG_OA_Wires_BOOK_v5.pdf" className="text-black underline font-bold hover:text-gray-500 transition-colors ease-in-out" target="_blank">View Annotated Wires</a>
                </>
              }
            ]}
          fullSpanImage={{src: "/images/ATT/assets/AT&T_Wires_1.webp", alt: "AT&T Wires", mode: "lightbox"}}
        />

        <ContentSection
          fullSpanImage={{src: "/images/ATT/assets/IMG_8566.PNG", alt: "Wirefrane Session"}}
        />
        <ContentSection
          border={true}
          title="DESIGNS"
          listStyle="list-disc mx-5"
          subtitle="Adding AT&T standards"
          col1={[
            { kind: "body", text: "Using AT&T provided style guides, we worked to align our designs to follow their visual design standards and patterns. Simultaneously we continued to iterate on key pieces of functionality that pushed the boundaries with the current process." },
            { kind: "listTitle", text:
              <>
                <strong>Some key functionality:</strong>
                <br />
              </>
            },
            { kind: "numbered", items: [
              <>Projects</>,
              <>Apply Existing Assets</>
            ]}
          ]}
          fullSpanImage={{src: "/images/ATT/assets/AT&T_Designs_1.webp", alt: "Designs", mode: "lightbox"}}
        />

        <ContentSection
          border={true}
          title="PROJECTS"
          subtitle="Customized organization"
          col1={[
            {
              kind: "body", text: "Through user research we learned that customers can order upwards of hundreds of assets at a time, for multiple different locations. By introducing the concept of Projects, the user can organize their orders however they see fit. For instance, a customer could have one project with the purpose of ordering assets for their east coast locations , and another concurrent project focused on the west coast. With the Project Summary a customer can see all locations and assets at a high level within their project, and see where they're at within the process."
            },
            {
              kind: "blockImage", image: {src: "/images/ATT/assets/AT&T_Projects_Name.webp", alt: "Projects Name", mode: "lightbox"}, margin: "mt-15"
            }
          ]}
          col2={[
            {
              kind: "blockImage", image: {src: "/images/ATT/assets/AT&T_Projects.webp", alt: "Projects", mode: "lightbox"}, margin: "mt-15"
            },
            {
              kind: "blockImage", image: {src: "/images/ATT/assets/AT&T_ProjectSummary.webp", alt: "Project Summary", mode: "lightbox"}, margin: "mt-15"
            }
          ]}
        />

        <ContentSection
          border={true}
          title="APPLY EXISTING ASSETS"
          subtitle="Leveraging existing data"
          col1={[
            {
              kind: "body", text:
              <>
                One of the biggest pain points we wanted to solve for was the long and tedious process of creating and configuring assets, and potentially having to repeat this process over and over again. By adding the &quot;Apply Existing Assets&quot; functionality, a customer can view assets they have created in the past and apply them to their current project as template to start with. With this process it makes it easy to add many new assets to many locations with just a few clicks.
              </>
            },
            {
              kind: "blockImage", image: {src: "/images/ATT/assets/AT&T_ApplyAssets_LocationLevel.webp", alt: "Location Level", mode: "lightbox"}, margin: "mt-15"
            }
          ]}
          col2={[
            {
              kind: "blockImage", image: {src: "/images/ATT/assets/AT&T_ApplyAssets.webp", alt: "Apply Assets", mode: "lightbox"}, margin: "mt-15"
            },
            {
              kind: "blockImage", image: {src: "/images/ATT/assets/AT&T_ApplyAssets_Selected.webp", alt: "Selected", mode: "lightbox"}, margin: "mt-15"
            }
          ]}
        />

        <ContentSection
          border={false}
          title="USER TESTING"
          listStyle="list-disc mx-5 space-y-5"
          subtitle="Validating our solutions"
          col1={[
            { kind: "body", text:
              <>
                We set out to test our solutions with a variety of different users who order VPN service regularly. Our team and I put together individual Invision prototypes focused on pieces of functionality we wanted to test, and wrote scripts to guide the users through them. Through these tests we were able to validate many aspects of our current approach, as well as learn ways to improve.
              </>
            },
            { kind: "listTitle", text:
              <>
                <strong>What we learned:</strong>
                <br />
              </>
            },
            { kind: "numbered", items: [
              <>Ordering habits vary greatly from user to user. Some will only order a couple assets at a time, while others will order hundreds. We need to make sure our solution works for both use cases.</>,
              <>Users liked the idea of being able to copy assets, but the terminology and lack of helper text made this action a bit confusing.</>,
              <>The concept of a project went over well with the bulk of the users. However, with the Project Summary allowing the users to essentially choose their own path and jump around in the process, some users were getting lost.</>
            ]}
          ]}
        />

        <ImageGrid
          border={true}
          blocks={[
            { kind: "image", image: { src: "/images/ATT/assets/AT&T_UserTesting_1.webp", alt: "User Testing 1", mode: "lightbox" } },
            { kind: "image", image: { src: "/images/ATT/assets/AT&T_UserTesting_2.webp", alt: "User Testing 2", mode: "lightbox" } }
          ]}
        />

        <ContentSection
          border={true}
          title="MOVING FORWARD"
          subtitle="Continuing to impove"
          fullSpanMarginImage="mt-10"
          col1={[
            { kind: "body", text:
              <>
                With new insights and user feedback on our side, we began to work towards improving the flow by restructuring it to be a bit more linear. Though our initial approach was structured around removing road blocks as to never hold the user up, a more guided flow was necessary.
              </>
            }
          ]}
          col2={[
            { kind: "blockImage", image: {  src: "/images/ATT/assets/IMG_9225.webp", alt: "Whiteboard", mode: "lightbox"}}
          ]}
          fullSpanImage={{  src: "/images/ATT/assets/IMG_9213.webp", alt: "Whiteboard" }}
        />

        <div className="flex justify-center border-b border-gray-300 pb-15">
          <div className="max-w-xxl text-center">
            <h2 className="text-3xl mb-5 font-bold tracking-wide leading-relaxed">
              And Alas, I moved on...
            </h2>
            <p className="text-md/8 text-black leading-relaxed">
              Unfortunately I did not get to wrap up this project with my teammates.
            </p>
            <p className="text-md/8 text-black leading-relaxed">
              Not so unfortunately, I got an offer I couldn&apos;t refuse and moved to Berlin, Germany. 🇩🇪👋
            </p>
          </div>
        </div>


        <NumberedList
          spacing="space-y-1"
          blocks={[
            { kind: "title", text: "TEAM" },
            { kind: "numbered", splitAt: 3, items: [
              <><strong>Design Director: </strong>Paul Russo</>,
              <><strong>Senior UX / UI Designer: </strong>Stephanie Ciccone</>,
              <><strong>UX / UI Designer: </strong>Danni Pfitzner</>,
              <><strong>Studio: </strong>Accomplice - Austin, TX</>,
              <><strong>Date: </strong>June 2018 - November 2018</>
              ]}
          ]}
          />


      </main>
    </>
  );
}
