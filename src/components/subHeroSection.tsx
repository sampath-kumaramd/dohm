'use client';
import React, { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';

import { Button } from '@/components/ui/button';

import homePageHeroMobileBg from '../../public/background/sub-hero-section-page-mobile.svg';
import homePageHeroBg from '../../public/background/sub-hero-section-page.svg';

interface ButtonProps {
  text: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  action: string;
}

interface TabProps {
  text: string;
  active: boolean;
}

interface GradientColors {
  from: string;
  to: string;
}

interface TitleWordProps {
  text: string;
  color?: string;
  gradientColors?: GradientColors;
}

interface SubHeroSectionProps {
  title?: {
    firstWord: TitleWordProps;
    secondWord: TitleWordProps;
    reverseColors?: boolean;
  };
  subtitle?: string;
  content?: React.ReactNode;
  buttons?: ButtonProps[];
  tabs?: TabProps[];
  onTabClick?: (tabText: string) => void;
}

const GradientText: React.FC<{
  children: React.ReactNode;
  colors: GradientColors;
}> = ({ children, colors }) => (
  <span
    style={{
      background: `linear-gradient(to right, ${colors.from}, ${colors.to})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
    }}
  >
    {children}
  </span>
);

const SubHeroSection: React.FC<SubHeroSectionProps> = ({
  title,
  subtitle,
  content,
  buttons,
  tabs,
  onTabClick,
}) => {
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

  const handleButtonClick = (action: string) => {
    console.log(`Button clicked: ${action}`);
    // Add more complex logic here if needed
  };

  const handleTabClick = (tabText: string) => {
    if (onTabClick) {
      onTabClick(tabText);
    }
  };

  const renderWord = (word: TitleWordProps) => {
    if (word.gradientColors) {
      return (
        <GradientText colors={word.gradientColors}>{word.text}</GradientText>
      );
    }
    return <span style={{ color: word.color || 'inherit' }}>{word.text}</span>;
  };

  return (
    <section className="relative overflow-hidden h-auto">
      <div
        className="absolute inset-0 z-0 bg-cover bg-right w-screen bg-no-repeat"
        style={{
          backgroundImage: `url(${isMobile ? homePageHeroMobileBg.src : homePageHeroBg.src})`,
        }}
      />
      <div className="container relative z-10 mx-auto px-4 py-8 sm:py-24 min-h-48 sm:min-h-[82vh]">
        <div className="flex items-center h-[50vh]">
          <div className="mx-auto items-center text-center px-4 -mt-10">
            {title && (
              <h1 className="text-4xl sm:text-7xl font-bold mb-6">
                {title.reverseColors ? (
                  <>
                    {renderWord(title.secondWord)} {renderWord(title.firstWord)}
                  </>
                ) : (
                  <>
                    {renderWord(title.firstWord)} {renderWord(title.secondWord)}
                  </>
                )}
              </h1>
            )}
            {subtitle && (
              <p className="text-xl mb-6 text-gray-500 mx-4 lg:mx-72">
                {subtitle}
              </p>
            )}
            {content && <div className="mb-8">{content}</div>}
            {buttons && buttons.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant}
                    onClick={() => handleButtonClick(button.action)}
                  >
                    {button.text}
                  </Button>
                ))}
              </div>
            )}
            {tabs && tabs.length > 0 && (
              <div className="flex flex-wrap gap-4 justify-center">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full ${
                      tab.active
                        ? 'bg-gradient-to-r from-orange to-orange-lighter text-white'
                        : 'bg-white text-black'
                    }`}
                    onClick={() => handleTabClick(tab.text)}
                  >
                    {tab.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeroSection;
