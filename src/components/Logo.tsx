
import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <span className={`font-bold ${sizeClasses[size]} text-blue-600 dark:text-blue-400`}>Squad</span>
      <span className={`font-bold ${sizeClasses[size]} text-green-600 dark:text-green-400`}>Sync</span>
    </div>
  );
};

export default Logo;
