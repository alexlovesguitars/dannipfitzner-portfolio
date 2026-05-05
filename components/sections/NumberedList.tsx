import { ReactNode } from "react";
import { AppImage } from "@/app/types/image";
import { ImageBlock } from "../ImageBlock";

type ContentBlock =
  | { kind: "title"; text: string }
  | { kind: "subtitle"; text: string }
  | { kind: "body"; text: string }
  | { kind: "numbered"; items: ReactNode[]; splitAt?: number; title?: ReactNode; title2?: ReactNode }
  | { kind: "image"; image: AppImage }

interface ListProps {
  blocks: ContentBlock[];
  layout?: "default" | "inline";
  listStyle?: string;
  border?: boolean;
  imageboundary?: string;
  aspectRatio?: string;
  width?: string;
  spacing?: string;
  verticalMargin?: string;
}

export default function NumberedList({
  blocks,
  layout,
  listStyle,
  border,
  imageboundary,
  aspectRatio="aspect-video",
  width="w-full",
  spacing="space-y-5",
  verticalMargin="my-10"
}: ListProps) {
  return (
      <div className={`row ${verticalMargin} grid grid-cols-1 md:grid-cols-2 gap-0 tracking-wide ${border ? "border-b border-gray-300 pb-20" : ""}`}>
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
                  <h2 key={index} className="col-span-full text-3xl font-bold tracking-wide leading-7">
                    {block.text}
                  </h2>
                );
              case "body":
                return (
                  <p key={index} className="text-md my-5 pr-10 text-black text-left leading-7">
                    {block.text}
                  </p>
                );
              case "numbered":
                if (layout === "inline") {
                  return (
                    <ol key={index} className={`${listStyle} my-5 text-md text-black leading-7 space-y-8`}>
                      {block.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ol>
                  );
                }
                const col1 = block.splitAt ? block.items.slice(0, block.splitAt) : block.items;
                const col2 = block.splitAt ? block.items.slice(block.splitAt) : [];
                return (
                  <div key={index} className="col-span-full grid grid-cols-1 md:grid-cols-2 md:gap-8">
                    <div>
                      {block.title && <h5 className="text-md text-black font-bold">{block.title}</h5>}
                      <ol className={`${listStyle} ${spacing} text-md text-black leading-7 my-5`}>
                        {col1.map((item, i) => <li key={i}>{item}</li>)}
                      </ol>
                    </div>
                    {col2.length > 0 && (
                      <div>
                        {block.title2 && <h5 className="text-md/8 text-black font-bold">{block.title2}</h5>}
                        <ol start={col1.length + 1} className={`${listStyle} ${spacing} text-md text-black leading-7 my-5`}>
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
                      <ImageBlock
                        image={block.image}
                        className={`${width} ${aspectRatio} mx-auto ${imageboundary}`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                )
              }
            };
          })}
        </div>
  )
}
