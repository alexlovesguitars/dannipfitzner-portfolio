import Image from "next/image";

export default function About() {
  return (
    <main className="mx-2 md:mx-35 px-4 md:px-12 lg:px-16 py-8">
      <div className="opacity-0 animate-fade-in-up bg-white rounded-xs w-full h-full backdrop-blur-sm hover:backdrop-blur-none transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-35 items-center">

          {/* Image column */}
          <div className="relative px-30 w-full aspect-[12/12]">
            <Image
              src="/images/About/DanniPfitzner_Avatar.webp"
              alt="Danni Pfitzner"
              fill
              className="object-cover rounded-sm"
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Text column */}
          <div className="text-left">
            <h1 className="text-3xl md:text-6xl font-bold mb-8">
              {`Hi, I'm Danni.`}
            </h1>

            <p className="text-md leading-relaxed text-gray-700">
              {`I'm a product designer residing in Berlin Germany, where I strive to create thoughtful, empathetic solutions.`}
            </p>

            <p className="text-md leading-relaxed text-gray-700 mt-6">
              {`An expat from Texas, in my free time you can find me searching for the best bbq Berlin has to offer.`}
            </p>

            <p className="text-md leading-relaxed text-gray-700 mt-6 mb-10">
              {`Currently at:`}{" "}
              <a href="https://helloclue.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Clue by BioWink GmbH
              </a>
            </p>

            <p className="mb-6">
              <a href="/public" className="text-black underline font-bold hover:text-gray-500 transition-colors ease-in-out">
                View Resumé
              </a>
            </p>

            <p>
              <a href="https://www.linkedin.com/in/dannikirchoff/" target="_blank" rel="noopener noreferrer" className="text-black underline font-bold hover:text-gray-500 transition-colors ease-in-out">
                View LinkedIn
              </a>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
