import Image from "next/image";
import { ReactNode } from "react";

type ContentBlock =
  | { kind: "title"; text: string }
  | { kind: "subtitle"; text: ReactNode }
  | { kind: "body"; text: ReactNode }
  | { kind: "image"; src: string; alt: string; caption?: ReactNode }

interface ProjectPageProps {
  heroImage: string;
  heroAlt: string;
  blocks: ContentBlock[];
}

export default function ProjectPage({
  heroImage,
  heroAlt,
  blocks
}: ProjectPageProps) {
  return (
    <main>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-b border-gray-300 pb-20">

        {blocks.slice(0,2).map((block, index) => {
          switch (block.kind) {
            case "title":
              return (
                  <h1 key={index} className="text-3xl md:text-6xl font-bold mb-2">
                    {block.text}
                  </h1>
                  );
                case "subtitle":
                  return (
                    <p key={index} className="text-md/8 tracking-wide mb-4 text-black md:mb-2">
                      {block.text}
                    </p>
                  );
          };
        })}
        </div>


        <div className="row my-10 grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 tracking-wide">
          {blocks.slice(2).map((block, index) => {
            switch (block.kind) {
              case "title":
                return (
                  <h3 key={index} className="text-xs mt-10 mb-5 text-gray-400 tracking-widest font-bold md:mb-2">
                    {block.text}
                  </h3>
                );
              case "subtitle":
                return (
                  <h2 className="col-span-full text-3xl font-bold tracking-wide leading-relaxed">
                    {block.text}
                  </h2>
                );
              case "body":
                return (
                  <p key={index} className="text-md/8 my-5 text-black text-left leading-relaxed">
                    {block.text}
                  </p>
                );
              };
          })};
        </div>

        {/* Grid: image card + text card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 tracking-wide">

          {/* Fix: wrap fill image in a sized relative container, separate from the caption */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full aspect-video">
              <Image
                src={"/images/Quandoo/assets/Section01_BriefHistory01.webp"}
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
                    src={"/images/Quandoo/assets/Section01_BriefHistory02.webp"}
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
