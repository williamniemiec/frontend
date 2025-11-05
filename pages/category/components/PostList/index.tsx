'use client';

import { Category } from '@/types/Category';
import { Post } from '@/types/Post';
import React from 'react';
import { PostListHeader } from './PostListHeader';
import { PostItemsList } from './PostItemsList';

interface PostListProps {
  posts: Post[];
  categories: Category[];
  selectedCategory: string | null;
}

export const PostList: React.FC<PostListProps> = ({
  posts,
  categories,
  selectedCategory,
}) => {
  const selectedCategoryName = selectedCategory
    ? categories.find((cat) => cat.id === selectedCategory)?.name || 'All'
    : 'All';

  return (
    <div className="flex-1 bg-white">
      <PostListHeader postCount={posts.length} categoryName={selectedCategoryName} />
      <PostItemsList
        posts={posts}
        categories={categories}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

