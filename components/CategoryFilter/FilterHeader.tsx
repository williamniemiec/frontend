'use client';

import React from 'react';

interface FilterHeaderProps {
  onClose?: () => void;
  showCloseButton?: boolean;
}

export const FilterHeader: React.FC<FilterHeaderProps> = ({ onClose, showCloseButton }) => (
  <div className="bg-dark-green px-4 py-4 flex flex-row items-center justify-between">
    <span className="text-white text-center text-sm font-semibold flex-1">Posts</span>
    {showCloseButton && onClose && (
      <button
        onClick={onClose}
        className="p-1 cursor-pointer bg-transparent border-none text-white text-xl font-bold"
      >
        ×
      </button>
    )}
  </div>
);

