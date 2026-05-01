import { ReactNode } from "react";
import { AppImage } from "@/app/types/image";
import { ImageBlock } from "../ImageBlock";

type ColBlock =
  | { kind: "body"; text: ReactNode }
  | { kind: "subheader"; text: ReactNode }
  | { kind: "numbered"; items: ReactNode[] }
  | { kind: "listTitle"; text: ReactNode };

interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  col1?: ColBlock[];
  col2?: ColBlock[];
  image?: AppImage;
  fullSpanImage?: AppImage;
  fullSpanMarginImage?: string;
  border?: boolean;
  listStyle?: string;
  marginImage?: string;
  listTitleStyle?: string;
  listItemSpacing?: string;
  marginListTitle?: string;
  headerLayout?: string;
  verticalMargin?: string;
  fullspanBody?: string;
}

function renderColBlock(
  block: ColBlock,
  index: number,
  listStyle?: string,
  listTitleStyle?: string,
  listItemSpacing?: string,
  marginListTitle?: string
) {
  switch (block.kind) {
    case "body":
      return (
        <p key={index} className="text-md/8 pr-5 text-black leading-relaxed">
          {block.text}
        </p>
      );

    case "listTitle":
      return (
        <p
          key={index}
          className={`${marginListTitle} text-md/8 pr-5 text-black leading-relaxed`}
        >
          {block.text}
        </p>
      );

    case "subheader":
      return (
        <h3
          key={index}
          className={`${listTitleStyle} text-xs text-gray-400 tracking-widest mt-10 font-bold`}
        >
          {block.text}
        </h3>
      );

    case "numbered":
      return (
        <ol
          key={index}
          className={`${listStyle} my-5 text-md/8 text-black leading-relaxed ${listItemSpacing}`}
        >
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
  }
}

export default function ContentSection({
  title,
  subtitle,
  col1,
  col2,
  image,
  border,
  listStyle,
  marginImage = "items-start",
  fullSpanImage,
  fullSpanMarginImage = "",
  listTitleStyle,
  listItemSpacing,
  marginListTitle = "mt-10",
  headerLayout = "col1",
  verticalMargin = "my-10",
  fullspanBody = "flex flex-col gap-2",
}: ContentSectionProps) {
  return (
    <div
      className={`row ${verticalMargin} grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 tracking-wide ${
        border ? "border-b border-gray-300 pb-20" : ""
      }`}
    >
      {headerLayout === "full" ? (
        <>
          {/* full width header + col 1 content below */}
          <div className="col-span-full">
            {title && (
              <h3 className="text-xs mt-10 text-gray-400 tracking-widest font-bold">
                {title}
              </h3>
            )}
            {subtitle && (
              <h2 className="text-3xl mb-5 font-bold tracking-wide leading-relaxed">
                {subtitle}
              </h2>
            )}
          </div>

          <div className={fullspanBody}>
            {col1?.map((block, i) =>
              renderColBlock(
                block,
                i,
                listStyle,
                listTitleStyle,
                listItemSpacing,
                marginListTitle
              )
            )}
          </div>
        </>
      ) : (
        <>
          {/* header inside col 1 */}
          <div className="flex flex-col gap-2">
            {title && (
              <h3 className="text-xs mt-10 text-gray-400 tracking-widest font-bold">
                {title}
              </h3>
            )}
            {subtitle && (
              <h2 className="text-3xl mb-5 font-bold tracking-wide leading-relaxed">
                {subtitle}
              </h2>
            )}

            {col1?.map((block, i) =>
              renderColBlock(
                block,
                i,
                listStyle,
                listTitleStyle,
                listItemSpacing,
                marginListTitle
              )
            )}
          </div>
        </>
      )}

      {/* col 2 */}
      <div className={`${marginImage} flex flex-col gap-2`}>
        {image && <ImageBlock image={image} className="" />}

        {col2?.map((block, i) =>
          renderColBlock(
            block,
            i,
            listStyle,
            listTitleStyle,
            listItemSpacing,
            marginListTitle
          )
        )}
      </div>

      {/* full width image */}
      {fullSpanImage && (
        <div className="col-span-full">
          <ImageBlock
            image={fullSpanImage}
            className={fullSpanMarginImage}
            sizes="100vw"
          />
        </div>
      )}
    </div>
  );
}
