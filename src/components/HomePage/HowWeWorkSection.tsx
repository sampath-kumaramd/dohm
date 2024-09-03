'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import homePageHowWeWorkMobileBg from '../../../public/background/home-page-how-we-work-mobile.svg';
import homePageHowWeWorkBg from '../../../public/background/home-page-how-we-work.svg';

interface WorkStepProps {
  icon: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const WorkStep: React.FC<WorkStepProps> = ({
  icon,
  title,
  description,
  isLast = false,
}) => (
  <div className="flex sm:flex-col flex-row items-center sm:text-center relative">
    <div className="bg-white rounded-full p-4 mb-4 z-10">
      <Image unoptimized src={icon} alt={title} width={40} height={40} />
      {!isLast && (
        <div className="absolute top-32 sm:top-6 sm:ms-24 w-full h-full sm:h-6 sm:bg-[url('/icons/dashed-line-with-circle.svg')] bg-[url('/icons/dashed-line-with-circle-mobile.svg')] bg-no-repeat"></div>
      )}
    </div>
    <div className="-ms-8 ps-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 w-full sm:min-h-60 sm:-mt-10 sm:pt-20">
      <h3 className="text-white sm:text-2xl text-lg font-bold mb-2">{title}</h3>
      <p className="text-cream text-base">{description}</p>
    </div>
  </div>
);

const HowWeWorkSection: React.FC = () => {
  const steps = [
    {
      icon: '/icons/idea-icon.svg',
      title: 'IDEA & PLANNING',
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
    },
    {
      icon: '/icons/design-icon.svg',
      title: 'DESIGN',
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
    },
    {
      icon: '/icons/development-icon.svg',
      title: 'DEVELOPMENT',
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
    },
    {
      icon: '/icons/launch-icon.svg',
      title: 'LAUNCH',
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on initial load
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section className="py-16 relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-right w-full bg-no-repeat"
        style={{
          backgroundImage: `url(${
            isMobile ? homePageHowWeWorkMobileBg.src : homePageHowWeWorkBg.src
          })`,
        }}
      />
      <div className="relative container mx-auto px-4 min-h-[80vh]">
        <h2 className="sm:text-5xl text-3xl font-bold text-white text-center mb-16 sm:mt-40 mt-12">
          HOW WE WORK?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:mx-0 mx-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <WorkStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="developer-booking-form"
            smooth={true}
            duration={500}
            className="bg-charcoal text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300 border-white border-2 cursor-pointer inline-block"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
