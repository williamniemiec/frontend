'use client';

import { useState, useEffect } from 'react';
import { Category } from '@/types/Category';
import { fetchCategories } from '@/services/posts';

/**
 * Custom hook to fetch and manage categories
 */
export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load categories');
        console.error('Error loading categories:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, setCategories, loading, error };
};

