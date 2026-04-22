import { ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/Button";

interface CaseStudy {
  subtitle: string;
  body: ReactNode;
  image: { src: string; alt: string };
  buttonLabel: string;
  buttonHref: string;
}

interface CaseStudiesProps {
  title: string;
  cases: CaseStudy[];
}

export default function CaseStudies({ title, cases }: CaseStudiesProps) {
  return (
    <div>
      <h3 className="text-xs mt-20 text-gray-400 tracking-widest font-bold">
        {title}
      </h3>

      <div className="mt-10 flex flex-col gap-5">
        {cases.map((c, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* left: subtitle, body, button */}
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-bold tracking-wide leading-relaxed">{c.subtitle}</h2>
              <p className="text-md/8 font-light pr-15 text-black leading-relaxed">{c.body}</p>
              <Button href={c.buttonHref} label={c.buttonLabel} />
            </div>

            {/* right: image */}
            <div className="relative w-full aspect-[16/12]">
              <Image
                src={c.image.src}
                alt={c.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
