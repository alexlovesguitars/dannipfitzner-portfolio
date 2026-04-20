import Image from "next/image";
import { ReactNode } from "react";

type ContentBlock =
  | { kind: "title"; text: string }
  | { kind: "subtitle"; text: ReactNode }
  | { kind: "body"; text: ReactNode }
  | { kind: "numbered"; items: ReactNode[]; splitAt?: number }
  | { kind: "image"; src: string; alt: string; caption?: ReactNode }
  | { kind: "divider" }

interface ProjectProps {
  heroImage: string;
  heroAlt: string;
  blocks: ContentBlock[];
}

export default function ProjectPage({
  heroImage,
  heroAlt,
  blocks
}: ProjectProps) {
  return (
    // <main>
    //   <section className="opacity-0 animate-fade-in-up relative w-screen h-[40vh] lg:h-[100vh] overscroll-none">
    //     <Image
    //       src={heroImage}
    //       alt={heroAlt}
    //       fill
    //       className="object-cover"
    //       sizes="100vw"
    //       loading="eager"
    //       fetchPriority="high"
    //     />
    //   </section>
    // </main>

      <section className="mx-5 md:mx-55 py-8 my-15">


        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-b border-gray-300 pb-20">

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
        </div> */}


        <div className="row my-10 grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 tracking-wide">
          {blocks.slice(2, 4).map((block, index) => {
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
          })}
        </div>



        {/* Grid: image card + text card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 tracking-wide border-b border-gray-300 pb-20">

          {/* Fix: wrap fill image in a sized relative container, separate from the caption */}
          {blocks.slice(4, 9).map((block, index) => {
            if (block.kind === "image") {
              return (
                <div key={index} className="flex flex-col gap-3">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      className="object-cover mb-5"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {block.caption && (
                    <p className="text-md/8 my-10 text-black leading-relaxed">
                      {block.caption}
                    </p>
                  )}
                </div>
              );
            }
          })}

        </div>

        <div className="row my-10 grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 tracking-wide border-b border-gray-300 pb-20">
          {blocks.slice(9, 12).map((block, index) => {
            switch (block.kind) {
              case "title":
                return (
                  <h3 key={index} className="text-xs mt-10 mb-5 text-gray-400 tracking-widest font-bold md:mb-2">
                    {block.text}
                  </h3>
                );
              case "subtitle":
                return (
                  <h2 key={index} className="col-span-full text-3xl font-bold tracking-wide leading-relaxed">
                    {block.text}
                  </h2>
                );
              case "numbered":
                const col1 = block.splitAt ? block.items.slice(0, block.splitAt) : block.items;
                const col2 = block.splitAt ? block.items.slice(block.splitAt) : [];
                return (
                  <div key={index} className="col-span-full grid grid-cols-1 md:grid-cols-2 md:gap-8">
                    <ol className="my-5 text-md/8 text-black leading-relaxed space-y-8">
                      {col1.map((item, i) => <li key={i}>{item}</li>)}
                    </ol>
                    {col2.length > 0 && (
                      <ol start={col1.length + 1} className="my-5 text-md/8 text-black leading-relaxed space-y-8">
                        {col2.map((item, i) => <li key={i}>{item}</li>)}
                      </ol>
                    )}
                  </div>
                );
            };
          })}
        </div>

        <div className="row my-10 grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 tracking-wide border-b border-gray-300 pb-20">
          {blocks.slice(12).map((block, index) => {
            switch (block.kind) {
              case "title":
                return (
                  <h3 key={index} className="text-xs mt-10 mb-5 text-gray-400 tracking-widest font-bold md:mb-2">
                    {block.text}
                  </h3>
                );
              case "subtitle":
                return (
                  <h2 key={index} className="col-span-full text-3xl font-bold tracking-wide leading-relaxed">
                    {block.text}
                  </h2>
                );
              case "body":
                return (
                  <p key={index} className="text-md/8 my-5 text-black text-left leading-relaxed">
                    {block.text}
                  </p>
                );
              case "numbered":
                return (
                  <div key={index} className="col-start-2">
                    <ol key={index} className="my-5 text-md/8 text-black leading-relaxed space-y-8">
                      {block.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ol>
                  </div>
                );
            };
          })}
        </div>

      </section>
    </main>
  );
}
