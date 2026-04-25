import { ReactNode } from "react";


interface HeroProps {
  heroTitle?: string;
  heroSubtitle?: ReactNode;
}

export default function CaseStudyHero({
  heroTitle,
  heroSubtitle
}: HeroProps) {
  return (
    <main className="relative pt-25">
        <div className="row grid grid-cols-1 gap-4 items-center border-b border-gray-300 pb-10 md:pb-20">
          <h1 className="text-3xl md:text-6xl font-bold mb-2">
            {heroTitle}
          </h1>
          <p className="text-md/8 tracking-wide mb-4 text-black md:mb-2">
            {heroSubtitle}
          </p>
        </div>
    </main>
  );
}
