'use client';
import React, { useEffect, useRef, useState } from 'react';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import homePageFooterBg from '../../../public/background/home-page-hero-footer.svg';
import homePageHeroMobileBg from '../../../public/background/home-page-hero-mobile.png';
import homePageHeroBg from '../../../public/background/home-page-hero.svg';
import CustomButton from '../customButton';
import ScrollIndicator from '../scrollIndicator';
import GradientText from '../ui/GradientText';

const HeroSection = () => {
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
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className=" relative mb-4">
      <section className=" bg-[#faf0e6] cream-100 min-h-screen flex flex-col justify-between pb-40">
        {/* Background with wave */}
        <div className="absolute inset-0 z-0">
          <Image
            src={isMobile ? homePageHeroMobileBg : homePageHeroBg}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>

        {/* Content */}
        <div className=" z-10 container mx-auto px-4 flex-grow flex items-center">
          <div className="w-full flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-1/2 sm:pr-8 lg:pr-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-12 sm:mt-0">
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
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 sm:mb-0">
                <CustomButton className="bg-orange text-white rounded-full px-8 py-2 mb-4 sm:mb-0 sm:mr-4">
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
                      className="rounded-full z-30"
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
                      className="rounded-full z-10"
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
            <div className="w-full sm:w-1/2 mt-8 sm:mt-0  mb-96 sm:mb-0 ">
              <Image
                unoptimized
                src="/homepage/hero-illustration.svg"
                alt="Hero Illustration"
                width={600}
                height={400}
                layout="responsive"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className=" z-10 pb-8 flex justify-center">
          <ScrollIndicator onClick={scrollToNextSection} />
        </div>

        <div ref={nextSectionRef} />
      </section>
      <Image
        src={homePageFooterBg}
        alt="Background"
        height={400}
        width={400}
        className="w-full absolute -bottom-1 "
      />
    </div>
  );
};

export default HeroSection;
