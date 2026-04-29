import Image from "next/image";
import { ReactNode } from "react";
import { Lightbox } from "../Lightbox";

type ContentBlock =
  | { kind: "image"; src: string; alt: string; caption?: ReactNode }

interface ImageGridProps {
  blocks: ContentBlock[];
  border?: boolean;
  imageDimensions?: string;
  marginImage?: string;
}

export default function ImageGrid({
  blocks,
  border,
  imageDimensions="w-full h-auto",
  marginImage=""
}: ImageGridProps) {
  return (

    <div className={`grid grid-cols-1 tracking-wide md:grid-cols-2 gap-2 mt-10 ${border ? "border-b border-gray-300 pb-20" : ""}`}>
    {blocks.length > 1}
    {blocks.slice().map((block, index) => {
      if (block.kind === "image") {
        return (
          <div key={index} className="flex flex-col gap-3">
            <div className="relative w-full aspect-video">
              <Lightbox image={{ src: block.src, alt: block.alt }} />
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
