'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith('/projects');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;


      if (currentScrollY < 50 || currentScrollY < lastScrollY) {
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
    <header className={`h-16 flex items-center justify-between ${isProjectPage ? `fixed top-0 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 z-50 mt-5 mb-5 bg-transparent transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}` : 'sticky top-0 z-10 mx-4 md:mx-8 lg:mx-16 mt-5 mb-5 bg-white/80 backdrop-blur-sm'}`}>
      <Link href="/" className={`text-md font-bold tracking-wider ${isProjectPage ? 'text-white' : ''}`}>DANNI PFITZNER</Link>
      <div className="flex space-x-4">
        <Link href="/" className={`text-xs font-bold tracking-wide ${isProjectPage ? 'text-white hover:text-gray-200' : 'text-gray-400 hover:text-gray-900'} active:text-gray-900 active:underline transition-colors ease-in-out duration-300`}>
          WORK
        </Link>
        <Link href="/about" className={`text-xs font-bold tracking-wide ${isProjectPage ? 'text-white hover:text-gray-200' : 'text-gray-400 hover:text-gray-900'} active:text-gray-900 active:underline transition-colors ease-in-out duration-300`}>
          ABOUT
        </Link>
      </div>
    </header>
  );
}
