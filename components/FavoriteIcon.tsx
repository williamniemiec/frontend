'use client';

import React from 'react';

interface FavoriteIconProps {
  isFavorite: boolean;
  isActive: boolean;
  onPress?: () => void;
  size?: 'small' | 'large';
}

export const FavoriteIcon: React.FC<FavoriteIconProps> = ({ 
  isFavorite, 
  isActive, 
  onPress,
  size = 'large'
}) => {
  const icon = isFavorite ? '★' : '☆';
  const textSize = size === 'small' ? 'text-xs' : 'text-lg';
  const marginLeft = size === 'small' ? 'ml-1.5' : 'ml-2';

  const iconElement = (
    <span className={`${textSize} ${isActive ? 'text-dark-green' : 'text-white'}`}>
      {icon}
    </span>
  );

  if (onPress) {
    return (
      // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
      <div
        onClick={(e) => {
          e.stopPropagation();
          onPress();
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            onPress();
          }
        }}
        className={`${marginLeft} cursor-pointer bg-transparent border-none p-1`}
      >
        {iconElement}
      </div>
    );
  }

  return (
    <span className={marginLeft}>
      {iconElement}
    </span>
  );
};

