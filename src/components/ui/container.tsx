import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-screen-xl mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
