'use client';

import React, { useState } from 'react';

import { CodeIcon, SmartphoneIcon } from 'lucide-react';
import Image from 'next/image';

import CustomButton from './customButton';

interface ServiceCardProps {
  title: string;
  description: string;
  iconType: string;
  iconSrc: string;
  isIconLeft: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconType,
  iconSrc,
  isIconLeft,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex p-10 pt-24 sm:pt-8 bg-white rounded-xl shadow-lg max-w-5xl hover:bg-gradient-to-br hover:from-orange hover:to-orange-lighter hover:text-white ">
      <div
        className="w-full max-w-5xl transition-all duration-300 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative flex flex-col sm:flex-row items-center">
          <div
            className={`
          p-6 rounded-lg shadow-lg bg-white z-10 
          absolute ${isIconLeft ? 'sm:left-0' : 'sm:right-0'} sm:top-1/2 -translate-y-1/2
          ${isHovered ? 'bg-orange-100' : 'bg-white'}
          transition-all duration-300
        `}
          >
            <Image
              unoptimized
              src={iconSrc}
              alt={title}
              width={84}
              height={84}
            />
          </div>
          <div
            className={`
          mt-4 sm:mt-0 ${isIconLeft ? 'sm:ms-20' : 'sm:me-20'} sm:px-36 p-8 rounded-lg shadow-lg transition-all duration-300 w-full
          ${isHovered ? 'bg-none shadow-none' : 'bg-gray-200'}
        `}
          >
            <div className=" space-y-5 sm:space-y-5 pt-10 sm:pt-0 text-center sm:text-left">
              <h3
                className={`text-2xl sm:text-5xl font-bold ${isHovered ? 'text-white' : 'text-black'}`}
              >
                {title}
              </h3>
              <p
                className={`text-sm sm:text-base ${isHovered ? 'text-white' : 'text-gray-600'}`}
              >
                {description}
              </p>
              <CustomButton hoverBlack={isHovered}>Learn more</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
