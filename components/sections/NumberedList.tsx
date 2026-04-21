import Image from "next/image";
import { ReactNode } from "react";



type ContentBlock =
  | { kind: "title"; text: string }
  | { kind: "subtitle"; text: string }
  | { kind: "body"; text: string }
  | { kind: "numbered"; items: ReactNode[]; splitAt?: number; title?: ReactNode; title2?: ReactNode }
  | { kind: "image"; src: string; alt: string; caption?: ReactNode }

interface ListProps {
  blocks: ContentBlock[];
  layout?: "default" | "inline";
  listStyle?: string;
  border?: boolean;
  imageboundary?: string;
}

export default function NumberedList({
  blocks,
  layout,
  listStyle,
  border,
  imageboundary
}: ListProps) {
  return (
      <div className={`row my-10 grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 tracking-wide ${border ? "border-b border-gray-300 pb-20" : ""}`}>
          {blocks.slice().map((block, index) => {
            switch (block.kind) {
              case "title":
                return (
                  <h3 key={index} className="text-xs mt-10 text-gray-400 tracking-widest font-bold">
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
                  <p key={index} className="text-md/8 my-5 pr-10 text-black text-left leading-relaxed">
                    {block.text}
                  </p>
                );
              case "numbered":
                if (layout === "inline") {
                  return (
                    <ol key={index} className={`${listStyle} my-5 text-md/8 text-black leading-relaxed space-y-8`}>
                      {block.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ol>
                  );
                }
                const col1 = block.splitAt ? block.items.slice(0, block.splitAt) : block.items;
                const col2 = block.splitAt ? block.items.slice(block.splitAt) : [];
                return (
                  <div key={index} className="col-span-full grid grid-cols-1 md:grid-cols-2 md:gap-8">
                    <div>
                      {block.title && <h5 className="text-md/8 text-black font-bold">{block.title}</h5>}
                      <ol className={`${listStyle} my-5 text-md/8 text-black leading-relaxed space-y-8`}>
                        {col1.map((item, i) => <li key={i}>{item}</li>)}
                      </ol>
                    </div>
                    {col2.length > 0 && (
                      <div>
                        {block.title2 && <h5 className="text-md/8 text-black font-bold">{block.title2}</h5>}
                        <ol start={col1.length + 1} className={`${listStyle} my-5 text-md/8 text-black leading-relaxed space-y-8`}>
                          {col2.map((item, i) => <li key={i}>{item}</li>)}
                        </ol>
                      </div>
                    )}
                  </div>
                );
              case "image":
                if (block.kind === "image") {
                return (
                <div key={index} className="col-span-full">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      className={`object-cover ${imageboundary}`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      />
                        </div>
                          {block.caption && (
                            <p className="my-10 font-bold text-black">
                              {block.caption}
                            </p>
                          )}
                        </div>
                )
              }
            };
          })}
        </div>
  )
}
