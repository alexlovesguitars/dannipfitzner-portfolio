import { ReactNode } from "react";
import { AppImage } from "@/app/types/image";
import { ImageBlock } from "../ImageBlock";

type ColBlock =
  | { kind: "body"; text: ReactNode }
  | { kind: "subheader"; text: ReactNode }
  | { kind: "numbered"; items: ReactNode[] }
  | { kind: "listTitle"; text: ReactNode }
  | { kind: "blockImage"; image: AppImage; margin?: string; className?: string; }

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
  theme?: "light" | "dark";
  className?: string;
}

function renderColBlock(
  block: ColBlock,
  index: number,
  listStyle?: string,
  listTitleStyle?: string,
  listItemSpacing?: string,
  marginListTitle?: string,
  theme?: "light" | "dark",
) {

  const textColor = theme === "dark" ? "text-white" : "text-black";

  switch (block.kind) {
    case "body":
      return (
        <p key={index} className={`text-md leading-7 pr-5 ${textColor}`}>
          {block.text}
        </p>
      );

    case "listTitle":
      return (
        <p
          key={index}
          className={`${marginListTitle} text-md leading-relaxed pr-5 ${textColor}`}
        >
          {block.text}
        </p>
      );

    case "subheader":
      return (
        <h3
          key={index}
          className={`${listTitleStyle} text-xs mt-10 ${theme === "dark" ? "text-gray-300" : "text-gray-400"} tracking-widest font-bold`}
        >
          {block.text}
        </h3>
      );

    case "numbered":
      return (
        <ol
          key={index}
          className={`${listStyle} my-5 text-md ${textColor} leading-relaxed ${listItemSpacing}`}
        >
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case "blockImage":
      return (
        <div key={index} className={`${block.margin ?? ""} flex flex-col gap-2`}>
          <ImageBlock image={block.image} className={block.className ?? ""} />
        </div>
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
  theme="light"
}: ContentSectionProps) {

  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (

    <div
      className={`row ${verticalMargin} grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 tracking-wide ${
        border ? "border-b border-gray-300 pb-20" : ""
      }`}
    >
      {headerLayout === "full" ? (
        <>
          {/* full width header + col 1 content below */}
          <div className="col-span-full flex flex-col gap-2">
            {title && (
              <h3 className={`text-xs mt-10 ${theme === "dark" ? "text-white" : "text-gray-400"} tracking-widest font-bold`}>
                {title}
              </h3>
            )}
            {subtitle && (
              <h2 className={`text-3xl mb-5 font-bold tracking-wide leading-relaxed ${textColor}`}>
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
                marginListTitle,
                theme
              )
            )}
          </div>
        </>
      ) : (
        <>
          {/* header inside col 1 */}
          <div className="flex flex-col gap-2">
            {title && (
              <h3 className={`text-xs mt-10 ${theme === "dark" ? "text-gray-300" : "text-gray-400"} tracking-widest font-bold`}>
                {title}
              </h3>
            )}
            {subtitle && (
              <h2 className={`text-3xl mb-5 font-bold tracking-wide leading-relaxed ${textColor}`}>
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
                marginListTitle,
                theme
              )
            )}
          </div>
        </>
      )}

      {/* col 2 */}
      <div className={`${marginImage} flex flex-col gap-2 w-full`}>
        {image && <ImageBlock image={image} className="w-full" />}

        {col2?.map((block, i) =>
          renderColBlock(
            block,
            i,
            listStyle,
            listTitleStyle,
            listItemSpacing,
            marginListTitle,
            theme
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
