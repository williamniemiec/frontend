'use client';

import { Category } from '@/types/Category';
import React from 'react';
import { PostTag } from '../PostTag';
import { useRouter } from 'next/router';

interface PostTagsProps {
  postCategories: Category[];
  selectedCategory: string | null;
}

export const PostTags: React.FC<PostTagsProps> = ({
  postCategories,
  selectedCategory,
}) => {
  const router = useRouter();

  const handleTagClick = (categoryId: string) => {
    router.push(`/category/${categoryId}`);
  };

  return (
    <div className="flex flex-row flex-wrap">
      {postCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleTagClick(category.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleTagClick(category.id);
            }
          }}
          className="cursor-pointer border-none bg-transparent p-0 focus:outline-none focus:ring-2 focus:ring-dark-green focus:ring-offset-2 rounded"
          aria-label={`Navigate to ${category.name} category`}
        >
          <PostTag
            name={category.name}
            isFavorite={category.favorite}
            isActive={selectedCategory === category.id}
          />
        </button>
      ))}
    </div>
  );
};

