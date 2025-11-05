'use client';

import React from 'react';

interface HamburgerButtonProps {
  isSmallScreen: boolean;
  isMenuOpen: boolean;
  onToggle: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isSmallScreen, isMenuOpen, onToggle }) => {
  if (!isSmallScreen) return null;

  const buttonContent = (
    <div className="flex flex-col items-center justify-center">
      <div className="w-5 h-0.5 bg-dark-green mb-1.5" />
      <div className="w-5 h-0.5 bg-dark-green mb-1.5" />
      <div className="w-5 h-0.5 bg-dark-green" />
    </div>
  );

  return (
    <button
      onClick={onToggle}
      className="absolute top-4 left-4 z-50 bg-white rounded-md shadow-md p-2 cursor-pointer border-none"
    >
      {buttonContent}
    </button>
  );
};

