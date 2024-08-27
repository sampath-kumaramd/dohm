'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import ContentSection from '@/components/contentSection';
import SubHeroSection from '@/components/subHeroSection';
import GradientText from '@/components/ui/GradientText';

import HowWeWorksBg from '../../../public/background/1.svg';
import AboutUsMobileBg from '../../../public/background/about-us-background-mobile.svg';
import AboutUsBg from '../../../public/background/about-us-background.svg';
import ContactInfoSectionBackgroundMobile from '../../../public/background/contact-info-section-background-mobile.svg';
import ContactInfoSectionBackground from '../../../public/background/contact-info-section-background.svg';
import HowWeWorksBgMobile from '../../../public/background/how-we-works-background-mobile.svg';

interface TeamMemberCardProps {
  name: string;
  position: string;
  description: {
    firstPart: string;
    secondPart: string;
  };
  imageSrc: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  position,
  description,
  imageSrc,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow-lg rounded-lg overflow-hidden mx-4 sm:mx-36">
    <div className="p-6 sm:col-span-1">
      <Image
        src={imageSrc}
        alt={name}
        width={300}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 sm:col-span-2 space-y-5">
      <h3 className="text-2xl font-bold mb-3">{name}</h3>
      <GradientText
        gradientColors={['#d57a0e', '#e49f34']}
        className="group-hover:hidden text-sm font-semibold w-full"
      >
        {position}
      </GradientText>
      <p className="text-gray-900">{description.firstPart}</p>
      <p className="text-gray-900">{description.firstPart}</p>
      <div className="mt-4">
        <Link href="/linked-in">
          <Image
            src="/icons/linked-in-gradient.svg"
            alt="LinkedIn"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  </div>
);

const HowWeWorkSection: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="h-auto">
      <SubHeroSection
        title={{
          firstWord: {
            text: 'ABOUT',
            gradientColors: {
              from: '#d57a0e',
              to: '#e49f34',
            },
          },
          secondWord: {
            text: 'US',
            color: '#000000',
          },
          reverseColors: false,
        }}
        subtitle="Lorem ipsum dolor sit amet consectetur. Senectus amet sed gravida mauris ut sed blandit massa."
      />
      <ContentSection
        backgroundImage={{
          desktop: AboutUsBg.src,
          mobile: AboutUsMobileBg.src,
        }}
        imageSrc="/aboutUsPage/about-us-illustration.svg"
        imageAlt="Idea Execution Illustration"
        title={{
          firstPart: 'ENSURING',
          highlightedPart: 'QUALITY',
          lastPart: '& EXCELLENCE',
        }}
        description={{
          firstPart:
            'Lorem ipsum dolor sit amet consectetur. Gravida at consequat malesuada in et vel quam turpis facilisis. Gravida gravida massa euismod id vehicula. Sagittis tempor ut pellentesque et. Leo elementum quis leo aliquet. Commodo sed in ac feugiat aliquam. Fusce donec ultrices tincidunt praesent.',
          secondPart:
            'Blandit nulla nunc sapien non sit ultrices ut. Dignissim aliquet lectus acdum sed ultrices semper sed sed turpis. Venenatis vel sed convallis quis volutpat.',
          thirdPart:
            'Eu a orci cras felis nulla malesuada porta commodo. Nisi rhoncus molestie sed gravida vel at augue. Egestas urna vitae magnis eget. Sit odio et est nulla egestas integer nunc condimentum. Vitae turpis magna aliquam aliquam.',
        }}
        imageOnLeft={true}
      />
      <section className="py-16 relative h-[280vh] sm:h-[300vh]">
        <div
          className="absolute inset-0 z-0 bg-cover bg-right w-screen bg-no-repeat"
          style={{
            backgroundImage: `url(${
              isMobile ? HowWeWorksBgMobile.src : HowWeWorksBg.src
            })`,
          }}
        />
        <div className="relative container mx-auto px-4 min-h-screen">
          <h2 className="text-4xl sm:text-6xl font-bold text-white text-center py-6 mt-12 sm:mt-24 sm:py-24">
            HOW WE WORK?
          </h2>
          <div className="flex justify-center items-center w-full">
            <Image
              unoptimized
              src={
                isMobile
                  ? '/aboutUsPage/how-we-works-illustration-mobile.svg'
                  : '/aboutUsPage/how-we-works-illustration.svg'
              }
              alt="Hero Illustration"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        <div className="mx-8 sm:mx-[60vh] mt-12 sm:mt-24">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-3xl p-6 w-full min-h-48 -mt-10 pt-8 sm:pt-20 border-4 border-white border-opacity-70 text-center">
            <h3 className="mx-4 sm:mx-16 text-white text-center text-xl sm:text-3xl font-bold mb-8">
              GET FULL SUPPORT FOR ALL YOUR PROGRAMING NEEDS.
            </h3>
            <button className="bg-charcoal text-white font-bold py-4 w-full sm:w-auto px-8 rounded-full hover:bg-gray-800 transition-colors duration-300 border-white border-2 cursor-pointer inline-block">
              <Link href="/contact-us">Contact us</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            OUR{' '}
            <span>
              <GradientText
                gradientColors={['#d57a0e', '#e49f34']}
                className="group-hover:hidden font-bold w-full"
              >
                AMAZING
              </GradientText>
            </span>{' '}
            TEAM
          </h2>
          <TeamMemberCard
            name="WILL SMITH"
            position="FOUNDER & CEO"
            description={{
              firstPart:
                'Lorem ipsum dolor sit amet consectetur. Gravida at consequat malesuada in et vel quam turpis facilisis. Gravida gravida massa euismod id vehicula. Sagittis tempor ut pellentesque et. Leo elementum quis leo aliquet. Commodo sed in ac feugiat aliquam. Fusce donec ultrices tincidunt praesent.',
              secondPart:
                'Blandit nulla nunc sapien non sit ultrices ut. Dignissim aliquet lectus acdum sed ultrices semper sed sed turpis. Venenatis vel sed convallis quis volutpat.',
            }}
            imageSrc="/aboutUsPage/team-member-1.svg"
          />
          {/* Add more TeamMemberCard components here for additional team members */}
        </div>
      </section>
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
    </div>
  );
};

export default HowWeWorkSection;
