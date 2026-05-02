import HeroSection from "@/components/sections/HeroSection";
import NumberedList from "@/components/sections/NumberedList";
import ContentSection from "@/components/sections/ContentSection";

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
        border={true}
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
        marginImage="m-10"
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
