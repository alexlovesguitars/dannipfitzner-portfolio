import Image from "next/image";
import { ReactNode } from "react";

interface ContentSection {
  title: string;
  subtitle: string;
  body: ReactNode;
}

interface ProjectPageProps {
  heroImage: string;
  heroAlt: string;
  title: string;
  subtitle: ReactNode;
  content: ContentSection[];
  assetPath: string;
}

export default function ProjectPage({
  heroImage,
  heroAlt,
  title,
  subtitle,
  content,
  assetPath,
}: ProjectPageProps) {
  return (
    <main>
      {/* Hero — fill is fine here because the section has a defined height */}
      <section className="opacity-0 animate-fade-in-up relative w-screen h-[40vh] lg:h-[100vh] overscroll-none">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
      </section>

      <section className="mx-5 md:mx-60 py-8 my-15">
        {/* Title / subtitle row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-b border-gray-300 pb-20">
          <h1 className="text-3xl md:text-6xl font-bold mb-2">{title}</h1>
          <p className="text-md/8 tracking-wide mb-4 text-black md:mb-2 md:pr-20">{subtitle}</p>
        </div>

        {/* Brief history intro */}
        <div className="row my-10">
          <h3 className="text-xs mt-10 mb-5 text-gray-400 tracking-widest font-bold md:mb-2">
              A BRIEF HISTORY
            </h3>
            <h2 className="text-3xl font-bold tracking-wide leading-relaxed">
              How it all started (for me)
            </h2>
            <p className="text-md/8 my-5 text-black leading-relaxed">
              When I joined Quandoo&apos;s B2B team we were offering an extensive suite
              of products for our restaurant partners based on different segments
              of the market, and different user needs.
            </p>
        </div>

        {/* Grid: image card + text card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 tracking-wide ">

          {/* Fix: wrap fill image in a sized relative container, separate from the caption */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full aspect-video">
              <Image
                src={`${assetPath}/Section01_BriefHistory01.webp`}
                alt="Business Center (BC)"
                fill
                className="object-cover mb-5"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="text-md/8 my-5 text-black leading-relaxed">
              <strong>Business Center (BC):</strong> A web platform used mostly
              for setting up restaurant specifics, managing reservation
              enquiries, viewing reservations, creating reservations and
              reporting. Targeted for restaurant managers in office settings, or
              reservation call centers (not during service).
            </p>
          </div>

            <div className="flex flex-col gap-3">
              <div className="relative w-full aspect-video">
                  <Image
                    src={`${assetPath}/Section01_BriefHistory02.webp`}
                    alt="Business Center (BC)"
                    fill
                    className="object-cover mb-5"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-md/8 my-5 text-black leading-relaxed">
                  <strong>Chain Center (CC):</strong>  Intended for use in parallel with Business Center, with the additional features of chain management for restaurants with multiple locations.
                </p>
              </div>
          <div>
            <h3 className="text-lg font-bold mb-2">The Solution</h3>
            <p className="text-md/8 text-black leading-relaxed">
              By consolidating our products and focusing on the core needs of
              our restaurant partners, we were able to create a more intuitive
              and effective solution.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
