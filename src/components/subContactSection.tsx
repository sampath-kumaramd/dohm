import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import ContactInfoSectionBackgroundMobile from '../../public/background/contact-info-section-background-mobile.svg';
import ContactInfoSectionBackground from '../../public/background/contact-info-section-background.svg';

const SubContactSection: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section className="relative min-h-[50vh]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${
            isMobile
              ? ContactInfoSectionBackgroundMobile.src
              : ContactInfoSectionBackground.src
          })`,
        }}
      />
      <div className="container relative z-10 mx-auto w-full h-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-36 sm:pt-56">
          <div>
            <h2 className="text-white text-3xl md:text-5xl font-bold">
              LET&apos;S DISCUSS YOUR
              <br />
              NEXT PROJECT
            </h2>
          </div>
          <div className="flex md:justify-end mt-6 md:mt-0">
            <button className="bg-charcoal text-white font-bold py-4 w-auto px-8 rounded-full hover:bg-gray-800 transition-colors duration-300 border-white border-2 cursor-pointer inline-block">
              <Link href="/contact-us">Contact us</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubContactSection;
