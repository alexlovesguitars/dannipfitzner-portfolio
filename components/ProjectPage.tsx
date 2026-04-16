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
      <section className="opacity-0 animate-fade-in-up relative h-80 md:h-screen pt-16 md:pt-0">
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
    </main>
  );
}
