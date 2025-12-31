import React from 'react';
import clsx from 'clsx';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: boolean;
  border?: boolean;
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  children,
  className,
  padding = 'md',
  shadow = false,
  border = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white',
        paddingClasses[padding],
        shadow && 'shadow-lg',
        border && 'border border-gray-200',
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
