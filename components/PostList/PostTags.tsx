'use client';

import { Category } from '@/types/Category';
import React from 'react';
import { PostTag } from '../PostTag';

interface PostTagsProps {
  postCategories: Category[];
  selectedCategory: string | null;
}

export const PostTags: React.FC<PostTagsProps> = ({
  postCategories,
  selectedCategory,
}) => (
  <div className="flex flex-row flex-wrap">
    {postCategories.map((category) => (
      <PostTag
        key={category.id}
        name={category.name}
        isFavorite={category.favorite}
        isActive={selectedCategory === category.id}
      />
    ))}
  </div>
);

