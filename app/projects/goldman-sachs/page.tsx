import Image from "next/image";

export default function GoldmanSachs() {
  return (
    <main>
      <section className="relative h-80 md:h-screen">
        <Image src="/images/GoldmanSachs/GS_Hero.webp" alt="Goldman Sachs Hero Image" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">Goldman Sachs</h1>
          <p className="text-xl md:text-2xl tracking-wide">UI, UX & Client Relations (2017-2018)</p>
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <p className="text-lg text-center max-w-2xl mx-auto">
          At Goldman Sachs, I worked on financial technology interfaces, focusing on user experience design and client relationship management. I designed intuitive dashboards for complex financial data visualization, conducted user research with institutional clients, and collaborated with engineering teams to implement responsive web applications. My work improved client satisfaction and operational efficiency.
        </p>
      </section>
    </main>
  );
}
