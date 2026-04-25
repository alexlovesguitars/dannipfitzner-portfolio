'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isProjectPage = /^\/projects\/[^/]+$/.test(pathname);
  const isHome = pathname === '/';
  const isAbout = pathname === '/about';
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;


      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {

        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    if (isProjectPage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY, isProjectPage]);

  return (
    <header className={`h-16 flex items-center justify-between ${isProjectPage ? `fixed top-0 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 z-50 py-5 md:py-16 bg-transparent transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}` : 'sticky top-0 z-10 mx-4 md:mx-8 lg:mx-20 py-5 md:py-16 bg-white/80 backdrop-blur-sm'}`}>
      <Link href="/" className={`text-md font-bold tracking-wider ${isProjectPage ? 'text-white' : ''}`}>DANNI PFITZNER</Link>
      <div className="flex space-x-2">
        <Link
          href="/"
          className={`text-xs font-bold tracking-wide transition-colors ease-in-out duration-300 ${
            isHome
              ? 'text-gray-900 underline'
              : isProjectPage
              ? 'text-white hover:text-gray-200'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          WORK
        </Link>
        <Link
          href="/about"
          className={`text-xs font-bold tracking-wide transition-colors ease-in-out duration-300 ${
            isAbout
              ? 'text-gray-900 underline'
              : isProjectPage
              ? 'text-white hover:text-gray-200'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          ABOUT
        </Link>
      </div>
    </header>
  );
}
