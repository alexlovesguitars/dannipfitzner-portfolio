import { AppImage } from "@/app/types/image";
import { ImageBlock } from "@/components/ImageBlock";

type ContentBlock =
  | { kind: "image"; image: AppImage };

interface ImageGridProps {
  blocks: ContentBlock[];
  border?: boolean;
  imageDimensions?: string;
  marginImage?: string | Record<number, string>;
}

export default function ImageGrid({
  blocks,
  border,
  imageDimensions = "w-full h-auto",
  marginImage = "",
}: ImageGridProps) {

  const getMargin = (index: number): string => {
    if (typeof marginImage === "string") return marginImage;
    return marginImage[index] ?? "";
  };

  return (
    <div
      className={`grid grid-cols-1 tracking-wide md:grid-cols-2 gap-5 mt-10 ${
        border ? "border-b border-gray-300 pb-20" : ""
      }`}
    >
      {blocks.map((block, index) => {
        if (block.kind === "image") {
          return (
            <div key={index}>
              <ImageBlock
                image={block.image}
                className={`${imageDimensions} ${getMargin(index)}`}
              />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
