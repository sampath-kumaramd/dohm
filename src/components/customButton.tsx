import React from 'react';

import { cn } from '@/lib/utils';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  hoverBlack?: boolean; // New prop to control hover color
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className,
  hoverBlack = false, // Default to false
  ...props
}) => {
  return (
    <button
      className={cn(
        'relative px-8 py-3 rounded-full bg-gradient-to-r from-orange to-orange-lighter text-white font-bold',
        'shadow-[0_0_0_2px_#fff,0_0_0_6px_#f3f3f3]',
        'transition-all duration-300 ease-in-out',
        {
          'hover:bg-black hover:from-black hover:to-black': hoverBlack,
          'hover:shadow-[0_0_0_4px_#fff,0_0_0_9px_#f3f3f3]': !hoverBlack,
        },
        'active:scale-95',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
