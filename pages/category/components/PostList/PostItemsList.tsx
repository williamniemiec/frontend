'use client';

import { Category } from '@/types/Category';
import { Post } from '@/types/Post';
import React from 'react';
import { PostItem } from './PostItem';
import { PostDivider } from './PostDivider';

interface PostItemsListProps {
  posts: Post[];
  categories: Category[];
  selectedCategory: string | null;
}

export const PostItemsList: React.FC<PostItemsListProps> = ({
  posts,
  categories,
  selectedCategory,
}) => (
  <div className="flex-1 overflow-y-auto">
    {posts.map((post, index) => {
      const postCategories = categories.filter((cat) =>
        post.categories?.includes(cat.id)
      );

      return (
        <div key={post.id}>
          <PostItem
            post={post}
            postCategories={postCategories}
            selectedCategory={selectedCategory}
          />
          <PostDivider show={index < posts.length - 1} />
        </div>
      );
    })}
  </div>
);

