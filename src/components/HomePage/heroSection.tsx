'use client';
import React from 'react';

import { useMediaQuery } from 'react-responsive';

import { Button } from '@/components/ui/button';

import homePageHeroMobileBg from '../../../public/background/home-page-hero-mobile.svg';
import homePageHeroBg from '../../../public/background/home-page-hero.svg';

const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-right w-screen"
        style={{
          backgroundImage: `url(${
            isMobile ? homePageHeroMobileBg.src : homePageHeroBg.src
          })`,
        }}
      />
      <div className="container relative z-10 mx-auto px-4 py-16 sm:py-24 min-h-[10vh]">
        <div className="mx-auto items-center px-4 sm:flex">
          <div className="flex-1 sm:pe-20 sm:pr-8 lg:pe-28 xl:pe-40">f</div>
          <div className="mt-8 flex-1 justify-between sm:mt-0">
            f f f
            <div className="mt-16 flex justify-evenly gap-4">
              <button className="rounded-2xl">f</button>
              <button className="rounded-2xl">f</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
