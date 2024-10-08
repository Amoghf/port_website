'use client';

import CountUp from 'react-countup';
import React from 'react';

// Define the types for the props
interface BadgeProps {
  containerStyles?: string;   // Optional
  icon?: React.ReactNode;     // Optional, assuming you're passing a React component as an icon
  endCountNum: number;        // Required
  endCountText?: string;      // Optional
  badgeText?: string;         // Optional
}

const Badge: React.FC<BadgeProps> = ({ containerStyles = '', icon, endCountNum, endCountText = '', badgeText = '' }) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>

      <div className="flex items-centre gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>

        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">{badgeText}</div>
      </div>

      
    </div>
  );
};

export default Badge;
