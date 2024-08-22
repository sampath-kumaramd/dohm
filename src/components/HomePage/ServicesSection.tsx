"use client";
import React from 'react';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import { Card, CardContent } from '../ui/card';
import GradientText from '../ui/GradientText';


interface ServiceCardProps {
  title: string;
  description: string;
  iconSrc: string;
  highlighted?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconSrc,
  highlighted = false,
}) => (
  <Card
    className={`p-2 transition-all duration-300 shadow-md rounded-2xl ${
      highlighted
        ? 'bg-gradient-to-br from-orange to-orange-lighter text-white'
        : 'bg-white hover:bg-gradient-to-br hover:from-orange hover:to-orange-lighter hover:text-white'
    } group h-full`}
  >
    <div className="flex flex-col items-center text-center h-full">
      <div className="mb-4 bg-white p-6 rounded-3xl shadow-md">
        <Image
          src={iconSrc}
          alt={title}
          width={64}
          height={64}
          className={`transition-colors duration-300 ${
            highlighted
              ? 'text-white'
              : 'text-orange-400 group-hover:text-white'
          }`}
        />
      </div>
      <CardContent className="bg-[#f9f9f9] p-4 rounded-lg group-hover:bg-transparent flex flex-col justify-between flex-grow w-full">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p
            className={`mb-4 ${highlighted ? 'text-white' : 'text-gray-600 group-hover:text-white'}`}
          >
            {description}
          </p>
        </div>
        <div className="mt-auto">
          <button
            className={`font-bold w-full ${
              highlighted
                ? 'text-white'
                : 'text-white group-hover:inline-block hidden'
            } transition-colors duration-300`}
          >
            LEARN MORE
          </button>
          <GradientText
            gradientColors={['#d57a0e', '#e49f34']}
            className="group-hover:hidden font-bold w-full"
          >
            LEARN MORE
          </GradientText>
        </div>
      </CardContent>
    </div>
  </Card>
);

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: 'WEB DEVELOPMENT',
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
      iconSrc: '/icons/web-development-icon.svg',
    },
    {
      title: 'APP DEVELOPMENT',
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
      iconSrc: '/icons/app-development-icon.svg',
    },
    {
      title: 'INDIVIDUAL SOFTWARE DEVELOPMENT',
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
      iconSrc: '/icons/software-development-icon.svg',
    },
    {
      title: 'DATABASE PLANNING & MANAGEMENT',
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
      iconSrc: '/icons/database-icon.svg',
    },
    {
      title: 'API DEVELOPMENT & INTEGRATION',
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
      iconSrc: '/icons/api-icon.svg',
    },
  ];
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section className="py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-right w-screen bg-no-repeat"
        style={{
          backgroundImage: `url(${
            isMobile ? '../../../public/background/home-page-our-service-mobile.svg' : '../../../public/background/home-page-our-service.svg'
          })`,
        }}
      />
      <div className="container relative mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          OUR
          <GradientText
            gradientColors={['#d57a0e', '#e49f34']}
            className="group-hover:hidden font-bold w-full ms-2"
          >
            SERVICES
          </GradientText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-start-2 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.slice(3).map((service, index) => (
              <ServiceCard key={index + 3} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
