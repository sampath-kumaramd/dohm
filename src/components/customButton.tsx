import React from 'react';

import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  children, 
  className, 
  ...props 
}) => {
  return (
    <button
      className={cn(
        "relative px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-300 text-white font-bold text-xl",
        "shadow-[0_0_0_3px_#fff,0_0_0_6px_#f3f3f3]",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-[0_0_0_6px_#fff,0_0_0_9px_#f3f3f3]",
        "active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;