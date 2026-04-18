import ProjectPage from "@/components/ProjectPage";

export default function Subway() {
  return (
    <ProjectPage
      heroImage="/images/Subway/Subway_Hero.webp"
      heroAlt="Subway Hero Image"
      title="Subway"
      subtitle={
        <>
          The Subway franchise started in 1965, and throughout the years became the largest fast food restaurant chain in the world with over 40,000 locations. In 2017, Subway aimed to freshen up their look with a rebrand done by{" "} <span className="font-bold italic">Turner Duckworth</span>. Our team at Fjord was tasked with the complete overhaul of the digital application, focused on cleanliness, usability, and new features.
        </>
      }
      content={[
        {
          title: "Project Overview",
          subtitle: "A complete digital overhaul for the Subway mobile application",
          body: (
            <p>
              At Subway, I was responsible for leading the design of the mobile application, working closely with cross-functional teams to create a seamless user experience. I collaborated with product managers and developers to implement new features, improve navigation, and enhance the overall visual design. My work contributed to increasing user engagement and satisfaction with the Subway app, helping to drive sales and customer loyalty. The project involved extensive user research, iterative design processes, and close attention to brand consistency while modernizing the app&apos;s interface.
            </p>
          )
        }
      ]}
      assetPath="/public/images/Subway/assets"
    />
  );
}
