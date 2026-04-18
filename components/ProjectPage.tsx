import { Vast_Shadow } from "next/font/google";
import Image from "next/image";

interface ProjectPageProps {
  heroImage: string;
  heroAlt: string;
  title: string;
  subtitle: string;
  content: string;
}

export default function ProjectPage({
  heroImage,
  heroAlt,
  title,
  subtitle,
  content,
}: ProjectPageProps) {
  return (
    <main>
      <section className="opacity-0 animate-fade-in-up relative w-screen h-[40vh] lg:h-screen">
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
      <section className="mx-5 md:mx-60 py-8">
        <div className="grid grid-cols-2 gap-4 items-center mb-8">
          <h1 className="text-3xl md:text-6xl font-bold mb-2">
            {title}
          </h1>
          <p className="text-lg italic tracking-wide mb-4 text-black">
            The Subway franchise started in 1965, and throughout the years became the largest fast food restaurant chain in the world with over 40,000 locations. In 2017, Subway aimed to freshen up their look with a rebrand done by Turner Duckworth. Our team at Fjord was tasked with the complete overhaul of the digital application, focused on cleanliness, usability, and new features.
          </p>
        </div>
      </section>
    </main>
  );
}
