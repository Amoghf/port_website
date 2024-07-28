'use client';

import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';

// hooks
import useScrollProgress from '@/hooks/useScrollProgress';

// variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

interface TemplateProps {
  children: ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  const completion = useScrollProgress();

  useEffect(() => {
    console.log(`Scroll completion: ${completion}%`);
  }, [completion]);

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
      >
        {children}
        {/* Adding extra content to ensure scrolling */}
        <div className="h-[2000px] bg-gray-200"></div>
      </motion.main>
      {/* completion bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
    </>
  );
};

export default Template;
