import { ReactNode } from "react";
import Button from "@/components/Button";
import { Lightbox } from "../Lightbox";
import { AppImage } from "@/app/types/image";

interface CaseStudy {
  subtitle: string;
  body: ReactNode;
  image: AppImage;
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

      <div className="mt-10 flex flex-col gap-5">
        <h3 className="text-xs mt-20 text-gray-400 tracking-widest font-bold">
          {title}
        </h3>
        {cases.map((c, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 items-start">

            {/* left: subtitle, body, button */}
            <div className="flex flex-col gap-5 m-auto">
              <h2 className="text-3xl font-bold tracking-wide leading-relaxed">{c.subtitle}</h2>
              <p className="text-md/8 font-light pr-15 text-black leading-relaxed">{c.body}</p>
              <Button href={c.buttonHref} label={c.buttonLabel} />
            </div>

            {/* right: image */}
            <div className="relative w-full h-auto">
              <Lightbox
                image={{
                  src: c.image.src,
                  alt: c.image.alt,
                }}
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
