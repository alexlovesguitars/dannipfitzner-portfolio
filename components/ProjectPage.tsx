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
      <section className="relative h-80 md:h-screen -mt-8 md:mt-0">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
        />
      </section>
    </main>
  );
}
