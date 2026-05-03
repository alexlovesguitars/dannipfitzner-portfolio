import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Danni Pfitzner | Product Designer",
    template: "%s | Danni Pfitzner",  // page titles become e.g. "Global Payments | Danni Pfitzner"
  },
  description: "The design portfolio of Danni Pfitzner, a product designer based in Berlin.",
  keywords: ["product design", "UX design", "UI design", "Berlin", "portfolio"],
  authors: [{ name: "Danni Pfitzner" }],
  creator: "Danni Pfitzner",

  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://dannipfitzner.design",
    siteName: "Danni Pfitzner",
    title: "Danni Pfitzner | Product Designer",
    description: "The design portfolio of Danni Pfitzner, a product designer based in Berlin.",
    images: [
      {
        url: "/og-image.png",  // add a 1200x630px preview image to your /public folder
        width: 1200,
        height: 630,
        alt: "Danni Pfitzner | Product Designer",
      },
    ],
  },

  // controls search engine indexing
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
