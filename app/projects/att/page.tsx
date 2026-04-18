import ProjectPage from "@/components/ProjectPage";

export default function ATT() {
  return (
    <ProjectPage
      heroImage="/images/ATT/ATT_Hero.webp"
      heroAlt="AT&T Hero Image"
      title="AT&T"
      subtitle={
        <>
          AT&T is one of the worlds largest communications companies, providing a range of services from phone, internet, cable, VPN, and many more. Our involvement with AT&T began when{" "} <span className="font-bold italic">Boston Consulting Group (BCG)</span> approached us to team up with them on their{" "} <span className="font-bold italic">Order Accelerator</span> project, centered around improving the process of ordering AT&T VPN services.
        </>
      }
        content={[
          {
            title: "Overview",
            subtitle: "Order Accelerator",
            body: (
              <p>
                The goal of Order Accelerator (OA) is to make placing an order for AT&T products and services faster than the current process by streamlining the flow through leveraging existing data. With the current system, customers tread through a convoluted and dated process of filling out potentially thousands of fields in a spreadsheet, and submitting this information for AT&T sellers and order handlers to then process manually. Other systems, like AT&T&apos;s Business Center, have been created to try to address these issues, but failed to reduce burden on the users, forcing them to continue with their spreadsheet system.
              </p>
            )
          }
        ]}
      assetPath="/public/images/ATT/assets"
    />
  );
}
