import ProjectPage from "@/components/ProjectPage";

export default function Quandoo() {
  return (
    <ProjectPage
      heroImage="/images/Quandoo/Quandoo_Hero.webp"
      heroAlt="Quandoo Hero Image"
      assetPath="/images/Quandoo/assets"
      title="Quandoo"
      subtitle="Quandoo is working to transform the world’s dining out experience for both diners and restaurants."
      content={[
        {
          title: "Project Overview",
          subtitle: "Designing a seamless reservation experience for diners and restaurants",
          body: (
            <p>
              At Quandoo, I was responsible for leading the design of the reservation platform, working closely with cross-functional teams to create a seamless user experience. I collaborated with product managers and developers to implement new features, improve navigation, and enhance the overall visual design. My work contributed to increasing user engagement and satisfaction with the Quandoo platform, helping to drive reservations and customer loyalty. The project involved extensive user research, iterative design processes, and close attention to brand consistency while modernizing the platform&apos;s interface.
            </p>
          )
        }
      ]}
    />
  );
}
