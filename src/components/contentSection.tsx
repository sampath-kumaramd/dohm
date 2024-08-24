// ContentSectionProps
'use client';
import React, { useState, useEffect } from 'react';

import Image from 'next/image';

interface ContentSectionProps {
  backgroundImage: {
    desktop: string;
    mobile: string;
  };
  imageSrc: string;
  imageAlt: string;
  title: {
    firstPart: string;
    highlightedPart: string;
    lastPart: string;
  };
  description: {
    firstPart: string;
    secondPart: string;
    thirdPart?: string;
  };
  imageOnLeft?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  backgroundImage,
  imageSrc,
  imageAlt,
  title,
  description,
  imageOnLeft = true,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-right w-screen bg-no-repeat"
        style={{
          backgroundImage: `url(${isMobile ? backgroundImage.mobile : backgroundImage.desktop})`,
        }}
      />
      <div className="container relative mx-auto grid grid-cols-1 md:grid-cols-2 items-center min-h-screen py-12 sm:py-0">
        <div
          className={`mb-10 md:mb-0 ${imageOnLeft ? 'md:order-first' : 'md:order-last'}`}
        >
          <Image
            unoptimized
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto max-w-[80vw] md:max-w-full"
            width={600}
            height={400}
          />
        </div>
        <div className={`${imageOnLeft ? 'md:pl-10' : 'md:pr-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {title.firstPart} {''}
            <span className="text-orange-light">
              {title.highlightedPart}
            </span>{' '}
            <br />
            {title.lastPart}
          </h2>
          <p className="mb-4 text-gray-600">{description.firstPart}</p>
          <p className="mb-4 text-gray-600">{description.secondPart}</p>
          {description.thirdPart && (
            <p className="mb-6 text-gray-600">{description.thirdPart}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
