import Image from "next/image";

export default function ATT() {
  return (
    <main>
      <section className="relative h-80 md:h-screen">
        <Image src="/images/ATT/ATT_Hero.webp" alt="AT&T Hero Image" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">AT&T</h1>
          <p className="text-xl md:text-2xl tracking-wide">UX (2018)</p>
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <p className="text-lg text-center max-w-2xl mx-auto">
          During my time at AT&T, I focused on user experience design for telecommunications products. I worked on improving the usability of mobile applications and web interfaces, conducting user testing, and creating wireframes and prototypes. My designs helped streamline customer interactions and improve overall satisfaction with AT&T's digital services.
        </p>
      </section>
    </main>
  );
}
