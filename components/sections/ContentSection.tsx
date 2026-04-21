import { ReactNode } from "react";
import Image from "next/image";

interface ContentSectionProps {
  title: string;
  subtitle: string;
  col1body: ReactNode;
  col1subheader?: ReactNode;
  col1subbody?: ReactNode;
  col2body?: ReactNode;
  col2subheader?: ReactNode;
  col2subbody?: ReactNode;
  image?: { src: string; alt: string; caption?: ReactNode };
}

export default function ContentSection({
  title,
  subtitle,
  col1body,
  col1subheader,
  col1subbody,
  col2body,
  col2subheader,
  col2subbody,
  image,
}: ContentSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-2 tracking-wide border-b border-gray-300 pb-20">

      <h3 className="col-span-full text-xs mt-10 text-gray-400 tracking-widest font-bold">
        {title}
      </h3>
      <h2 className="col-span-full text-3xl mb-5 font-bold tracking-wide leading-relaxed">
          {subtitle}
      </h2>


      {/* col 1 */}
      <div className="flex flex-col gap-5">

        <p className="text-md/8 pr-5 text-black leading-relaxed">{col1body}</p>
        {col1subheader && <h3 className="text-xs text-gray-400 tracking-widest font-bold">{col1subheader}</h3>}
        {col1subbody && <p className="text-md/8 pr-5 text-black leading-relaxed">{col1subbody}</p>}
      </div>

      {/* col 2 */}
      <div className="flex items-start flex-col gap-5">
        {image && (
          <div className="relative w-full aspect-video">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        {image?.caption && <p className="text-md/8 text-black leading-relaxed">{image.caption}</p>}
        {col2body && <p className="text-md/8 text-black leading-relaxed">{col2body}</p>}
        {col2subheader && <h3 className="text-xs text-gray-400 tracking-widest font-bold">{col2subheader}</h3>}
        {col2subbody && <p className="text-md/8 pr-5 text-black leading-relaxed">{col2subbody}</p>}
      </div>

    </div>
  );
}
