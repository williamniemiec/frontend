'use client';

import React from 'react';

interface PostListHeaderProps {
  postCount: number;
  categoryName: string;
}

export const PostListHeader: React.FC<PostListHeaderProps> = ({
  postCount,
  categoryName,
}) => (
  <div className="px-6 py-4 border-b border-gray-200">
    <span className="text-gray-500 font-bold text-sm">
      Found {postCount} posts of "{categoryName}"
    </span>
  </div>
);

