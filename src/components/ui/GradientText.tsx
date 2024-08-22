import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  gradientColors: string[];
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradientColors,
  className = '',
}) => {
  const gradientStyle: React.CSSProperties = {
    background: `linear-gradient(to right, ${gradientColors.join(', ')})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent', // Fallback for browsers that don't support background-clip: text
  };

  return (
    <span className={className} style={gradientStyle}>
      {children}
    </span>
  );
};

export default GradientText;
