import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import CustomButton from '@/components/customButton';
import GradientText from '@/components/ui/GradientText';

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF0E6] px-4">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center">
        <GradientText gradientColors={['#d57a0e', '#e49f34']}>
          404 - Page Not Found
        </GradientText>
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 transition duration-300"
      >
        <CustomButton> Go Back Home</CustomButton>
       
      </Link>
    </div>
  );
};

export default Custom404;