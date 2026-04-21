import { ReactNode } from "react";

interface IntroSectionProps {
  title: string;
  subtitle: string;
  body: ReactNode;
}

export default function IntroSection({
  title,
  subtitle,
  body
}: IntroSectionProps) {
  return (
      <div className="row grid grid-cols-1 md:grid-cols-2 gap-2 tracking-wide">
        <h3 className="text-xs md:mt-10 text-gray-400 tracking-widest font-bold">
          {title}
        </h3>
        <h2 className="col-span-full text-3xl font-bold tracking-wide leading-relaxed">
          {subtitle}
        </h2>
        <p className="text-md/8 my-5 pr-10 text-black text-left leading-relaxed">
          {body}
        </p>
      </div>
  );
}
