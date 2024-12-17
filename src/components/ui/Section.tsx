import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'light' | 'dark' | 'gradient';
}

export function Section({ children, className = '', background = 'light' }: SectionProps) {
  const getBgClass = () => {
    switch (background) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'gradient':
        return 'bg-gradient-to-r from-purple-50 to-pink-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <section className={`py-20 ${getBgClass()} ${className}`}>
      {children}
    </section>
  );
}