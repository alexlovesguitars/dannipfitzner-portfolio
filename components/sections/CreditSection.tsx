import { ReactNode } from "react";

interface CreditProps {
  layout?: "default" | "inline";
  listStyle?: string;
  title: string;
  subtitle: string;
  sectionHeader1: ReactNode;
  sectionHeader2: ReactNode;
  numbered1: ReactNode[];
  numbered2: ReactNode[];
}

export default function CreditSection({
  listStyle,
  title,
  subtitle,
  sectionHeader1,
  sectionHeader2,
  numbered1,
  numbered2
}: CreditProps) {
  return (
    <div className="row my-10 grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
      <div>
        <h3 className="col-span-full text-xs mt-10 text-gray-400 tracking-widest font-bold">
          {title}
        </h3>

        <h2 className="col-span-full text-3xl font-bold tracking-wide leading-relaxed">
          {subtitle}
        </h2>
      </div>

      <div className="col-span-full grid grid-cols-1 md:grid-cols-2 md:gap-8">

        <div>
          <p className="text-md/8 my-5 pr-10 text-black text-left leading-relaxed">
            {sectionHeader1}
          </p>

          <ol className={`${listStyle} my-5 pl-5 text-md/8 text-black leading-relaxed space-y-3`}>
            {numbered1.map((item, i) => <li key={i}>{item}</li>)}
          </ol>
        </div>

        <div>
          <p className="text-md/8 my-5 pr-10 text-black text-left leading-relaxed">
            {sectionHeader2}
          </p>

          <ol className={`${listStyle} my-5 pl-5 text-md/8 text-black leading-relaxed space-y-3`}>
            {numbered2.map((item, i) => <li key={i}>{item}</li>)}
          </ol>
        </div>

      </div>

    </div>

  )
}
