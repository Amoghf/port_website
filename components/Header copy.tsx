'use client';
import React, { useEffect, useState } from 'react';

// components
import ThemeToggler from './ThemeToggler';
import Logo from './Logo';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Dependency array is empty to run effect only once on mount

  return (
    <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} 
    sticky top-0 z-30 transition-all
     ${pathname==='/' && 'bg-[#fef9f5]'}`}>

      
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative text-black dark:text-white hover:text-primary dark:hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary dark:bg-primary w-full"
            />
                  <ThemeToggler />
            <div className="xl:hidden">

              
                  <MobileNav />
            </  div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
