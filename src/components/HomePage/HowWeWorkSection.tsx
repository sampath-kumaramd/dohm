"use client";
import React from 'react';


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
  <div className="flex flex-col items-center text-center relative">
    <div className="bg-white rounded-full p-4 mb-4 z-10">
      <Image src={icon} alt={title} width={40} height={40} />
      {!isLast && (
        <div className="absolute top-6 ms-24 w-full h-6 bg-[url('/icons/dashed-line-with-circle.svg')] bg-no-repeat"></div>
      )}
    </div>
    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 w-full min-h-60 -mt-10 pt-20">
      <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
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

  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (

    <section className="py-16  relative">
       <div
        className="absolute inset-0 z-0 bg-cover bg-right w-screen bg-no-repeat"
        style={{
          backgroundImage: `url(${
            isMobile ? homePageHowWeWorkMobileBg.src : homePageHowWeWorkBg.src
          })`,
        }}
      />
      <div className="relative container mx-auto px-4 min-h-[70vh]">
        <h2 className="text-5xl font-bold text-white text-center mb-16 mt-40">
          HOW WE WORK?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
