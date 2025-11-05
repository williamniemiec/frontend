'use client';

import { useState, useEffect, useRef } from 'react';
import { Post } from '@/types/Post';
import { fetchPostsByCategory } from '@/services/posts';

export const usePosts = (
  selectedCategory: string | null,
  initialPosts?: Post[],
  initialCategory?: string | null
) => {
  const [posts, setPosts] = useState<Post[]>(() => {
    if (initialPosts && initialCategory) {
      return initialPosts;
    }
    return [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasUsedInitialPosts = useRef(false);

  useEffect(() => {
    if (selectedCategory === null) {
      return;
    }

    if (
      !hasUsedInitialPosts.current &&
      initialPosts &&
      initialCategory === selectedCategory
    ) {
      hasUsedInitialPosts.current = true;
      return;
    }

    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        setPosts([]);
        const categoryPosts = await fetchPostsByCategory(selectedCategory);
        setPosts(categoryPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load posts');
        console.error('Error loading posts:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
    hasUsedInitialPosts.current = true;
  }, [selectedCategory, initialPosts, initialCategory]);

  return { posts, loading, error };
};

