import React from 'react';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface ScrollIndicatorProps {
  onClick: () => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ onClick }) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  return (
    <button 
      className="absolute z-40 bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce focus:outline-none  focus:ring-opacity-50"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label="Scroll to next section"
    >
      <div className="w-12 h-24 bg-gradient-to-br border-1 border-white from-orange to-orange-lighter rounded-full flex items-center justify-center">
              <Image
              src="/icons/down-arrow.svg"
              alt="Hero Illustration"
              width={20}
              height={20}
            />
      </div>
    </button>
  );
};

export default ScrollIndicator;