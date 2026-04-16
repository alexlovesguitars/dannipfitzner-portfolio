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
      <section className="mx-4 md:mx-8 lg:mx-16 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest mb-2">
          {title}
        </h1>
        <h2 className="text-lg italic tracking-wide mb-4 text-gray-500">
          {subtitle}
        </h2>
        <p className="text-md leading-relaxed">{content}</p>
      </section>
    </main>
  );
}
