import { HeroContent } from "@/app/types/hero";

interface CaseStudyHeroProps {
  content: HeroContent;
}

export default function CaseStudyHero({ content }: CaseStudyHeroProps) {
  return (
    <main className="relative pt-25">
      <div className="row grid grid-cols-1 gap-4 items-center border-b border-gray-300 pb-10 md:pb-20">
        <h1 className="text-3xl md:text-6xl font-bold mb-2">
          {content.title}
        </h1>
        <p className="text-md leading-7 tracking-wide mb-4 text-black md:mb-2">
          {content.subtitle}
        </p>
      </div>
    </main>
  );
}
