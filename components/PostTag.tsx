'use client';

import React from 'react';
import { FavoriteIcon } from './FavoriteIcon';

interface PostTagProps {
  name: string;
  isFavorite: boolean;
  isActive?: boolean;
}

export const PostTag: React.FC<PostTagProps> = ({
  name,
  isFavorite,
  isActive = false,
}) => {
  return (
    <div
      className={`px-3 py-2 rounded-md border-2 flex flex-row items-center mr-2 mb-2 ${
        isActive
          ? 'bg-white border-dark-green'
          : 'bg-dark-green border-dark-green'
      }`}
    >
      <span className={`text-sm ${isActive ? 'text-dark-green' : 'text-white'}`}>
        {name}
      </span>
      <FavoriteIcon isFavorite={isFavorite} isActive={isActive} size="small" />
    </div>
  );
};

