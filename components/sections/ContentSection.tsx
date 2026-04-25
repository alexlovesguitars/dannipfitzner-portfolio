import { ReactNode } from "react";
import Image from "next/image";

type ColBlock =
  | { kind: "body"; text: ReactNode }
  | { kind: "subheader"; text: ReactNode }
  | { kind: "numbered"; items: ReactNode[] }
  | { kind: "listTitle"; text: ReactNode }

interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  col1?: ColBlock[];
  col2?: ColBlock[];
  image?: { src: string; alt: string; caption?: ReactNode };
  aspectRatio?: string;
  fullSpanImage?: { src: string; alt: string; caption?: ReactNode };
  fullSpanMarginImage?: string;
  fullSpanAspectRatio?: string;
  border?: boolean;
  listStyle?: string;
  marginImage?: string;
  listTitleStyle?: string;
}

function renderColBlock(block: ColBlock, index: number, listStyle?: string, listTitleStyle?: string,) {
  switch (block.kind) {
    case "body":
      return <p key={index} className="text-md/8 pr-5 text-black leading-relaxed">{block.text}</p>;
    case "listTitle":
      return <p key={index} className="text-md/8 pr-5 mt-10 text-black leading-relaxed">{block.text}</p>;
    case "subheader":
      return <h3 key={index} className={`${listTitleStyle} text-xs text-gray-400 tracking-widest mt-10 font-bold`}>{block.text}</h3>;
    case "numbered":
      return (
        <ol key={index} className={`${listStyle} my-5 text-md/8 text-black leading-relaxed space-y-1`}>
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      );
  }
}

export default function ContentSection2({
  title,
  subtitle,
  col1,
  col2,
  image,
  border,
  aspectRatio = "aspect-video",
  listStyle,
  marginImage="",
  fullSpanImage,
  fullSpanAspectRatio = "aspect-video",
  fullSpanMarginImage="",
  listTitleStyle
}: ContentSectionProps) {
  return (
    <div className={`row my-10 grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 tracking-wide ${border ? "border-b border-gray-300 pb-20" : ""}`}>

      {/* col 1 */}
      <div className="flex flex-col gap-2">

        <div>
          {title && <h3 className="col-span-full text-xs mt-10 text-gray-400 tracking-widest font-bold">{title}</h3>}
          {subtitle && <h2 className="col-span-full text-3xl mb-5 font-bold tracking-wide leading-relaxed">{subtitle}</h2>}
        </div>

        {col1?.map((block, i) => renderColBlock(block, i, listStyle, listTitleStyle))}
      </div>

      {/* col 2 */}
      <div className="flex items-start flex-col gap-2">
        {image && (
          <div className={`relative w-full ${aspectRatio}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover ${marginImage}`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        {image?.caption && <p className="text-md/8 text-black leading-relaxed">{image.caption}</p>}
        {col2?.map((block, i) => renderColBlock(block, i, listStyle, listTitleStyle))}
      </div>

      {/* full column span image */}
      {fullSpanImage && <div className="col-span-full">
        <div className={`relative w-full ${fullSpanAspectRatio}`}>
            <Image
              src={fullSpanImage.src}
              alt={fullSpanImage.alt}
              fill
              className={`object-cover ${fullSpanMarginImage}`}
              sizes="100vw"
            />
          </div>
      </div>}
    </div>
  );
}
