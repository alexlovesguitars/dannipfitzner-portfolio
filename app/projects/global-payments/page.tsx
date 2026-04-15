import Image from "next/image";

export default function GlobalPayments() {
  return (
    <main>
      <section className="relative h-80 md:h-screen">
        <Image src="/images/GlobalPayments/GP_Hero.webp" alt="Global Payments Hero Image" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">Global Payments</h1>
          <p className="text-xl md:text-2xl tracking-wide">UI & Illustrations (2016)</p>
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <p className="text-lg text-center max-w-2xl mx-auto">
          At Global Payments, I was responsible for designing user interfaces and creating custom illustrations for payment processing platforms. I collaborated with developers to ensure pixel-perfect implementations and worked on branding elements that enhanced the company's visual identity. My illustrations were used across marketing materials and product interfaces.
        </p>
      </section>
    </main>
  );
}
