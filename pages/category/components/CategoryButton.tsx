'use client';

import React from 'react';
import { FavoriteIcon } from './FavoriteIcon';

interface CategoryButtonProps {
  name: string;
  isActive: boolean;
  isFavorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  name,
  isActive,
  isFavorite,
  onPress,
  onToggleFavorite,
}) => {
  const buttonClassName = `mb-3 px-4 py-1 rounded-md border-2 flex flex-row items-center transition-transform duration-200 hover:scale-105 self-start cursor-pointer ${
    isActive
      ? 'bg-white border-dark-green'
      : 'bg-dark-green border-dark-green'
  }`;

  return (
    <button
      onClick={onPress}
      className={buttonClassName}
    >
      <span className={`text-sm ${isActive ? 'text-dark-green' : 'text-white'}`}>
        {name}
      </span>
      <FavoriteIcon isFavorite={isFavorite} isActive={isActive} onPress={onToggleFavorite} />
    </button>
  );
};

