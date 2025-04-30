import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  full?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon,
  loading = false,
  full = false,
}) => {
  const baseStyles = 'rounded-lg font-medium transition-all duration-300 flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-neon-blue focus:ring-2 focus:ring-primary/50 active:brightness-90',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-700/50 active:brightness-90',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10 focus:ring-2 focus:ring-primary/50 active:brightness-90',
    ghost: 'bg-transparent text-gray-300 hover:bg-gray-800 focus:ring-2 focus:ring-gray-700/50 active:brightness-90',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthStyles = full ? 'w-full' : '';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyles} ${className}`}
    >
      {loading ? (
        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;