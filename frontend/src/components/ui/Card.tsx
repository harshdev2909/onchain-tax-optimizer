import React from 'react';

type CardProps = {
  children: React.ReactNode;
  variant?: 'glass' | 'holographic' | 'dark';
  className?: string;
  hover?: boolean;
  tilt?: boolean;
  glow?: boolean;
};

const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  className = '',
  hover = false,
  tilt = false,
  glow = false,
}) => {
  const baseStyles = 'rounded-xl p-4 transition-all duration-300';
  
  const variantStyles = {
    glass: 'bg-gray-900/30 backdrop-blur-md border border-gray-800/50',
    holographic: 'bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-md border border-gray-800/50',
    dark: 'bg-gray-900 border border-gray-800',
  };
  
  const hoverStyles = hover ? 'hover:scale-[1.02] hover:shadow-lg' : '';
  const tiltStyles = tilt ? 'tilt-card' : '';
  const glowStyles = glow ? 'hover:shadow-neon-blue' : '';
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${tiltStyles} ${glowStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;