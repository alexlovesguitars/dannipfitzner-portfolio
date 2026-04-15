import Image from "next/image";


export default function Subway() {
  return (
    <main>
      <section className="relative h-80 md:h-screen">
        <Image src="/images/Subway/Subway_Hero.webp" alt="Subway Hero Image" fill className="object-cover" sizes="100vw" loading="eager" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">Subway</h1>
          <p className="text-xl md:text-2xl tracking-wide">UI & Illustrations (2016-2017)</p>
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <p className="text-lg text-center max-w-2xl mx-auto">
          During my time at Subway, I was responsible for designing the user interface and creating illustrations for their digital platforms. This included working on the mobile app, website, and in-store kiosks. I collaborated closely with the product team to ensure that the designs were not only visually appealing but also user-friendly and aligned with Subway's brand identity. My work contributed to enhancing the overall user experience and increasing customer engagement across all digital touchpoints.
        </p>
      </section>
    </main>
  );
}
