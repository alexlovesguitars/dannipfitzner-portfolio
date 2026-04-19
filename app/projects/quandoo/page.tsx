import ProjectPage from "@/components/ProjectPage";

export default function Quandoo() {
  return (
    <ProjectPage
      heroImage="/images/Quandoo/Quandoo_Hero.webp"
      heroAlt="Quandoo Hero Image"
      blocks={[
        { kind: "title", text: "Quandoo" },
        {
          kind: "subtitle",
          text: "Quandoo is working to transform the world's dining out experience for both diners and restaurants.",
        },
        { kind: "title", text: "A BRIEF HISTORY" },
        { kind: "subtitle", text: "How it all started (for me)" },
        {
          kind: "body",
          text: "When I joined Quandoo's B2B team we were offering an extensive suite of products for our restaurant partners based on different segments of the market, and different user needs.",
        },
        {
          kind: "image",
          src: "/images/Quandoo/assets/Section01_BriefHistory01.webp",
          alt: "Business Center (BC)",
          caption: (
            <>
              <strong>Business Center (BC):</strong> A web platform used mostly
              for setting up restaurant specifics and managing reservations.
            </>
          ),
        },
      ]}
    />
  );
}
