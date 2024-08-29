'use client';
import React, { useRef } from 'react';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import homePageHeroMobileBg from '../../../public/background/home-page-hero-mobile.png';
import homePageHeroBg from '../../../public/background/home-page-hero.svg';
import CustomButton from '../customButton';
import ScrollIndicator from '../scrollIndicator';
import GradientText from '../ui/GradientText';

const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-right w-screen bg-no-repeat"
          style={{
            backgroundImage: `url(${
              isMobile ? homePageHeroMobileBg.src : homePageHeroBg.src
            })`,
          }}
        />
        <div className="container relative z-10 mx-auto px-4 py-24 min-h-screen">
          <div className="mx-auto items-center px-4 sm:flex -mt-10">
            <div className="flex-1 sm:pe-20 sm:pr-8 lg:pe-28 xl:pe-40">
              <h1 className="sm:text-6xl text-4xl font-bold mb-4">
                <span className="text-charcoal">WE BUILD</span>
                <br />
                <GradientText gradientColors={['#d57a0e', '#e49f34']}>
                  PRODUCTS
                </GradientText>
                <span className="text-charcoal ms-2">THAT</span>
                <br />
                <span className="text-charcoal">WORK BETTER!</span>
              </h1>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet consectetur. Senectus amet sed
                gravida mauris ut sed blandit massa. Condimentum vel eget arcu
                euismod tempus sagittis sed.
              </p>
              <div className="flex items-center">
                <CustomButton className="bg-orange text-white rounded-full px-8 py-2 mr-4">
                  Get Started
                </CustomButton>
                <div className="flex items-center">
                  <div className="flex -space-x-3 mr-2">
                    <Image
                      unoptimized
                      src="/icons/people/avatar1.png"
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full z-40"
                    />
                    <Image
                      unoptimized
                      src="/icons/people/avatar2.png"
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full z-20"
                    />
                    <Image
                      unoptimized
                      src="/icons/people/avatar3.png"
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 w-4 h-4 mr-1" />
                    <span className="font-bold mr-1">4.7</span>
                    <span className="text-gray-600">| 200+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 px-6 py-12 flex-1 justify-between sm:mt-0">
              <Image
                unoptimized
                src="/homepage/hero-illustration.svg"
                alt="Hero Illustration"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
        <ScrollIndicator onClick={scrollToNextSection} />
      </section>
      <div ref={nextSectionRef} />
    </>
  );
};

export default HeroSection;
