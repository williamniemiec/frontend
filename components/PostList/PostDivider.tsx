'use client';

import React from 'react';

interface PostDividerProps {
  show: boolean;
}

export const PostDivider: React.FC<PostDividerProps> = ({ show }) => {
  if (!show) return null;
  return <div className="h-px bg-gray-200 mx-6" />;
};

