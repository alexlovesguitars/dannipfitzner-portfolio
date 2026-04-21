import Image from "next/image";
import { ReactNode } from "react";

type ContentBlock =
  | { kind: "image"; src: string; alt: string; caption?: ReactNode }

interface ImageGridProps {
  blocks: ContentBlock[];
  border?: boolean;
}

export default function ImageGrid({
  blocks,
  border
}: ImageGridProps) {
  return (

    <div className={`grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 tracking-wide ${border ? "border-b border-gray-300 pb-20" : ""}`}>

    {blocks.slice().map((block, index) => {
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
                  <p className="text-md/8 my-10 pr-10 text-black leading-relaxed">
                    {block.caption}
                  </p>
                  )}

            </div>
            );
          }
        })}
      </div>
  );
}
