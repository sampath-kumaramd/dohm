import React, { useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import carouselBackground from '../../public/background/carouselBackground.svg';

interface CarouselItem {
  name: string;
  image: string;
  description: string;
  logo?: string;
}

interface CustomCarouselProps {
  items: CarouselItem[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(3);

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full  mx-auto h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-orange-300 rounded-3xl -z-10" style={{ transform: 'skew(0, -5deg)' }}></div>
      
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-5/12 z-30 pointer-events-none"
           style={{ background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)' }}>
      </div>
      
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-5/12 z-30 pointer-events-none"
           style={{ background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)' }}>
      </div>

      <div className="relative h-full flex items-center justify-center">
        {items.map((item, index) => {
          const position = (index - activeIndex + items.length) % items.length;
          const adjustedPosition = position > items.length / 2 ? position - items.length : position;
          const isActive = adjustedPosition === 0;
          const isVisible = Math.abs(adjustedPosition) <= 3;

          return (
            <div
              key={index}
              className={`absolute w-[300px] h-[400px] transition-all duration-500 ${
                isVisible ? '' : 'opacity-0 pointer-events-none'
              }`}
              style={{
                transform: `translateX(${adjustedPosition * 60}%) scale(${1 - Math.abs(adjustedPosition) * 0.15})`,
                zIndex: items.length - Math.abs(adjustedPosition),
              }}
            >
              <div className="relative w-full h-full rounded-3xl shadow-lg overflow-hidden"
                   style={{
                     border: '15px solid rgba(244, 219, 186, 0.8)',
                   }}>
                <Image
                  src={carouselBackground}
                  alt="Card background"
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pt-12 pb-6 text-center">
                  <div className="absolute top-14 w-28 h-28 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={196}
                      height={196}
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 mt-28">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-center">
                    <Image src="/google-logo.svg"
        alt="Google" width={30} height={30} className="mr-2" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#ff9e22]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  {item.logo && (
                    <div className="absolute bottom-4 right-4 text-sm font-bold text-gray-500">
                      {item.logo}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white z-40"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white z-40"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CustomCarousel;