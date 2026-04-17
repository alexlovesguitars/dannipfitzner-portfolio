import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard() {

  const projects = [
  {
    id: 1,
    title: "Quandoo",
    description: "Product Design (2019-2022)",
    image: "/images/Quandoo/Quandoo_Hero.webp",
    slug: "projects/quandoo",
  },
  {
    id: 2,
    title: "Subway",
    description: "UI & Illustrations (2016-2017)",
    image: "/images/Subway/Subway_Hero.webp",
    slug: "projects/subway",
  },
  {
    id: 3,
    title: "AT&T",
    description: "UX (2018)",
    image: "/images/ATT/ATT_Hero.webp",
    slug: "projects/att",
  },
  {
    id: 4,
    title: "Global Payments",
    description: "UI & Illustrations (2016)",
    image: "/images/GlobalPayments/GP_Hero.webp",
    slug: "projects/global-payments",
  },
  {
    id: 5,
    title: "Goldman Sachs",
    description: "UI, UX & Client Relations (2017-2018)",
    image: "/images/GoldmanSachs/GS_Hero.webp",
    slug: "projects/goldman-sachs",
  },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link key={project.id} href={`/${project.slug}`} className="block">
            <div
              className="opacity-0 animate-fade-in-up bg-white rounded-xs w-full h-full backdrop-blur-sm hover:backdrop-blur-none transition-all duration-300"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative w-full aspect-[14/10]">
                <div className="bg-gray-200 opacity-100 hover:opacity-75 transition-opacity duration-300">
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="50vw" loading="eager" fetchPriority="high"/>
                </div>
              </div>
              <div className="flex flex-row justify-center p-4">
                <h5 className="text-md font-bold mb-2 mt-2 tracking-widest">
                  {project.title}  | <span className="text-sm tracking-widest italic font-normal text-black-400">{project.description}</span>
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
  );
}
