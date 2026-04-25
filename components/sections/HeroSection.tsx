import Image from "next/image";

interface HeroProps {
  heroImage: string;
  heroAlt: string;
  heroTitle?: string;
  heroSubtitle?: string;
}

export default function ProjectPage({
  heroImage,
  heroAlt,
  heroTitle,
  heroSubtitle
}: HeroProps) {
  return (
    <main className="relative">
      <section className="opacity-0 animate-fade-in-up relative w-screen h-[40vh] lg:h-[100vh] overscroll-none">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
      </section>

      <section className="mx-5 pt-8 mt-5 md:mx-40 md:mt-15">
        <div className="grid grid-cols-2 gap-4 items-center border-b border-gray-300 pb-10 md:pb-20">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold mb-2">
              {heroTitle}
            </h1>
          </div>
          <div>
            <p className="text-md/8 tracking-wide mb-4 text-black md:mb-2">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
