'use client';

import { Category } from '@/types/Category';
import { Post } from '@/types/Post';
import React from 'react';
import { PostTags } from './PostTags';
import { formatDate } from './utils';

interface PostItemProps {
  post: Post;
  postCategories: Category[];
  selectedCategory: string | null;
}

export const PostItem: React.FC<PostItemProps> = ({
  post,
  postCategories,
  selectedCategory,
}) => (
  <div className="px-6 py-6">
    <h3 className="text-dark-green font-bold text-base mb-3">
      {formatDate(post.date)}
    </h3>
    <p className="text-gray-600 text-base mb-4 leading-6">
      {post.description}
    </p>
    <PostTags
      postCategories={postCategories}
      selectedCategory={selectedCategory}
    />
  </div>
);

