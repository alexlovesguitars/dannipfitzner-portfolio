import Image from "next/image";
import {  ReactNode } from "react";

interface HeroProps {
  heroImage: string;
  heroAlt: string;
  heroTitle?: string;
  heroSubtitle?: ReactNode;
  heroBackground?: string;
  largeScreen?: string;
}

export default function ProjectPage({
  heroImage,
  heroAlt,
  heroTitle,
  heroSubtitle,
  heroBackground="bg-[]",
  largeScreen="md:w-3/5"
}: HeroProps) {
  return (
    <main className="relative">
      <section className={`opacity-0 animate-fade-in-up relative w-screen h-[40vh] lg:h-[100vh] flex items-center justify-center overflow-hidden ${heroBackground}`}>
        <Image
          src={heroImage}
          alt={heroAlt}
          width={1600}
          height={900}
          className={`object-contain w-full ${largeScreen} h-auto`}
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
      </section>

      <section className="mx-5 pt-8 mt-5 md:mx-55 md:mt-15">
        <div className="grid grid-cols-1 space-y-5 md:grid-cols-2 gap-4 items-center border-b tracking-wide border-gray-300 pb-10 md:pb-20">
          <div>
            <h1 className="text-3xl md:text-7xl font-bold mb-2">
              {heroTitle}
            </h1>
          </div>
          <div>
            <p className="text-md/8 tracking-wide mb-4 text-black md:mb-2 md:pr-10 leading-8">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
